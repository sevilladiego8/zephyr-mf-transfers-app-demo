import "./Input.scss";
import { ChangeEvent } from "react";
type InputProps = {
    id: string;
    type: string;
    value: any;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};
declare const Input: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
