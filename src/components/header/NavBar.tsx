"use client";

import { LIST_NAV_BAR } from "@/constants";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="items-center gap-2 hidden md:flex">
      {LIST_NAV_BAR.map((item) => (
        <button key={item.link} className="cursor-pointer py-2 px-3">
          <p className="text-white font-medium text-[14px]">{item.title}</p>
        </button>
      ))}
      <button className="h-[32px] rounded-full bg-white px-1 flex items-center cursor-pointer">
        <Image src="/icons/contact.svg" alt="contact" width={24} height={24} />
        <p className="text-black text-[14px] ml-1.5 pr-2 text-nowrap">Contact Us</p>
      </button>
    </div>
  );
};

export default NavBar;
