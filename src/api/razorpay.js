const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
	if (req.method === "GET") {
		console.log("req made");
	}
	if (req.method === "POST") {
		// Initialize razorpay object
		const razorpay = new Razorpay({
			key_id: "rzp_test_jf9DzaNfYCP7xU",
			key_secret: "3w7taf07KS6juFNXrKSY9HXZ",
		});

		// Create an order -> generate the OrderID -> Send it to the Front-end
		const payment_capture = 1;
		const amount = 499;
		const currency = "INR";
		const options = {
			amount: (amount * 100).toString(),
			currency,
			receipt: shortid.generate(),
			payment_capture,
		};

		try {
			const response = await razorpay.orders.create(options);
			res.status(200).json({
				id: response.id,
				currency: response.currency,
				amount: response.amount,
			});
		} catch (err) {
			console.log(err);
			res.status(400).json(err);
		}
	} else {
		return <div>Hi from the serverless</div>;
	}
}
