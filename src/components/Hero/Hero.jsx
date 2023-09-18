import Image from "next/image";
import HeroForm from "../HeroForm/HeroForm";
const Hero = () => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-16 lg:grid-cols-12">
				<section class="bg-white dark:bg-gray-900 lg:col-span-6">
					<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md shadow-lg">
						<h2 class="mb-4 text-5xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
							Find a Parking Now
						</h2>
						<h4 class="mb-4 text-xl tracking-tight text-center text-gray-900 dark:text-white">
							Park Your Ride in Seconds, Where Convenience Meets
							Parking.
						</h4>
						<HeroForm />
					</div>
				</section>
				<div className="lg:mt-0 lg:col-span-6 lg:flex shadow-lg hidden">
					<Image
						className="rounded-lg"
						src={"/images/hero-image.jpg"}
						height={150}
						width={700}
						alt={"hero-image"}
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
