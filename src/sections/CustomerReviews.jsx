import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [];

reviews.map((review) =>
	items.push(
		<ReviewCard
			key={review.customerName}
			imgURL={review.imgURL}
			customerName={review.customerName}
			rating={review.rating}
			feedback={review.feedback}
		/>
	)
);

const responsive = {
	0: { items: 1 },
	820: { items: 2 },
	1024: { items: 3 },
};

const CustomerReviews = () => {
	return (
		<section id="reviews" className="max-container">
			<div className="bg-black rounded-xl p-2">
				<h2 className="font-palanquin text-2xl sm:text-4xl text-center capitalize font-bold text-white">
					What our
					<span className="bg-gradient-to-r from-[#ff6347] to-[#FFD700] bg-clip-text w-fit text-transparent ">
						{" "}
						Customer{" "}
					</span>{" "}
					Say
				</h2>
				<p className="text-lg m-auto max-w-lg mt-4 text-center  info-text pb-2">
					Hear genuine stories from our satisfied customers about their
					exceptional experiences with us.
				</p>
			</div>
			<div className="mt-16">
				<AliceCarousel
					mouseTracking
					items={items}
					responsive={responsive}
					controlsStrategy="alternate"
					autoPlay
					autoPlayStrategy="default"
					infinite
					autoPlayInterval={2000}
					disableButtonsControls
				/>
			</div>
		</section>
	);
};

export default CustomerReviews;
