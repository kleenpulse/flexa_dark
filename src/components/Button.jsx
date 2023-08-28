const Button = ({
	iconUrl,
	text,
	bgcolor,
	color,
	size,
	animation,
	fullWidth,
	icon,
}) => {
	const buttonClasses = `flex justify-center items-center gap-2 border font-montserrat leading-none rounded-full border-coral-red ${
		bgcolor && "bg-" + bgcolor
	} text-${color ? color : "white"} ${
		size === "large" ? "text-lg px-7 py-4 font-bold" : "text-base px-4 py-2"
	} ${fullWidth && "w-full"} transform transition-all duration-300 ${
		animation === "slide"
			? "hover:translate-x-2"
			: animation === "fade"
			? "hover:opacity-60"
			: animation === "zoom"
			? "hover:scale-110"
			: ""
	}`;
	// @hover: animation can be 'slide', 'fade', or 'zoom'
	return (
		<button className={buttonClasses}>
			{text}
			{iconUrl && (
				<img src={iconUrl} className="ml-2 rounded-full w-5 h-5" alt="icon" />
			)}
			{icon && <span className="text-coral-red">→</span>}
		</button>
	);
};

export default Button;
