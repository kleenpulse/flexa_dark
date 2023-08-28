import PopularProductCard from "../components/PopularProductCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { products } from "../constants";

const items = [];

products.map((product) =>
	items.push(
		<PopularProductCard
			key={product.name}
			price={product.price}
			imgUrl={product.imgURL}
			name={product.name}
		/>
	)
);

const responsive = {
	0: { items: 1 },
	768: { items: 2 },
	1024: { items: 3 },
};
const PopularProducts = () => {
	return (
		<section id="products" className="max-container max-sm:mt-12 ">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="font-palanquin text-4xl font-bold text-white">
					Our{" "}
					<span className="bg-gradient-to-r from-[#ff6347] to-[#FFD700] bg-clip-text w-fit text-transparent">
						Popular
					</span>{" "}
					Products
				</h2>
				<p className="lg:max-w-lg mt-2 font-montserrat text-white-400">
					Experience top-notch quality and style, Elevate your footwear game:
					unveiling unrivaled comfort, design, and value
				</p>
			</div>

			<div className="mt-16 flex justify-center items-center w-full sm:gap-4 border border-t border-r-0 border-l-0 py-6 border-coral-red">
				<AliceCarousel
					mouseTracking
					items={items}
					responsive={responsive}
					controlsStrategy="alternate"
					autoPlay
					autoPlayStrategy="default"
					infinite
					autoPlayInterval={2000}
				/>
			</div>
		</section>
	);
};

export default PopularProducts;
