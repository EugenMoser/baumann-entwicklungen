/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.baumann-entwicklungen.de",
  generateRobotsTxt: true,
  outDir: "out",
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.baumann-entwicklungen.de/sitemap-images.xml",
    ],
  },
};
