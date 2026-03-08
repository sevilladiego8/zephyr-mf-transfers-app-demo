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

const Textarea = (props: TextareaProps) => {
  const {
    id,
    value = "",
    onChange,
    rows = 3,
    placeholder,
    disabled = false,
    className = "",
  } = props;

  return (
    <>
      <textarea
        {...props}
        className={`form-control ${className}`}
        id={id}
        value={value}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </>
  );
};

export default Textarea;
