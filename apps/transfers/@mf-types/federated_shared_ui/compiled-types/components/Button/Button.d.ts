import { MouseEvent } from "react";
import "./Button.scss";
type ButtonProps = {
    id?: string;
    type?: "button" | "submit" | "reset";
    text?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    variant?: string;
    className?: string;
};
declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
