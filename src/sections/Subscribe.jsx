import Button from "../components/Button";

const Subscribe = () => {
	return (
		<section
			className="max-container flex justify-between items-center max-lg:flex-col gap-10"
			id="contact-us"
		>
			<h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-white max-[400px]:text-center max-[400px]:text-2xl">
				Sign Up for{" "}
				<span className="bg-gradient-to-r from-[#ff6347] to-[#FFD700] bg-clip-text w-fit text-transparent">
					Updates{" "}
				</span>
				& Newsletter
			</h3>
			<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-coral-red rounded-full">
				<input
					type="text"
					placeholder="Subscribe@flexa.com"
					className="input"
				/>
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button text="Sign up" animation={"slide"} size={"large"} fullWidth />
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
