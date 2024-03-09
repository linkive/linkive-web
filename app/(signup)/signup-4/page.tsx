"use client";
import { NumberTextfield } from "@/components/Textfield";
import { useState } from "react";
import { isPhoneNumber } from "@/lib/utils/validateString";
import { Button } from "@/components/Button";
import { usePathname, useRouter } from "next/navigation";

export default function SignUp2() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValidd] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    setPhoneNumber(number);

    setIsPhoneNumberValidd(isPhoneNumber(number));
  };
  const submitTerms = () => {
    //TODO: 아이디 DB에 전송
    router.push("/");
  };

  return (
    <>
      <p className=" text-xl font-medium text-grey-900">
        아이디 / 비밀번호 분실 시
        <br />
        사용할 전화번호를 입력하세요
      </p>
      <NumberTextfield
        placeholder="01012345678"
        name="username"
        value={phoneNumber}
        onChange={handleChange}
        error={!isPhoneNumberValid && phoneNumber !== ""}
        errorMsg={"올바른 형식으로 입력해주세요"}
      />
      <div className="w-full flex flex-grow" />
      <Button
        text="회원가입 완료"
        onClick={submitTerms}
        disabled={!isPhoneNumberValid || phoneNumber === ""}
      />
    </>
  );
}
