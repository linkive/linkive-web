import { useState } from "react";

interface TextfeildProps {
  type?: "text" | "password";
  status?: "default" | "active" | "focused" | "error" | "success";
  placeholder: string;
  validation(): boolean;
}

const borderClass = {
  default: "",
  active: "border-primary-black",
  error: "border-primary-red",
  focused: "",
  success: "",
};

export function Textfield({
  type,
  status = "default",
  placeholder,
  validation,
}: TextfeildProps) {
  const [inputValue, setInputValue] = useState("");
  const [inputStatus, setInputStatus] = useState(status);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setInputStatus(newValue !== "" ? "active" : "default");
  };

  return (
    <input
      type={type}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={`flex w-full h-[50px] gap-2.5 px-[13px] py-2.5 rounded placeholder:text-grey-300 text-sm text-primary-black bg-grey-50 ${borderClass[inputStatus]}`}
    ></input>
  );
}
