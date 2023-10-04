"use client";
import React, { useState } from "react";
import { useBooking } from "@/app/context/BookingContext";
import { useRouter } from "next/navigation";
function HeroForm() {
	const { setBooking } = useBooking();
	const [activeTab, setActiveTab] = useState("bookNow");
	const [location, setLocation] = useState(null);
	const [fromDate, setFromDate] = useState(new Date());
	const [untilDate, setUntilDate] = useState(new Date());
	const router = useRouter();

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const bookNowData = {
			location: location,
			from: fromDate ? fromDate : new Date(),
			until: untilDate,
		};
		setBooking(bookNowData);
		router.push("/listings", { scroll: false });
	};

	return (
		<div className=" mx-auto mt-8">
			<ul className="flex ">
				<li
					className={`mr-1 flex-1 text-center py-2 cursor-pointer ${
						activeTab === "bookNow"
							? "bg-blue-500 text-white"
							: "dark:bg-gray-700 bg-gray-300"
					}`}
					onClick={() => handleTabClick("bookNow")}>
					Book Now
				</li>
				<li
					className={`ml-1 flex-1 text-center py-2 cursor-pointer ${
						activeTab === "reserve"
							? "bg-blue-500 text-white"
							: "dark:bg-gray-700 bg-gray-300"
					}`}
					onClick={() => handleTabClick("reserve")}>
					Reserve
				</li>
			</ul>
			<div className="mt-4">
				{activeTab === "bookNow" ? (
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
								htmlFor="location">
								Location
							</label>
							<input
								type="text"
								name="location"
								id="location"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								onChange={(e) =>
									setLocation(e.currentTarget.value)
								}
								defaultValue={location}
								required
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
								htmlFor="endDatetime">
								Parking Until
							</label>
							<input
								type="datetime-local"
								name="endDatetime"
								id="endDatetime"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								onChange={(e) =>
									setUntilDate(e.currentTarget.value)
								}
								defaultValue={untilDate}
								required
							/>
						</div>
						<div className="text-right">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 ml-auto min-w-[10rem]">
								Book
							</button>
						</div>
					</form>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
								htmlFor="address">
								Location
							</label>
							<input
								type="text"
								name="address"
								id="address"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								onChange={(e) =>
									setLocation(e.currentTarget.value)
								}
								defaultValue={location}
								required
							/>
						</div>
						<div className="md:flex mb-4 gap-4 ">
							<div className="mb-4 flex-1">
								<label
									className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
									htmlFor="startDatetime">
									Parking From
								</label>
								<input
									type="datetime-local"
									name="startDatetime"
									id="startDatetime"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
									onChange={(e) =>
										setFromDate(e.currentTarget.value)
									}
									defaultValue={fromDate}
									required
								/>
							</div>
							<div className="flex-1">
								<label
									className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
									htmlFor="endDatetime">
									Parking Until
								</label>
								<input
									type="datetime-local"
									name="endDatetime"
									id="endDatetime"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
									onChange={(e) =>
										setUntilDate(e.currentTarget.value)
									}
									defaultValue={untilDate}
									required
								/>
							</div>
						</div>
						<div className="text-right">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ml-auto min-w-[10rem]">
								Reserve
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}

export default HeroForm;
