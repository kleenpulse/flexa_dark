import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
	return (
		<section className="max-container flex juctify-center flex-wrap max-[640px]:flex-col gap-9">
			{services.map((service) => (
				<ServiceCard key={service.label} {...service} />
			))}
		</section>
	);
};

export default Services;
