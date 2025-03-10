"use client";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col md:h-[80dvh] h-[110dvh] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden hidden md:block">
        <motion.div
          initial={{ scale: 1, translateY: 0 }}
          animate={isInView ? { scale: 1.4, translateY: "-20%" } : {}}
          transition={{ duration: 5, delay: 1.2 }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/bg-footer.jpeg"
            alt="bg-footer"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
      <div className="absolute w-full h-full md:hidden overflow-hidden z-0">
        <div className="h-full w-[120vh] relative">
          <Image
            src="/images/bg-footer.jpeg"
            alt="bg-footer"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
        }}
      />
      <div className="z-20 flex flex-col items-center h-[55%] justify-center px-6">
        <p className="text-[40px] md:text-[52px] text-white font-semibold text-center md:mt-[6%]">
          Hashtrips – Tailored Journeys,
        </p>
        <p className="text-[40px] md:text-[52px] text-white font-semibold text-center">
          Unforgettable Experiences.
        </p>
      </div>
      <motion.div
        initial={{ translateY: "100%" }}
        animate={isInView ? { translateY: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="h-[45%] z-20 flex flex-col border-t-[#F7F7F7] justify-center border-t bg-[#0000001A] px-6 md:px-[80px] md:backdrop-blur-[4px] backdrop-blur-[20px]"
      >
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col max-md:items-center">
            <p className="text-white text-[20px] font-medium font-jakarta mb-3">
              Sign up for email updates
            </p>
            <div className="flex items-center bg-[#40404080] justify-between h-[60px] p-3 pl-6 border border-white rounded-full w-full md:min-w-[36vw]">
              <input
                placeholder="Your Email"
                className="outline-none focus:outline-none text-white font-medium text-[16px]"
              />
              <button className="flex items-center h-9 px-1.5 bg-black rounded-full cursor-pointer">
                <Image
                  src="/icons/submit.svg"
                  alt="submit"
                  width={24}
                  height={24}
                />
                <p className="text-white text-[12px] font-medium mx-2">
                  Submit
                </p>
              </button>
            </div>
          </div>

          <div className="flex items-start gap-16 max-md:mt-6">
            <div className="flex flex-col items-start gap-1">
              <p className="text-[14px] text-white font-semibold mb-1">
                Company
              </p>
              <button className="cursor-pointer text-white text-[14px]">
                About Us
              </button>
              <button className="cursor-pointer text-white text-[14px]">
                Careers
              </button>
              <button className="cursor-pointer text-white text-[14px]">
                Blog
              </button>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-[14px] text-white font-semibold mb-1">
                Support
              </p>
              <button className="cursor-pointer text-white text-[14px]">
                Help Center
              </button>
              <button className="cursor-pointer text-white text-[14px]">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-t-white mt-12" />
        <div className="flex items-center justify-between mt-6 max-md:flex-col-reverse">
          <div className="flex items-center gap-6 max-md:flex-col">
            <div className="flex items-center gap-6">
              <button className="cursor-pointer text-white text-[12px] font-semibold">
                Privacy Policy
              </button>
              <button className="cursor-pointer text-white text-[12px] font-semibold">
                Terms of Service
              </button>
            </div>
            <button className="cursor-pointer text-white text-[12px] font-semibold">
              © 2025 HashTrips, Inc. All rights reserved
            </button>
          </div>
          <div className="flex items-center gap-3 max-md:mb-2">
            <Image
              src="/icons/in.svg"
              alt="in"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
