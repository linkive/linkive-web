import { useState } from "react";

interface ButtonProps {
  text: string;
  validate: boolean;
}

const validationClass = {
  disable: "bg-grey-100 text-grey-400",
  able: "bg-primary-black text-primary-white",
};

export function Button({ text, validate = false }: ButtonProps) {
  const handleBtnClick = () => {
    console.log("click");
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`w-full h-[50px] ${
        validate ? validationClass.able : validationClass.disable
      } text-sm justify-center items-center`}
    >
      <span>{text}</span>
    </button>
  );
}
