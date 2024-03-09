"use client";
import { IdTextfield } from "@/components/Textfield";
import { useState } from "react";
import { validateEmail } from "@/lib/utils/validateString";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function SignUp2() {
  const [id, setId] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    setId(id);

    setIsEmailValid(validateEmail(id));
  };
  const submitTerms = () => {
    //TODO: 아이디 DB에 전송
    router.push("/signup-3");
  };

  return (
    <>
      <p className=" text-xl font-medium text-grey-900">
        링카이브 서비스 이용약관에
        <br />
        동의해주세요
      </p>
      <IdTextfield
        placeholder="linkive@example.com"
        name="username"
        value={id}
        onChange={handleChange}
        error={!isEmailValid}
        errorMsg={"이메일 형식을 다시 확인해주세요"}
        valid={isEmailValid && id !== ""}
        validMsg={"사용 가능한 이메일입니다"}
      />
      <div className="w-full flex flex-grow" />
      <Button
        text="동의하고 가입하기"
        onClick={submitTerms}
        disabled={!isEmailValid || id === ""}
      />
    </>
  );
}
