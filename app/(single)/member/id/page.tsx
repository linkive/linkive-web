"use client";
import { NumberTextfield } from "@/components/Textfield";
import { useState } from "react";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { isPhoneNumber } from "@/lib/utils/validateString";
import Modal from "@/components/Modal";
import Check from "@/public/icon/check_double.svg";
import Error from "@/public/icon/error_triangle.svg";

export default function FindID() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    setPhoneNumber(number);
    setIsPhoneNumberValid(isPhoneNumber(number));
  };
  const validateID = () => {
    //TODO: 아이디 DB에 전송
    setShowModal(true);
    //Todo popup
  };

  const linkLogin = () => {
    router.push("/login");
  };

  const linkFindPassword = () => {
    router.push("/member/password");
  };
  return (
    <>
      <div className="flex flex-col gap-10 pt-[30px] px-3">
        <p className="text-xl font-medium text-grey-900">
          전화번호를 통해
          <br />
          가입하신 이메일을 확인할 수 있습니다.
        </p>
        <NumberTextfield
          placeholder="전화번호 입력(숫자만)"
          name="username"
          value={phoneNumber}
          onChange={handleChange}
          error={false}
          errorMsg={"가입 정보가 없습니다."}
        />
      </div>
      <div className="w-full flex flex-grow" />
      <div className="px-3">
        <Button
          text="확인"
          onClick={validateID}
          disabled={!isPhoneNumberValid || phoneNumber === ""}
        />
      </div>

      {showModal && (
        <Modal
          title="아이디 안내"
          description={"linkive@linkive.co.kr"}
          button="로그인하기"
          buttonSubmit={linkLogin}
          subButton="비밀번호 찾기"
          subButtonSubmit={linkFindPassword}
          setShowModal={setShowModal}
        >
          <Error />
        </Modal>
      )}
    </>
  );
}
