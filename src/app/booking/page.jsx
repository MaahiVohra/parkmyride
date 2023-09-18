"use client";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";
import { AiTwotoneMail } from "react-icons/ai";
const Booking = () => {
	const { selectedParking, booking } = useBooking();
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
							<p className="mb-10">Login or Signup to proceed</p>
							<div className="flex flex-wrap">
								<button
									type="button"
									class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
									<svg
										class="w-4 h-4 mr-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 8 19">
										<path
											fill-rule="evenodd"
											d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
											clip-rule="evenodd"
										/>
									</svg>
									Facebook
								</button>
								<button
									type="button"
									class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
									<svg
										class="w-4 h-4 mr-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 17">
										<path
											fill-rule="evenodd"
											d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
											clip-rule="evenodd"
										/>
									</svg>
									Twitter
								</button>
								<button
									type="button"
									class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
									<svg
										class="w-4 h-4 mr-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 18 19">
										<path
											fill-rule="evenodd"
											d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
											clip-rule="evenodd"
										/>
									</svg>
									Google
								</button>
								<button
									type="button"
									class="dark:text-white bg-transparent border-gray-300 border hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 gap-2 hover:text-gray-900">
									<AiTwotoneMail />
									Email
								</button>
							</div>
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
