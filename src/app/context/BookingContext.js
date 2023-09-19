"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
const BookingContext = createContext();

// Create a custom hook to access the context
export function useBooking() {
	return useContext(BookingContext);
}

// Create a context provider component
export function BookingProvider({ children }) {
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
	};

	return (
		<BookingContext.Provider value={values}>
			{children}
		</BookingContext.Provider>
	);
}
