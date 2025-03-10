"use client";
import { IMAGE_SERVICES, SECTIONS } from "@/constants";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id={SECTIONS.About}
      className="flex flex-col overflow-hidden bg-white pb-[120px] relative"
      ref={ref}
    >
      <div className="absolute right-10 w-[110px] h-[126px] top-[36%] z-10">
        <Image src="/images/our-service-4.png" alt="our-service-4" fill />
      </div>
      <div className="absolute right-[12%] w-[40px] h-[52px] top-[60%] z-10">
        <Image src="/images/our-service-7.png" alt="our-service-4" fill />
      </div>
      <div className="absolute left-[5%] w-[68px] h-[80px] top-[20%] z-10">
        <Image src="/images/our-service-5.png" alt="our-service-4" fill />
      </div>

      <div className="flex flex-col z-20">
        <div className="overflow-hidden">
          <motion.div
            initial={{ translateY: `50%` }}
            animate={isInView ? { translateY: 0 } : {}}
            transition={{ duration: 1.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center h-[32px] px-4 rounded-full border-[0.5px] border-black mt-[120px]">
              <p className="text-black text-[12px] font-semibold">
                Our Services
              </p>
            </div>
            <h2 className="text-center text-[48px] text-black font-bold mt-2 hidden md:block">
              Tailored Travel & Exclusive Events
            </h2>
            <div className="md:hidden">
              <h2 className="text-[32px] text-black font-bold mt-2">
                Tailored Travel &
              </h2>
              <h2 className="text-[32px] text-black font-bold mt-2">
                Exclusive Events
              </h2>
            </div>

            <div className="mt-4 hidden md:block">
              <p className="text-center text-black text-[20px]">
                From personalized concierge services to seamless event
                accommodations—
              </p>
              <p className="text-center text-black text-[20px]">
                crafted for travelers who demand more.
              </p>
            </div>
            <div className="mt-4 md:hidden">
              <p className="text-center text-black text-[14px] px-6">
                From personalized concierge services to seamless event
                accommodations— crafted for travelers who demand more.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center md:gap-6 gap-3 mt-8 self-center">
          {IMAGE_SERVICES.map((image, index) => (
            <motion.div
              initial={{ translateY: `${index * 30 + 60}%` }}
              animate={isInView ? { translateY: 0 } : {}}
              transition={{ duration: 1.8 }}
              key={index}
              className="relative md:w-[18vw] md:h-[18vw] w-[calc((100vw-82px)/3)] h-[calc((100vw-82px)/3)]"
            >
              <Image src={image} alt={`service-${index}`} fill />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
