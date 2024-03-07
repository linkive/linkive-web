// 버튼 중 가장 큰사이즈의 버튼
// 기능: on/off가 달려있어서 외부 disabled로 조정 가능
// TODO: 버튼 크기가 다양하여 확장 가능해야할 듯

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const validationClass = {
  disable: "bg-grey-100 text-grey-400",
  able: "bg-primary-black text-primary-white",
};

export function Button({ text, disabled = true, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` rounded w-full h-[50px] ${
        disabled ? validationClass.disable : validationClass.able
      } text-sm font-medium justify-center items-center`}
    >
      <span>{text}</span>
    </button>
  );
}
