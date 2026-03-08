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

const Input = (props: InputProps) => {
  const {
    id,
    type,
    value = "",
    onChange,
    placeholder,
    disabled = false,
    className = "",
  } = props;

  return (
    <>
      <input
        {...props}
        className={`shared-input form-control ${className}`}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
