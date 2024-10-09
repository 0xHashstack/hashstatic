// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://hashstack.finance/', // Your main website URL
    generateRobotsTxt: true, // (optional)
    transform: async (config, path) => {
        const additionalLinks = [
            { loc: 'https://discord.gg/FpBhQ7M3d4', changefreq: 'weekly', priority: 0.9 },
            { loc: 'https://docs.hashstack.finance', changefreq: 'weekly', priority: 0.8 },
            { loc: 'https://twitter.com/0xHashstack', changefreq: 'weekly', priority: 0.7 },
            { loc: 'https://blog.hashstack.finance', changefreq: 'weekly', priority: 0.6 },
            { loc: 'https://www.youtube.com/@hashstack', changefreq: 'monthly', priority: 0.5 },
            { loc: 'https://instagram.com/0xhashstack', changefreq: 'monthly', priority: 0.4 },
            // Add other external links here
        ];

        return [
            { loc: path, changefreq: 'daily', priority: 1.0 }, // Main website pages
            ...additionalLinks, // Include external links
        ];
    },
};
