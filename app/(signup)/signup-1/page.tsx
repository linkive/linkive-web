"use client";
import { BaseTopBar } from "@/components/TopBar";
import useScrollBlock from "@/hooks/useScrollBlock";
import Back from "@/public/icon/back.svg";
import ProgressBar from "../ProgressBar";
import CheckBox from "@/components/CheckBox";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import CheckBoxActive from "@/public/icon/checkBox_on.svg";
import CheckBoxInactive from "@/public/icon/checkBox_off.svg";
import CheckField from "@/components/CheckField";
import { Button } from "@/components/Button";

interface Term {
  id: number;
  description: string;
  isRequired: boolean;
  isAgreed: boolean;
  link: string;
}

export default function SignUp() {
  const router = useRouter();
  const [terms, setTerms] = useState<Term[]>([
    {
      id: 1,
      description: "[필수] 만 14세 이상",
      isRequired: true,
      isAgreed: false,
      link: "/signup",
    },
    {
      id: 2,
      description: "[필수] 이용약관 동의",
      isRequired: true,
      isAgreed: false,
      link: "/signup",
    },
    {
      id: 3,
      description: "[필수] 개인정보 처리방침 동의",
      isRequired: true,
      isAgreed: false,
      link: "/signup",
    },
    {
      id: 4,
      description: "[선택] 광고성 정보 수신 및 마케팅 활용 동의",
      isRequired: false,
      isAgreed: false,
      link: "/signup",
    },
  ]);

  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  useEffect(() => {
    const allRequiredAgreed = terms.every(
      (term) => !term.isRequired || term.isAgreed
    );
    setIsNextEnabled(allRequiredAgreed);

    const allAgreed = terms.every((term) => term.isAgreed);
    setIsAllAgreed(allAgreed);
  }, [terms]);

  const handleAllAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAgreeValue = e.target.checked;
    const updatedTerms = terms.map((term) => ({
      ...term,
      isAgreed: newAgreeValue,
    }));
    setTerms(updatedTerms);
  };

  const handleTermAgreeChange = (id: number, isAgreed: boolean) => {
    const updatedTerms = terms.map((term) =>
      term.id === id ? { ...term, isAgreed } : term
    );
    setTerms(updatedTerms);
  };

  const submitTerms = () => {
    //TODO: 약관 내용들 DB에 전송
    router.push("/signup-2");
  };

  return (
    <>
      <p className=" text-xl font-medium text-grey-900">
        링카이브 서비스 이용약관에
        <br />
        동의해주세요
      </p>

      <div className="hidden gap-2.5">
        <input
          id="all"
          type="checkbox"
          checked={isAllAgreed}
          onChange={handleAllAgreeChange}
          hidden
        />
        <label htmlFor="all" className="cursor-pointer">
          {isAllAgreed ? <CheckBoxActive /> : <CheckBoxInactive />}
        </label>
        전체 약관에 동의합니다(선택 정보 포함)
      </div>

      <CheckField
        id="all"
        checked={isAllAgreed}
        onChange={() => handleAllAgreeChange}
        description="전체 약관에 동의합니다(선택 정보 포함)"
        className="text-base text-grey-800"
      />
      <div className="flex flex-col gap-3">
        {terms.map((term) => (
          <CheckField
            id={`${term.id}`}
            link="/signup"
            checked={term.isAgreed}
            onChange={(e) => handleTermAgreeChange(term.id, e.target.checked)}
            description={term.description}
          />
        ))}
      </div>

      <div className="w-full flex flex-grow" />
      <Button
        text="동의하고 가입하기"
        onClick={submitTerms}
        disabled={!isNextEnabled}
      />
    </>
  );
}
