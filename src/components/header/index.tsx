import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="top-0 px-3 md:px-20 left-0 flex justify-between items-center right-0 z-50 h-[60px] md:h-[80px] backdrop-blur-[12px] bg-[#00000080] fixed">
      <div className="flex items-center justify-between max-md:w-full">
        <button className="cursor-pointer py-1 pr-2 16px md:hidden">
          <div className="relative w-[28px] h-[28px]">
            <Image src={"/icons/menu.svg"} alt="phone" fill />
          </div>
        </button>
        <div className="w-[46px] h-[28px] md:w-[80px] md:h-[40px] relative">
          <Image src={"/images/logo.png"} alt="Hashtrip" fill />
        </div>
        <button className="md:hidden cursor-pointer 16px w-[28px] h-[28px] bg-[#EAF0F6] flex items-center justify-center rounded-full">
          <div className="relative w-[16px] h-[16px]">
            <Image src={"/icons/phone.svg"} alt="phone" fill />
          </div>
        </button>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
