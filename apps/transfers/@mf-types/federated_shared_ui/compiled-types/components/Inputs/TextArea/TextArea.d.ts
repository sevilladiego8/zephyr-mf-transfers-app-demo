import "./TextArea.scss";
import { ChangeEvent } from "react";
type TextareaProps = {
    id: string;
    value: any;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};
declare const Textarea: (props: TextareaProps) => import("react/jsx-runtime").JSX.Element;
export default Textarea;
