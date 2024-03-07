//약관 동의에 이용되는 CheckBox 구현
//TODO: component 선택에 쓰이는 checkbox와는 생김새가 달라서 확장 가능하게 작성할 것

"use client";

import { useState } from "react";
import CheckBoxActive from "@/public/icon/checkBox_on.svg";
import CheckBoxInactive from "@/public/icon/checkBox_off.svg";

export default function CheckBox({ state = false }: { state?: boolean }) {
  const [isChecked, setIsChecked] = useState(state);

  return (
    <button onClick={() => setIsChecked((pre) => !pre)}>
      {isChecked ? <CheckBoxActive /> : <CheckBoxInactive />}
    </button>
  );
}
