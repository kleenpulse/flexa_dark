import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="z-[2] relative flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
		>
			<div className="flex flex-1 flex-col lg:border border-coral-red lg:p-4 rounded-3xl bg-black">
				<h2 className="font-palanquin text-4xl max-sm:text-[40px] capitalize font-bold text-white">
					We Provide You
					<br />
					<span className="bg-gradient-to-r from-[#ff6347] to-[#FFD700] bg-clip-text w-fit text-transparent ">
						Super Quality{" "}
					</span>{" "}
					Shoes
				</h2>
				<p className=" mt-4 lg:max-w-lg info-text">
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate your experience, providing you with unmatched
					quality, innovation, and a touch of elegance.
				</p>
				<p className=" mt-6 lg:max-w-lg info-text">
					Our dedication to detail and excellence ensures your satisfaction
				</p>
				<div className="mt-11">
					{/* @hover: animation can be 'slide', 'fade', or 'zoom' */}
					<Button text="View details" animation={"slide"} size={"large"} />
				</div>
			</div>

			<div className="flex flex-1 justify-center items-center ">
				<img
					src={bigShoe1}
					alt="shoe"
					// width={610}
					// height={500}
					className="object-contain lg:w-[700px] w-[610px] hover:saturate-150 transition-all duration-500 max-[1024px]:hidden"
				/>
			</div>
		</section>
	);
};

export default SuperQuality;
