"use client";
import { useBooking } from "@/app/context/BookingContext";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneMail } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
const Booking = () => {
	const { isLoaded, userId } = useAuth();
	const [vehicleNumber, setVehicleNumber] = useState();
	const router = useRouter();
	const handleLogin = () => {
		localStorage.setItem(
			"booking",
			JSON.stringify({
				parking: selectedParking,
				booking: booking,
			})
		);
		sessionStorage.setItem("referrerURL", "booking");
		router.push("/sign-in");
	};
	const { selectedParking, booking, setBooking, setSelectedParking } =
		useBooking();
	// useEffect(() => {
	// 	var bookingdata;
	// 	const getBooking = async () => {
	// 		bookingdata = await JSON.parse(localStorage.getItem("booking"));
	// 	};
	// 	getBooking().then(() => {
	// 		setBooking(bookingdata.booking);
	// 		setSelectedParking(bookingdata.parking);
	// 	});
	// }, []);
	const handleBooking = async () => {
		const url = "http://192.168.100.19:4000/parking/book";
		const data = {
			parkingName: selectedParking.name,
			parkingPrice: selectedParking.price,
			from: booking.from,
			until: booking.until,
			parkingAddress: selectedParking.address,
			vehicleNumber: vehicleNumber,
			status: "not arrived",
		};
		const requestOptions = {
			method: "POST",
			body: JSON.stringify(data),
		};
		const response = await fetch(url, requestOptions);
		if (response) {
			const data = await response.json();
			console.log(data.userId);
			localStorage.setItem("userId", JSON.stringify(data.userId));
			router.push("/dashboard");
		}
	};
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="md:grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-16 lg:grid-cols-12">
				<section class="bg-white dark:bg-gray-900 lg:col-span-6">
					<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md shadow-lg">
						<h2 class="mb-6 text-5xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
							Confirm Your Booking
						</h2>
						<div className="p-8 border dark:border-gray-800 shadow-xl rounded mb-6 mx-auto">
							<h1 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-gray-200">
								Booking Details
							</h1>
							<div className=" space-y-6 mx-auto">
								<div className="justify-between md:flex mt-6">
									<div className="text-lg justify-end">
										Arriving on
									</div>
									<div className="underline text-lg font-bold">
										{new Date(
											booking.from
										).toLocaleDateString()}
									</div>
								</div>
								<div className="justify-between md:flex">
									<div className="text-lg justify-end">
										Leaving on
									</div>
									<div className="underline text-lg font-bold">
										{new Date(
											booking.until
										).toLocaleDateString()}
									</div>
								</div>
								<div className="justify-between md:flex">
									<div className="text-lg justify-end">
										Duration
									</div>
									<div className="text-lg font-bold">
										{selectedParking.max_duration} hours
									</div>
								</div>
							</div>
						</div>
						<div className=" p-6 border dark:border-gray-800 shadow-xl">
							<h1 className=" text-2xl font-bold  text-gray-900 dark:text-gray-200 mb-2">
								Let's get started
							</h1>
							{!isLoaded && !userId ? (
								<div>
									<p className="mb-10">
										Login or Signup to proceed
									</p>
									<div className="flex flex-wrap">
										<button
											type="button"
											onClick={handleLogin}
											class="dark:text-white bg-transparent border-gray-300 border hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 gap-2 hover:text-gray-900">
											<AiTwotoneMail />
											Login to Continue
										</button>
									</div>
								</div>
							) : (
								<div>
									<p className="mb-10">
										Enter your vehicle number
									</p>
									<input
										type="text"
										className="border border-gray-300 p-2 rounded text-black"
										placeholder="Eg. UP14CZ9357"
										onChange={(e) =>
											setVehicleNumber(
												e.currentTarget.value
											)
										}
										value={vehicleNumber}
									/>
									<button
										onClick={handleBooking}
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 ml-4 ">
										Confirm Booking
									</button>
								</div>
							)}
						</div>
					</div>
				</section>

				<div className="lg:mt-0 lg:col-span-6 shadow-lg">
					<img
						className="rounded-lg"
						src={selectedParking.img_link}
						height={150}
						width={600}
						alt={"parking-image"}
					/>
					<div className="my-10 grid grid-cols-2">
						<h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
							{selectedParking && selectedParking.name}
						</h5>
						<h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
							{selectedParking && selectedParking.distance} km
						</h5>
						<h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
							{selectedParking && selectedParking.address}
						</h5>
						<h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-400 ">
							{selectedParking && selectedParking.no_of_bookings}{" "}
							bookings in the past month
						</h5>
					</div>
					<div className=" space-y-6 mx-auto">
						<div className="justify-between md:flex mt-6">
							<div className="text-lg justify-end">
								Parking fee
							</div>
							<div className="underline text-lg font-bold">
								₹{selectedParking && selectedParking.price}
							</div>
						</div>
						<div className="justify-between md:flex">
							<div className="text-lg justify-end">
								Transaction Fee
							</div>
							<div className="underline text-lg font-bold">
								₹10
							</div>
						</div>
						<hr />
						<div className="justify-between md:flex">
							<div className="text-3xl justify-end ">
								Final Price
							</div>
							<div className="text-3xl font-bold">
								₹
								{selectedParking.price &&
									selectedParking.price + 10}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Booking;
