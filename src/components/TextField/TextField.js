import { useRef, useState } from "preact/hooks";
import "./textField.css";

const defaultStyle = { left: 7, top: 16, color: "#9ba0b9", fontSize: 14 };
const focusStyle = {
  left: 7,
  fontSize: 12,
  top: -8,
  color: "var(--color)",
};

const TextField = ({
  label,
  type = "text",
  value = "",
  onChange,
  name,
  style,
  placeholder,
  required = false,
  autoComplete = true,
}) => {
  const inputRef = useRef();
  const [labelStyle, setLableStyle] = useState(defaultStyle);

  const handleFocus = () => setLableStyle(focusStyle);
  const handleBlur = () =>
    setLableStyle(
      value ? { ...labelStyle, color: defaultStyle.color } : defaultStyle
    );

  const focus = () => inputRef.current && inputRef.current.focus();

  return (
    <div className="text-field-root" style={style}>
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
      {label && (
        <label onClick={focus} style={labelStyle}>
          {label}
        </label>
      )}
    </div>
  );
};

export default TextField;
