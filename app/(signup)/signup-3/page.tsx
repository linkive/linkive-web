"use client";
import { PasswordTextfield } from "@/components/Textfield";
import { useState } from "react";
import {
  isContainNumber,
  isContainsSpecialCharacter,
  isLength8To20,
} from "@/lib/utils/validateString";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import CheckDefault from "@/public/icon/valid_check_default.svg";
import CheckActive from "@/public/icon/valid_check_active.svg";
import CheckError from "@/public/icon/valid_check_error.svg";

const PasswordCondition = ({
  pw,
  text,
  condition,
}: {
  pw: string;
  text: string;
  condition: (content: string) => boolean;
}) => {
  return (
    <div className="flex mt-2 gap-0.5 items-center">
      <span className="text-xs text-grey-400">{text}</span>
      {pw === "" ? (
        <CheckDefault />
      ) : condition(pw) ? (
        <CheckActive />
      ) : (
        <CheckError />
      )}
    </div>
  );
};

export default function SignUp2() {
  const [password, setPassword] = useState("");
  const [isPwValid, setIsPwValid] = useState<boolean>(false);
  const [rePassword, setRePassword] = useState("");
  const [isSamePw, setIsSamePw] = useState<boolean>(false);
  const router = useRouter();

  const validatePassword = (pw: string) => {
    return (
      isContainNumber(pw) && isContainsSpecialCharacter(pw) && isLength8To20(pw)
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);

    setIsPwValid(validatePassword(newValue));
  };

  const handleChangeRePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setRePassword(newValue);
    if (password === newValue) {
      setIsSamePw(true);
      return;
    }

    setIsSamePw(false);
  };

  const submitTerms = () => {
    //TODO: 아이디 DB에 전송
    router.push("/signup-4");
  };

  return (
    <>
      <p className="text-xl font-medium text-grey-900">
        로그인에 사용할
        <br />
        비밀번호를 입력해주세요.
      </p>
      <div>
        <PasswordTextfield
          placeholder="비밀번호 입력"
          name="password"
          value={password}
          onChange={handleChange}
          error={!isPwValid && password !== ""}
          errorMsg="하단의 조건을 확인해주세요"
        />

        <div className="flex gap-3 ">
          <PasswordCondition
            pw={password}
            text="숫자 포함"
            condition={isContainNumber}
          />
          <PasswordCondition
            pw={password}
            text="특수문자 포함"
            condition={isContainsSpecialCharacter}
          />
          <PasswordCondition
            pw={password}
            text="8~20자 이내"
            condition={isLength8To20}
          />
        </div>

        <PasswordTextfield
          placeholder="비밀번호 입력"
          name="rePassword"
          value={rePassword}
          onChange={handleChangeRePw}
          className="mt-[30px]"
        />
      </div>

      <div className="w-full flex flex-grow" />
      <Button
        text="동의하고 가입하기"
        onClick={submitTerms}
        disabled={!isSamePw}
      />
    </>
  );
}
