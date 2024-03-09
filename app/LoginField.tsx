"use client";
import { Button } from "@/components/Button";
import { PasswordTextfield, IdTextfield } from "@/components/Textfield";
import { validateEmail } from "@/lib/utils/validateString";
import { useState } from "react";

interface Credentials {
  username: string;
  password: string;
}

export default function LoginField() {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isUserValid, setIsUserValid] = useState<boolean>(true);
  const [idErrorMsg, setIdErrorMsg] = useState<string | null>(
    "이메일 형식을 다시 확인해주세요"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    if (name === "username") {
      setIsEmailValid(validateEmail(value));
      if (validateEmail(value)) {
        if (!isUserValid) {
          setIdErrorMsg(null);
          return;
        }
      }
      setIdErrorMsg("이메일 형식을 다시 확인해주세요");
    }
  };
  // DB에 id, 비밀 번호가 존재하는지 찾는 함수
  const checkUserCredentails = (): boolean => {
    // TODO: DB와 연결
    if (false) {
      //TOOD: home 화면으로 이동
      return true;
    }

    return false;
  };

  const handleSubmit = () => {
    if (checkUserCredentails()) {
      alert("로그인!");
    } else {
      setIsUserValid(false);
      setIdErrorMsg(null);
    }
  };
  const isFormFilled =
    credentials.username && isEmailValid && credentials.password;

  return (
    <div className="w-full h-max px-3">
      <div className="w-full h-max py-5">
        {" "}
        <IdTextfield
          placeholder="아이디(이메일) 입력"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          error={!isEmailValid || !isUserValid}
          errorMsg={idErrorMsg}
        />
        <PasswordTextfield
          placeholder="비밀번호 입력"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          error={!isUserValid}
          errorMsg="아이디 또는 비밀번호가 일치하지 않습니다"
          className="mt-2.5"
        />
      </div>

      <Button text="로그인" onClick={handleSubmit} disabled={!isFormFilled} />
    </div>
  );
}
