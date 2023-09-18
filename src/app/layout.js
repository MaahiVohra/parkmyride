import "./globals.css";
import { Inter } from "next/font/google";

//components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { BookingProvider } from "@/context/BookingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "parkmyride",
	description: "Find your nearest parking",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<BookingProvider>{children}</BookingProvider>
				<Footer />
			</body>
		</html>
	);
}
