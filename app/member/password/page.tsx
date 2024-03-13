"use client";
import { IdTextfield, NumberTextfield } from "@/components/Textfield";
import { useState } from "react";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { validateEmail, isPhoneNumber } from "@/lib/utils/validateString";
import Modal from "@/components/Modal";
import Check from "@/public/icon/check_double.svg";
import Error from "@/public/icon/error_triangle.svg";

export default function FindPassword() {
  const [id, setId] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);
  const modalDescription = `해당 전화번호로 가입된
비밀번호 정보가 없습니다`;

  const router = useRouter();

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    setId(id);
    setIsEmailValid(validateEmail(id));
  };

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    setPhoneNumber(number);

    setIsPhoneNumberValid(isPhoneNumber(number));
  };

  const validateCredentials = () => {
    //TODO: 아이디 DB에 전송
    setShowModal(true);
    //Todo popup
  };

  const linkSignUp = () => {
    router.push("/signup-1");
  };

  const reTry = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="flex flex-col gap-10 pt-[30px] px-3">
        <p className="text-xl font-medium text-grey-900">
          아이디 / 전화번호를 통해
          <br />
          가입하신 아이디를 확인할 수 있습니다.
        </p>

        <div>
          <span className="block text-grey-700 mb-4">아이디</span>
          <IdTextfield
            placeholder="아이디(이메일) 입력"
            name="username"
            value={id}
            onChange={handleChangeId}
          />

          <span className="block text-grey-700 mt-[30px] mb-4">전화번호</span>
          <NumberTextfield
            placeholder="전화번호 입력"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
        </div>
      </div>
      <div className="w-full flex flex-grow" />
      <div className="px-3">
        <Button
          text="확인"
          onClick={validateCredentials}
          disabled={!isEmailValid || !isPhoneNumberValid}
        />
      </div>

      {showModal && (
        <Modal
          title="가입정보 없음"
          description={modalDescription}
          button="회원가입 하러가기"
          buttonSubmit={linkSignUp}
          subButton="다시 시도하기"
          subButtonSubmit={reTry}
          setShowModal={setShowModal}
        >
          <Error />
        </Modal>
      )}
    </>
  );
}
