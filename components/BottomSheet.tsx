import React, { useState } from "react";

interface BottomSheeetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet = ({ isOpen, onClose }: BottomSheeetProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-45 z-40 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white p-5 rounded-t-lg transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 여기에 Bottom Sheet 내용을 추가 */}
        <p>Your content here</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BottomSheet;
