/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		config.module.rules.push({
			test: /\.(png|jpg|gif|pdf|jpeg)$/,
			use: ['file-loader?name=[path][name].[ext]'],
		});

		return config;
	},
}

module.exports = nextConfig
