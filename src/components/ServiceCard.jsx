const ServiceCard = ({ imgURL, label, subtext }) => {
	return (
		<div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] lg:z-[30] shadow-3xl px-10 py-16 border border-coral-red sm:max-w-md min-[874px]:backdrop-blur-lg max-[874px]:bg-black max-[874px]:shadow-[0_0_15px_rgb(0,0,0,0.5)] min-[874px]:bg-[#00000073]">
			<div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#ff6347] to-[#FFD700] rounded-full">
				<img
					src={imgURL}
					alt={label}
					height={27}
					width={27}
					className="shadow-[0_0_10px_rgb(0,0,0,0.4)] p-1 rounded-full"
				/>
			</div>

			<h3 className="mt-5 text-3xl leading-normal font-palanquin font-bold text-white">
				{label}
			</h3>
			<p className="mt-3 break-words text-lg leading-normal font-montserrat text-white-400">
				{subtext}
			</p>
		</div>
	);
};

export default ServiceCard;
