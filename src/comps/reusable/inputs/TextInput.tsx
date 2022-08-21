import * as React from "react";

import { useIsInputFocused } from "../../../hooks/InputHooks";

import { InputErrors } from "./InputErrors";

import * as css from "./TextInput.module.css";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
	id: string;
	label: string;
	errors?: Array<string>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

	//styles
	backgroundColor?: string;
	borderColor?: string;
	textColor?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
	label,
	id,
	errors,
	onChange,
	backgroundColor,
	borderColor,
	textColor,
	...props
}) => {
	const { isFocused, onInputChange, setIsFocused } = useIsInputFocused();
	const [isHover, setIsHover] = React.useState(false);

	const onChangeCombined = (e: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(e);
		onChange(e);
	};

	React.useEffect(() => {
		if (props.defaultValue) setIsFocused(true);
	}, [props.defaultValue]);

	return (
		<div className={`${css.container} ${isFocused ? "focus" : ""} ${isHover ? "hover" : ""}`}>
			<label className={`${css.label}`} htmlFor={id}>
				{label}
			</label>
			<input
				type="text"
				{...props}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChange={onChangeCombined}
				className={`${props.className} ${css.input}`}
			/>
			{errors ? <InputErrors errors={errors} /> : null}
		</div>
	);
};
