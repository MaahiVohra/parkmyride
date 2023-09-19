import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="dark:bg-gray-900 flex justify-center bg-white">
			<SignUp />
		</div>
	);
}
