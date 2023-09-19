"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { AiFillCaretDown } from "react-icons/ai";
const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { isLoaded, userId } = useAuth();
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link href="/" className="flex items-center">
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						park<span className="text-blue-600">my</span>ride
					</span>
				</Link>
				<button
					type="button"
					onClick={() => setIsSidebarOpen((prev) => !prev)}
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className={`${
						isSidebarOpen ? "w-full" : "hidden"
					} md:block md:w-auto`}>
					<ul className="w-full font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-5 lg:gap-8 xl:gap-10 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li className="items-center flex">
							<Link
								href="/find-parking"
								className="w-full block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								aria-current="page">
								Find Parking
							</Link>
						</li>
						<hr className="md:hidden" />
						<li className="items-center flex relative">
							<Link
								href={"#"}
								onClick={() =>
									setIsDropdownOpen((prev) => !prev)
								}
								className="mr-auto w-full flex justify-between py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent items-center">
								Work with us
								<span
									className={`${
										isDropdownOpen
											? "rotate-180"
											: "rotate-0"
									} transition-all`}>
									<AiFillCaretDown />
								</span>
							</Link>
							<div
								className={`${
									isDropdownOpen
										? "h-22 p-4 border dark:border-gray-600 border-gray-300 opacity-100"
										: "h-0 border-0 opacity-0"
								} absolute top-14 z-50 bg-white dark:bg-gray-900  w-44 hidden md:flex flex-col rounded gap-2`}>
								<Link
									href="rent-space"
									className={`${
										isDropdownOpen
											? "h-10 py-2 "
											: "h-0 py-0 my-0 text-[0rem]"
									} block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
									Rent your space
								</Link>
								<hr />
								<Link
									href="register-parking-lot"
									className={`${
										isDropdownOpen
											? "h-10 py-2 "
											: "h-0 py-0 my-0 text-[0rem]"
									} block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
									Register Your Lot
								</Link>
							</div>
						</li>
						<li
							className={`${
								isDropdownOpen ? "h-20" : " h-0"
							} bg-white dark:bg-gray-900 rounded transition-all md:hidden duration-300`}>
							<Link
								href="/rent-space"
								className={`${
									isDropdownOpen
										? "h-10 opacity-1"
										: "h-0 opacity-0"
								} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300`}>
								Rent your space
							</Link>
							<Link
								href="/register-parking-lot"
								className={`${
									isDropdownOpen
										? "h-10 opacity-1"
										: "h-0 opacity-0"
								} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300`}>
								Register Your Lot
							</Link>
						</li>
						<hr className="md:hidden" />
						<li className="items-center flex">
							<Link
								href="/about-us"
								className="w-full block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
								About Us
							</Link>
						</li>
						<hr className="md:hidden" />
						<li className="items-center flex">
							<Link
								href="/contact"
								className="w-full block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
								Contact
							</Link>
						</li>
						<hr className="md:hidden" />
						<li className="items-center flex mt-5 md:mt-0">
							{!userId ? (
								<div>
									<Link
										href={"/sign-in"}
										type="button"
										className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none  hover:text-blue-700 focus:z-10 dark:text-gray-400 dark:hover:text-white ">
										Login
									</Link>
									<Link
										href={"/sign-up"}
										type="button"
										className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
										Sign Up
									</Link>
								</div>
							) : (
								<UserButton afterSignOutUrl="/" />
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
