import Image from "next/image";
import {
  COIN_STACK_ICON,
  CREDIT_CARD_ICON,
  INTERSECT_CIRCLE_ICON,
  PUZZLE_ICON,
  TABLE_ICON,
} from "@/constants/assets";
import { PropsWithChildren } from "react";

interface SidebarProps extends PropsWithChildren {
  isActive?: boolean;
}

const SidebarData = {
  headerData: [
    {
      name: "Home",
      iconUrl: TABLE_ICON,
    },
    {
      name: "Puzzle Piece",
      iconUrl: PUZZLE_ICON,
    },
    {
      name: "Intersect Circle",
      iconUrl: INTERSECT_CIRCLE_ICON,
    },
  ],
  footerData: [
    {
      name: "Credit Card",
      iconUrl: CREDIT_CARD_ICON,
    },
    {
      name: "Coin Stack",
      iconUrl: COIN_STACK_ICON,
    },
  ],
};

const Sidebar = () => {
  return (
    <div className="w-[70px] h-full flex flex-col items-center justify-between p-4 border-r pb-5">
      {/* Sidebar Header */}
      <div className="space-y-5">
        {SidebarData?.headerData?.map((item, index) => {
          return (
            <SidebarItem key={index}>
              <Image
                src={item.iconUrl}
                width={20}
                height={20}
                alt={item.name}
              />
            </SidebarItem>
          );
        })}
      </div>

      {/* Sidebar Footer */}
      <div className="space-y-5">
        {SidebarData?.footerData?.map((item, index) => {
          return (
            <SidebarItem key={index}>
              <Image
                src={item.iconUrl}
                width={20}
                height={20}
                alt={item.name}
              />
            </SidebarItem>
          );
        })}
      </div>
    </div>
  );
};

const SidebarItem = ({ children}: SidebarProps) => {
  return (
    <div
      className={` w-[40px] h-[40px] flex items-center justify-center rounded-md cursor-pointer transition-all duration-300`}>
      {children}
    </div>
  );
};

export default Sidebar;
