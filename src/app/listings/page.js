"use client";
import "./listings.css";
import { useBooking } from "@/app/context/BookingContext";
import parkingData from "./listings.json";
import { useRouter } from "next/navigation";
const Listings = () => {
	const { booking } = useBooking();
	const fromDate = booking.from;
	const untilDate = booking.until;
	const listings = parkingData.listings;
	return (
		<div className="dark:bg-gray-900 p-8 bg-white">
			<form className="">
				<label
					for="default-search"
					class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
					Search
				</label>
				<div class="relative text-right">
					<div class="absolute md:inset-y-0 left-0 flex md:items-center pl-3 pointer-events-none top-5">
						<svg
							class="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<div className="flex flex-wrap md:flex-nowrap">
						<input
							type="search"
							id="default-search"
							className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter Location..."
							value={booking.location}
							required
						/>
						<input
							type="datetime-local"
							name="startDatetime"
							id="startDatetime"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							defaultValue={fromDate}
							required
						/>
						<input
							type="datetime-local"
							name="endDatetime"
							id="endDatetime"
							defaultValue={untilDate}
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light md:pr-28"
							required
						/>
					</div>
					<button
						type="submit"
						class="mt-4 md:mt-0 text-white md:absolute md:right-2.5 md:bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Search
					</button>
				</div>
			</form>
			<section className="listings flex flex-wrap mt-4 gap-4">
				{listings.map((listing) => {
					return <ListingCard listing={listing} />;
				})}
			</section>
		</div>
	);
};

const ListingCard = ({ listing }) => {
	const { setSelectedParking } = useBooking();
	const router = useRouter();
	const handleListingSubmit = (e) => {
		e.preventDefault();
		setSelectedParking(listing);
		router.push("/booking");
	};
	return (
		<div className=" w-full  md:w-1/2 lg:w-1/3 xl:w-1/4 dark:border-gray-800 border rounded flex border-gray-300 h-40">
			<div className="w-2/5">
				<img src={listing.img_link} alt="img" className="h-full" />
			</div>
			<div className="flex flex-col gap-2 p-4 w-3/5 justify-between">
				<h1 className="text-lg">{listing.name}</h1>
				<div className="flex justify-between">
					<p className="text-sm text-gray-500">
						{listing.distance} km
					</p>
					<p className="text-sm text-gray-500">
						{listing.no_of_bookings} Bookings
					</p>
				</div>
				<button
					onClick={(e) => handleListingSubmit(e)}
					className=" text-white  w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Book for ₹{listing.price}
				</button>
			</div>
		</div>
	);
};

export default Listings;
