module.exports = {
    siteUrl: 'https://www.faisalnawaz.in/', // Replace with your domain
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/admin'],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
      ],
    },
};
  