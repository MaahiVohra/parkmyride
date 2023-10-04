"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
const BookingContext = createContext();

// Create a custom hook to access the context
export function useBooking() {
	return useContext(BookingContext);
}

// Create a context provider component
export async function BookingProvider({ children }) {
	const makePayment = async () => {
		console.log("here...");
		const res = await initializeRazorpay();

		if (!res) {
			alert("Razorpay SDK Failed to load");
			return;
		}

		// Make API call to the serverless API
		const data = await fetch("/api/razorpay", { method: "POST" }).then(
			(t) => t.json()
		);
		console.log(data);
		var options = {
			key: "rzp_test_jf9DzaNfYCP7xU", // Enter the Key ID generated from the Dashboard
			name: "Manu Arora Pvt Ltd",
			currency: data.currency,
			amount: data.amount,
			order_id: data.id,
			description: "Thankyou for your test donation",
			image: "https://manuarora.in/logo.png",
			handler: function (response) {
				// Validate payment at server - using webhooks is a better idea.
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			prefill: {
				name: "Manu Arora",
				email: "manuarorawork@gmail.com",
				contact: "9999999999",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};
	const initializeRazorpay = () => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			// document.body.appendChild(script);

			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};

			document.body.appendChild(script);
		});
	};

	const [booking, setBooking] = useState({
		location: "",
		from: new Date().toUTCString(),
		until: new Date().toUTCString(),
	});
	const [selectedParking, setSelectedParking] = useState({
		name: "",
		address: "",
		price: null,
		distance: null,
		no_of_bookings: null,
		max_duration: null,
		img_link: "",
	});
	const values = {
		booking,
		setBooking,
		selectedParking,
		setSelectedParking,
		makePayment,
	};

	return (
		<BookingContext.Provider value={values}>
			{children}
		</BookingContext.Provider>
	);
}
