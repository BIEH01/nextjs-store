import { fileURLToPath } from "url";
import { dirname, join } from "path";
import NextBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withBundleAnalyzer = NextBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
	sassOptions: {
		includePaths: [join(__dirname, "src/sass")],
		prependData: `@import "main.sass"`,
	},
	images: {
		remotePatterns: [
			{
				hostname: "cdn.shopify.com",
				protocol: "https",
			},
		],
	},
};

export default withBundleAnalyzer(nextConfig);
