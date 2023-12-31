const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="lg:border lg:py-8 lg:rounded-2xl shadow-lg shadow-[#333] border-coral-red flex justify-evenly items-center flex-col bg-[#0000008a] backdrop-blur-lg max-lg:pt-4 max-lg:rounded-2xl sm:mr-4 h-[400px] mb-6 max-sm:w-full max-sm:mr-2 max-sm:h-[420px]">
			<img
				src={imgURL}
				alt={customerName}
				className="rounded-full object-cover w-[130px] h-[130px] bg-gradient-to-r from-[#ff6347] to-[#FFD700] p-1"
			/>
			<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
			<div className="mt-3 flex justify-center items-center gap-2.5">
				<svg
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							id="star-gradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="#FF6347" />
							<stop offset="100%" stopColor="#FFD700" />
						</linearGradient>
					</defs>

					<path
						d="M10.0755 1.24162C10.4158 0.416631 11.5842 0.416631 11.9245 1.24162L13.9694 6.20014C14.2507 6.88227 14.8848 7.3541 15.619 7.42766L20.796 7.94636C21.6527 8.03219 22.0077 9.08845 21.3767 9.67424L17.3747 13.3897C16.8594 13.8681 16.6332 14.582 16.7789 15.2699L17.9307 20.7069C18.1132 21.5686 17.1733 22.2283 16.425 21.7638L12.0548 19.051C11.4088 18.6499 10.5912 18.6499 9.94518 19.051L5.57504 21.7638C4.82673 22.2283 3.88681 21.5686 4.06934 20.7069L5.22109 15.2699C5.36681 14.582 5.14058 13.8681 4.62527 13.3897L0.62328 9.67424C-0.00768149 9.08845 0.347297 8.03219 1.20397 7.94636L6.38103 7.42766C7.11522 7.3541 7.74926 6.88227 8.03058 6.20014L10.0755 1.24162Z"
						fill="url(#star-gradient)"
					/>
				</svg>
				<p className="text-xl font-montserrat text-white-400">({rating})</p>
			</div>
			<h3 className="mt-1 font-palanquin text-3xl text-center font-bold text-white">
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
