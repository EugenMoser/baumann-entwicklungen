const fs = require("fs");
const path = require("path");

// Produktdaten direkt einlesen (da die API beim Build nicht läuft)
async function getProducts() {
  // Hier würden wir normalerweise die DB abfragen, aber für den statischen Build
  // müssen wir die testdb.json verwenden oder die DB direkt abfragen
  const mysql = require("mysql2/promise");
  require("dotenv").config({ path: ".env.local" });

  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    });

    const query = `
      SELECT 
        product.product_id,
        product.category,
        product.product_name,
        product.product_imagepath_big1,
        product.product_imagepath_big2,
        product.product_imagepath_big3,
        product.product_description1,
        (
          SELECT GROUP_CONCAT(article.article_number SEPARATOR ', ')
          FROM article
          WHERE article.product_id = product.product_id
        ) as article_numbers
      FROM product
    `;

    const [products] = await connection.execute(query);
    await connection.end();
    return products;
  } catch (error) {
    console.error("Fehler beim Abrufen der Produktdaten:", error.message);
    return [];
  }
}

function generateImageSitemap(products, baseUrl) {
  const sitemapEntries = products
    .map((product) => {
      const images = [
        product.product_imagepath_big1,
        product.product_imagepath_big2,
        product.product_imagepath_big3,
      ].filter(Boolean);

      if (images.length === 0) return "";

      const imageEntries = images
        .map((img, idx) => {
          const articleInfo = product.article_numbers
            ? ` - Art.-Nr. ${product.article_numbers}`
            : "";
          const suffix =
            idx === 0 ? "" : idx === 1 ? " - Detail" : " - Ansicht";
          return `
      <image:image>
        <image:loc>${baseUrl}${img}</image:loc>
        <image:title>${escapeXml(
          product.product_name + articleInfo + suffix,
        )}</image:title>
        <image:caption>${escapeXml(
          (product.product_description1 || product.product_name) +
            articleInfo,
        )}</image:caption>
      </image:image>`;
        })
        .join("");

      return `
  <url>
    <loc>${baseUrl}/products/${product.category}/${product.product_id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>${imageEntries}
  </url>`;
    })
    .filter(Boolean)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries}
</urlset>`;
}

function escapeXml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function main() {
  const baseUrl = "https://www.baumann-entwicklungen.de";
  const products = await getProducts();

  if (products.length === 0) {
    console.log(
      "⚠️  Keine Produkte gefunden. Bilder-Sitemap wird nicht erstellt.",
    );
    return;
  }

  const imageSitemap = generateImageSitemap(products, baseUrl);
  const outputPath = path.join(__dirname, "../out/sitemap-images.xml");

  fs.writeFileSync(outputPath, imageSitemap, "utf-8");
  console.log(`✅ Bilder-Sitemap erstellt: ${outputPath}`);
  console.log(`📊 ${products.length} Produkte mit Bildern indexiert`);

  // Aktualisiere die Haupt-Sitemap-Index-Datei
  const sitemapIndexPath = path.join(__dirname, "../out/sitemap.xml");
  if (fs.existsSync(sitemapIndexPath)) {
    let sitemapIndex = fs.readFileSync(sitemapIndexPath, "utf-8");

    // Prüfe, ob die Bilder-Sitemap bereits eingetragen ist
    if (!sitemapIndex.includes("sitemap-images.xml")) {
      sitemapIndex = sitemapIndex.replace(
        "</sitemapindex>",
        `<sitemap><loc>${baseUrl}/sitemap-images.xml</loc></sitemap>\n</sitemapindex>`,
      );
      fs.writeFileSync(sitemapIndexPath, sitemapIndex, "utf-8");
      console.log("✅ Haupt-Sitemap aktualisiert");
    }
  }
}

main();
