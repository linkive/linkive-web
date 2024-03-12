// 버튼 중 가장 큰사이즈의 버튼
// 기능: on/off가 달려있어서 외부 disabled로 조정 가능
// TODO: 버튼 크기가 다양하여 확장 가능해야할 듯
import cn from "classnames";

interface ButtonProps {
  status?: "default" | "white";
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({
  status = "default",
  text,
  disabled = false,
  onClick,
}: ButtonProps) {
  const btnClass = cn("rounded w-full h-[50px] justify-center items-center", {
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
