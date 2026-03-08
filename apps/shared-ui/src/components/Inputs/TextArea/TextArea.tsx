import "./TextArea.css";

type TextareaProps = {
  id: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
        className={`form-control ${className}`}
        id={id}
        value={value}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default Textarea;
