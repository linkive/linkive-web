import { useState } from "react";
import Eye from "@/public/icon/eye.svg";
import EyeActive from "@/public/icon/eye_active.svg";
import Close from "@/public/icon/circular_close.svg";
import cn from "classnames";

interface TextFeildProps {
  type?: "text" | "password" | "number";
  placeholder: string;
  name: string;
  value: string;
  inputMode?: "text" | "email" | "numeric";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // input onchange 함수

  error?: boolean;
  errorMsg?: string | null;

  valid?: boolean;
  validMsg?: string | null;

  children?: React.ReactNode; //textfield 우측에 존재하는 component props로 받아서 처리
  className?: string;
}

// valid, error, focus 기능만 존재하는 base textfield
// 보통 composition하여 사용
export function Textfield({
  type = "text",
  placeholder,
  name,
  value,
  inputMode = "text",
  onChange,
  error,
  errorMsg,
  valid,
  validMsg,
  children,
  className,
}: TextFeildProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <div
        className={`flex w-full items-center h-[50px] gap-2.5 px-[13px] py-2.5 rounded placeholder:text-grey-300 font-medium text-primary-black bg-grey-50  ${cn(
          { "bg-primary-white": isFocused },
          { "border border-primary-black": isFocused && !error },
          { "border border-primary-red": error },
          className
        )}`}
      >
        {/* ios에서는 input이 16px이상일 경우 자동 zoom in 되어서 text를 18*0.75px로
        해서 14px에 비슷하게 맞춤*/}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          inputMode={inputMode}
          className="flex flex-grow bg-inherit"
        />
        {children}
      </div>

      {/* textfield 하단 success, error 메시지 */}
      <>
        {valid && validMsg ? (
          <span className="mt-2.5 text-xs text-primary-green">{validMsg}</span>
        ) : undefined}
        {errorMsg && error ? (
          <span className="mt-2.5 text-xs text-primary-red">{errorMsg}</span>
        ) : undefined}
      </>
    </div>
  );
}

// textfield 중 type text에 해당하는 Textfield, 현재는 ID라고 명명
// MARK: 전체 삭제가 추가됨, 다 들어간다면 아예 구분하는 것이 좋을 듯
export function IdTextfield(props: TextFeildProps) {
  const handleClearClick = () => {
    const event = {
      target: { value: "", name: props.name },
      currentTarget: { value: "", name: props.name },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    props.onChange(event);
  };

  const children: React.ReactNode = (
    <>
      {props.value !== "" && (
        <button onClick={handleClearClick}>
          <Close />
        </button>
      )}
    </>
  );

  return (
    <Textfield {...props} type="text" inputMode="email">
      {children}
    </Textfield>
  );
}

// textfield 중 type password에 해당하는 Textfield, 현재는 password라고 명명
// MARK: EYE를 통해 볼 수 있는 코드 추가
// TODO: IdTextfield을 composition해서 사용할 수도 있을 듯
export function PasswordTextfield(props: TextFeildProps) {
  const [showPw, setShowPw] = useState(false);

  const handleClearClick = () => {
    const event = {
      target: { value: "", name: props.name },
      currentTarget: { value: "", name: props.name },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    props.onChange(event);
  };

  const children: React.ReactNode = (
    <>
      <button onClick={() => setShowPw((pre) => !pre)}>
        {showPw ? <EyeActive /> : <Eye />}
      </button>

      {props.value !== "" && (
        <button onClick={handleClearClick}>
          <Close />
        </button>
      )}
    </>
  );

  return (
    <Textfield {...props} type={showPw ? "text" : "password"}>
      {children}
    </Textfield>
  );
}

// textfield 중 type number에 해당하는 Textfield, 현재는 number라고 명명
// MARK: 전체 삭제가 추가됨, 다 들어간다면 아예 구분하는 것이 좋을 듯
export function NumberTextfield(props: TextFeildProps) {
  const handleClearClick = () => {
    const event = {
      target: { value: "", name: props.name },
      currentTarget: { value: "", name: props.name },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    props.onChange(event);
  };

  const children: React.ReactNode = (
    <>
      {props.value !== "" && (
        <button onClick={handleClearClick}>
          <Close />
        </button>
      )}
    </>
  );

  return (
    <Textfield {...props} type="number" inputMode="numeric">
      {children}
    </Textfield>
  );
}
