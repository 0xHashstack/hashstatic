/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	output: 'export',
};

module.exports = nextConfig;
