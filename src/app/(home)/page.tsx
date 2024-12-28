import { MainProducts } from "app/components/home/MainProducts";
import "app/sass/globals.sass";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Future World",
	description: "Welcome to the future world, an e-commerce from other century",
	keywords: ["ecommerce", "future", "world", "technology"],
};

export default function Home() {
	return (
		<main>
			<MainProducts />
		</main>
	);
}
