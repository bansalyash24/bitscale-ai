"use client";
import Image from "next/image";
import { BACK_ICON, USER_ICON } from "@/constants/assets";
import { useState } from "react";
import Toggle from "react-switch";

const SheetTopBar = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  
  return (
    <header className="w-full border p-3 flex items-center justify-between text-[14px] min-h-[60px] bg-white">
      <div className="flex items-center space-x-4">
        <Image src={BACK_ICON} width={16} height={16} alt="back-icon" />
        <span className="text-gray-500">Untitled</span>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Toggle
            className="toggle-switch"
            onChange={() => setIsEnabled((prev) => !prev)}
            checked={isEnabled}
            handleDiameter={18}
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <span className="text-green-600">Sync</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <Image src={USER_ICON} width={16} height={16} alt="user" />
        </div>
      </div>
    </header>
  );
};

export default SheetTopBar;
