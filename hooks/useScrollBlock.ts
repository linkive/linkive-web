import { useEffect } from "react";

export default function useScrollBlock(isVisible: boolean): void {
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "visible";

    // 컴포넌트가 언마운트되거나 isVisible 값이 변경될 때 기존 상태로 복구
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isVisible]);
}
