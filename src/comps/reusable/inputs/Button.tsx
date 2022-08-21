import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	borderColor?: string;
	textColor?: string;
}

export const Button: React.FC<ButtonProps> = ({ borderColor, textColor, ...props }) => {
	const [isHover, setIsHover] = React.useState(false);
	const [isFocus, setIsFocus] = React.useState(false);

	let buttonStyles: React.CSSProperties = {
		backgroundColor: "transparent",
		marginTop: "0.25rem",
		cursor: "pointer",
		borderRadius: "1rem",
		border: `1px solid ${borderColor ? borderColor : "black"}`,
		padding: "0.25rem 0.7rem",
		transition: "transform 250ms",
		color: textColor ? textColor : "black",
	};

	const buttonStylesHover: React.CSSProperties = {
		...buttonStyles,
		transform: "scale(1.1)",
	};

	return (
		<button
			onFocus={() => setIsFocus(true)}
			onBlur={() => setIsFocus(false)}
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			style={isHover || isFocus ? buttonStylesHover : buttonStyles}
			{...props}
		/>
	);
};
