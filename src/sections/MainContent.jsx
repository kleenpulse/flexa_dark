import { useEffect, useRef } from "react";

import {
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	Services,
	SpecialOffer,
	Subscribe,
	SuperQuality,
} from "./";

import Nav from "../components/Nav";
import { useInView } from "../hooks/UseInView";
import { useLocation } from "react-router-dom";

const MainContent = () => {
	const heroRef = useRef(null);
	const superRef = useRef(null);
	const serviceRef = useRef(null);
	const offerRef = useRef(null);
	const fooRef = useRef(null);

	const isSuperRef = useInView(superRef);
	const isHeroRef = useInView(heroRef);
	const isOfferRef = useInView(offerRef);
	const isServiceRef = useInView(serviceRef);
	const isFooRef = useInView(fooRef);

	// disable default draging event on all images using useEffect

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [pathname]);

	useEffect(() => {
		document.querySelectorAll("img").forEach((img) => {
			img.addEventListener("dragstart", (e) => e.preventDefault());
		});
		return () => {
			document.querySelectorAll("img").forEach((img) => {
				img.removeEventListener("dragstart", (e) => e.preventDefault());
			});
		};
	}, []);

	return (
		<main className="relative bg-black">
			<Nav />
			<section
				id="hero"
				ref={heroRef}
				className="xl:padding-l wide:padding-r padding-b"
			>
				<Hero />
			</section>
			<section className="padding">
				<PopularProducts />
			</section>
			<section
				ref={superRef}
				id="super-quality"
				className={`relative padding backdrop-blur-lg super-quality ${
					isSuperRef && "big-glow"
				}`}
			>
				<SuperQuality />
			</section>
			<section
				ref={serviceRef}
				className={` padding-x py-10 relative max-[874px]:bg-gradient-to-r from-[#ff6347] to-[#FFD700] lg:z-20  service-bg ${
					isServiceRef ? "animated-bg" : ""
				} ${isServiceRef ? "add-bright" : ""}`}
			>
				<Services />
			</section>
			<section
				className={`padding is-offer ${isOfferRef && "add-border"} relative`}
				ref={offerRef}
			>
				<SpecialOffer />
			</section>
			<section className="max-sm:py-4 max-sm:px-2 sm:pt-4 sm:px-4 md:pt-8 pb-14 bg-gradient-to-r from-[#ff6347] to-[#FFD700]">
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section
				ref={fooRef}
				className={`relative bg-black padding-x padding-t pb-8 is-offer ${
					isFooRef && "add-border"
				}`}
			>
				<Footer />
			</section>
			{isHeroRef ? (
				<></>
			) : (
				<div
					className="fixed h-10 w-full flex justify-center z-[99999] top-4 items-center"
					id="scrollToTop"
				>
					<a
						href="#hero"
						className="relative font-palanquin bg-black border border-coral-red font-bold p-2 rounded-full   btn-pill"
					>
						<span className="bg-gradient-to-r from-[#ff6347] to-[#FFD700] bg-clip-text w-fit text-transparent ">
							Goto Top
						</span>
					</a>
				</div>
			)}
		</main>
	);
};

export default MainContent;
