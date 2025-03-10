"use client";
import { SECTIONS } from "@/constants";
import { motion } from "motion/react";
import Image from "next/image";

const DiscoverEvent = () => {
  return (
    <div
      id={SECTIONS.Home}
      className="h-[110dvh] flex flex-col md:items-center relative backdrop-blur-[4px] overflow-hidden"
    >
      <div className="w-[90%] ml-4 md:ml-0 mt-[100px] md:mt-0 md:w-[38%] self-center h-[50dvh] md:h-[75dvh] relative md:absolute md:bottom-[14dvh] right-0 z-10">
        <Image src="/images/image-cover.png" alt="image-cover" fill />
      </div>
      <motion.div
        className="w-full h-[110dvh] z-0 absolute"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/images/bg-embark.jpeg"
          alt="cover"
          fill
          className="object-cover"
        />
      </motion.div>
      <div
        className="z-10 flex flex-col absolute w-full bottom-0 pb-[16dvh] pt-4"
        style={{
          background:
            "linear-gradient(202.07deg, rgba(6, 23, 32, 0) 21.97%, #011C22 90.68%)",
        }}
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ translateY: "80%" }}
            animate={{ translateY: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:pl-20 max-md:items-center"
          >
            <div className="flex items-center gap-3">
              <button className="h-8 md:h-10 rounded-full cursor-pointer bg-[#40404080] border-[0.5px] border-white px-4 backdrop-blur-[4px]">
                <p className="font-semibold text-[10px] md:text-[12px] text-white">
                  Concierge Service
                </p>
              </button>
              <button className="h-8 md:h-10 cursor-pointer rounded-full bg-[#40404080] border-[0.5px] border-white px-4 backdrop-blur-[4px]">
                <p className="font-semibold text-[10px] md:text-[12px] text-white">
                  Event & Community Platform
                </p>
              </button>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-bold max-md:text-center text-white text-[32px] md:text-[72px]">
                Embark on a Journey
              </h2>
              <h2 className="font-bold max-md:text-center text-white text-[32px] md:text-[72px]">
                of Distinction
              </h2>
            </div>
            <div className="hidden md:block">
              <p className="mr-20 text-[11px] md:text-[16px] text-white">
                At Hashtrips, we combine bespoke travel expertise with an
                exclusive lifestyle experience.
              </p>
              <p className="mr-20 text-[11px] md:text-[16px] text-white">
                {
                  "Choose your adventure—whether it's our intimate 1:1 concierge service or our specialized"
                }
              </p>
              <p className="mr-20 text-[11px] md:text-[16px] text-white">
                hotel booking platform for event travelers. Stay tuned as our
                full event and community
              </p>
              <p className="mr-20 text-[11px] md:text-[16px] text-white">
                features are coming soon
              </p>
            </div>
            <p className="md:hidden text-[11px] text-white text-center mx-6">
              {`At Hashtrips, we combine bespoke travel expertise with an
              exclusive lifestyle experience. Choose your adventure—whether it's
              our intimate 1:1 concierge service or our specialized hotel
              booking platform for event travelers. Stay tuned as our full event
              and community features are coming soon`}
            </p>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ translateY: "100%" }}
            animate={{ translateY: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-3 md:gap-6 mt-10 md:mt-16 px-4 md:pl-20 z-20 overflow-hidden"
          >
            <button className="cursor-pointer h-[34px] md:h-[56px] bg-black px-1.5 md:px-3 flex items-center rounded-full">
              <div className="w-[22px] h-[22px] md:w-[32px] md:h-[32px] relative">
                <Image src="/icons/chat.svg" alt="chat" fill />
              </div>
              <p className="text-white text-[12px] md:text-[20px] font-medium px-1.5 md:px-3">
                Chat with Our Concierge
              </p>
            </button>
            <button className="cursor-pointer h-[34px] md:h-[56px] bg-white px-1.5 md:px-3 flex items-center rounded-full">
              <div className="w-[22px] h-[22px] md:w-[32px] md:h-[32px] relative">
                <Image src="/icons/calendar.svg" alt="chat" fill />
              </div>
              <p className="text-[12px] md:text-[20px] text-black font-medium px-1.5 md:px-3">
                Discover Events
              </p>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverEvent;
