import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
//components
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

import { BookingProvider } from "@/app/context/BookingContext";

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
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<Navbar />
					<BookingProvider>{children}</BookingProvider>
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}
