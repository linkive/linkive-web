import CheckBoxActive from "@/public/icon/checkBox_on.svg";
import CheckBoxInactive from "@/public/icon/checkBox_off.svg";
import Link from "next/link";
import cn from "classnames";

interface CheckFieldProps {
  id: string;
  checked: boolean;
  description: string;
  link?: string | null;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckField({
  id,
  checked,
  description,
  link = null,
  className,
  onChange,
}: CheckFieldProps) {
  return (
    <div className="w-full flex gap-2.5 items-center text-sm font-meidum">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        hidden
      />
      <label htmlFor={id} className="cursor-pointer">
        {checked ? <CheckBoxActive /> : <CheckBoxInactive />}
      </label>
      <span className={`${cn("text-grey-700 flex-grow", className)}  `}>
        {description}
      </span>
      {link && (
        <Link href={link}>
          <span className="text-grey-500">보기</span>
        </Link>
      )}
    </div>
  );
}
