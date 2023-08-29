import { bigShoe1 } from "../assets/images";
import { navLinks } from "../constants";
const NavMobile = ({ setIsMobile }) => {
	return (
		<div
			className="pt-8 pl-10 !fixed top-0 right-0 !z-[99999] !h-[100vh] bg-black"
			id="mobile-menu"
		>
			<a href="#hero">
				<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient
							id="logo-gradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="#FF6347" />
							<stop offset="100%" stopColor="#FFD700" />
						</linearGradient>
					</defs>
					<circle cx="20" cy="25" r="16" fill="url(#logo-gradient)" />

					<defs>
						<linearGradient id="main-logo" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#FF6347" />
							<stop offset="100%" stopColor="#FFD700" />
						</linearGradient>
					</defs>

					<text
						x="40"
						y="38"
						fontFamily="Montserrat, sans-serif"
						fontWeight={"bold"}
						fontSize="37"
						fill="url(#main-logo)"
					>
						Flexa
					</text>
				</svg>
			</a>
			<div className="h-[400px]">
				<ul className=" flex flex-col justify-center items-start mt-24 gap-16 ">
					{navLinks.map((link) => (
						<li key={link.label} onClick={() => setIsMobile(false)}>
							<a
								href={link.href}
								className="font-palanquin leading-normal text-2xl text-white font-bold hover:text-[26px] transition-all"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="w-full mt-20 scale-[1.2]">
				<img
					src={bigShoe1}
					alt="shoe"
					width={610}
					height={500}
					className="object-contain "
				/>
			</div>
		</div>
	);
};

export default NavMobile;
