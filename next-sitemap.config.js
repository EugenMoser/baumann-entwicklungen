/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.baumann-entwicklungen.de",
  generateRobotsTxt: true,
  outDir: "out",
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Produktdetailseiten höhere Priorität geben
    if (path.match(/\/products\/[^/]+\/[^/]+$/)) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    // Kategorieseiten
    if (path.match(/\/products\/[^/]+$/)) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    // Startseite
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://www.baumann-entwicklungen.de/sitemap-images.xml",
    ],
  },
};
