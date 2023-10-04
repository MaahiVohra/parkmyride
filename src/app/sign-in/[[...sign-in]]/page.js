"use client";
import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";
export default function Page() {
	return (
		<div className="dark:bg-gray-900 flex justify-center bg-white">
			<SignIn />
		</div>
	);
}
