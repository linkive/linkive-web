// 버튼 중 가장 큰사이즈의 버튼
// 기능: on/off가 달려있어서 외부 disabled로 조정 가능
// TODO: 버튼 크기가 다양하여 확장 가능해야할 듯
import cn from "classnames";

interface ButtonProps {
  status?: "default" | "white";
  text: string | number;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({
  status = "default",
  text,
  disabled = false,
  onClick,
}: ButtonProps) {
  const btnClass = cn("rounded w-full h-[50px] text-center", {
    "bg-primary-white text-grey-500 border border-grey-100": status === "white",
    "bg-grey-100 text-grey-400": disabled && status === "default",
    "bg-primary-black text-primary-white": !disabled && status === "default",
  });

  return (
    <button onClick={onClick} disabled={disabled} className={btnClass}>
      <span className="text-sm font-medium ">{text}</span>
    </button>
  );
}

export function ButtonXS({
  status = "default",
  text,
  disabled = false,
  onClick,
}: ButtonProps) {
  const btnClass = cn("rounded w-full px-2 text-center", {
    "bg-primary-white text-grey-600 border border-grey-100": status === "white",
    "bg-grey-50 text-grey-200 px-[9px]": disabled && status === "default",
    "bg-primary-black text-primary-white px-[9px]":
      !disabled && status === "default",
  });

  return (
    <button onClick={onClick} disabled={disabled} className={btnClass}>
      <span className="block py-1 text-xs text-start font-medium ">{text}</span>
    </button>
  );
}
