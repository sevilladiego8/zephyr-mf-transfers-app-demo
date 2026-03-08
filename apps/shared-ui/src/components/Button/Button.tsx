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

const Button = (props: ButtonProps) => {
  const {
    id,
    type = "button",
    text,
    onClick,
    disabled = false,
    variant = "primary",
    className = "",
  } = props;

  return (
    <>
      <button
        {...props}
        id={id}
        type={type}
        className={`shared-btn btn btn-${variant} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
