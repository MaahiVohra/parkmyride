"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// pages/success-login.js
export default function SuccessLoginPage() {
	const referrerURL = sessionStorage.getItem("referrerURL");
	const router = useRouter();
	useEffect(() => {
		if (referrerURL) {
			sessionStorage.removeItem("referrerURL");
			router.push(`/${referrerURL}`);
		} else {
			// Redirect to a default success login page
			router.push("/");
		}
	}, []);

	return (
		<div className="bg-white">
			<h1>Success Login Page</h1>
		</div>
	);
}
