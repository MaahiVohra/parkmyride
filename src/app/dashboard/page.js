"use client";
import React from "react";
import { useBooking } from "../context/BookingContext";
import { useAuth } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
function UserDash() {
	const { selectedParking } = useBooking();
	const { isLoaded, userId } = useAuth();
	const { user } = useClerk();
	// const [currentBooking, setCurrentBooking] = useState();
	// useEffect(() => {
	// 	const localUserId = JSON.parse(localStorage.getItem("userId"));
	// 	var myHeaders = new Headers();
	// 	myHeaders.append("Content-Type", "application/json");

	// 	var raw = JSON.stringify({
	// 		userId: localUserId,
	// 	});

	// 	var requestOptions = {
	// 		method: "POST",
	// 		headers: myHeaders,
	// 		body: raw,
	// 		redirect: "follow",
	// 	};

	// 	fetch("http://localhost:4000/parking/get", requestOptions)
	// 		.then((response) => response.text())
	// 		.then((result) => console.log(result))
	// 		.catch((error) => console.log("error", error));
	// }, []);
	if (!user) {
		return <div>Loading...</div>;
	}

	// Access user data
	const { fullName, imageUrl, primaryEmailAddress } = user;

	return (
		<>
			<div>
				<div class=" mx-auto bg-white rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
					<div class="flex justify-end px-4 pt-4">
						{/* <button
							id="dropdownButton"
							data-dropdown-toggle="dropdown"
							class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
							type="button">
							<span class="sr-only">Open dropdown</span>
							<svg
								class="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 16 3">
								<path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
							</svg>
						</button> */}
						<div
							id="dropdown"
							class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
							<ul class="py-2" aria-labelledby="dropdownButton">
								<li>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
										Edit
									</a>
								</li>
								<li>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
										Export Data
									</a>
								</li>
								<li>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
										Delete
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="flex flex-col items-center pb-10">
						<img
							class="w-24 h-24 mb-3 rounded-full shadow-lg"
							src={imageUrl}
							alt="Bonnie image"
						/>
						<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
							{fullName}
						</h5>
						<span class="text-sm text-gray-500 dark:text-gray-400">
							{primaryEmailAddress.emailAddress}
						</span>
						<h5 class="mt-4 mb-1 text-xl font-medium text-gray-900 dark:text-white">
							CURRENT BOOKINGS
						</h5>
						<div class="flex mt-4 space-x-3 md:mt-6">
							<a
								href="#"
								class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
								<img
									class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
									src="http://1.bp.blogspot.com/-Ib8DQv2bgIw/UnMkSYnFboI/AAAAAAAABA4/IVY58GFMQ78/s1600/IMG_3826.JPG"
									alt=""
								/>
								<div class="flex flex-col justify-between p-4 leading-normal">
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										Delhi Street Parking
									</h5>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										123 MG Road, Delhi
									</p>
								</div>
							</a>
						</div>

						<h5 class="mt-4 mb-1 text-xl font-medium text-gray-900 dark:text-white">
							PAST BOOKINGS
						</h5>
						<div class="flex mt-4 space-x-3 md:mt-6">
							<a
								href="#"
								class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
								<img
									class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
									src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8W6LtEhyJX555H7WJzmwwgHaD4%26pid%3DApi&f=1&ipt=0a291494ebb3387eb1483b5c43e27de2fb53288314d350ff4e348fd6ab95b679&ipo=images"
									alt=""
								/>
								<div class="flex flex-col justify-between p-4 leading-normal">
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										Delhi Plaza Parking
									</h5>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										456 Connaught Place, New Delhi
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserDash;
