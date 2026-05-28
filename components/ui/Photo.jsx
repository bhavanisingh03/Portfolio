"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.6,
            ease: "easeInOut",
          },
        }}
        className="relative"
      >

        {/* outer circle */}
        <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] rounded-full border border-accent/30 shadow-[0_0_45px_rgba(0,255,153,0.12)] flex items-center justify-center">

          {/* image wrapper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.2,
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className="relative w-[282px] h-[282px] xl:w-[458px] xl:h-[458px] rounded-full overflow-hidden"
          >

            <Image
              src="/ProPic1.png"
              priority
              fill
              sizes="(max-width: 768px) 260px, 420px"
              alt="Bhavani Singh"
              className="object-contain scale-[1.04] object-top translate-y-3"
            />

          </motion.div>

        </div>

        {/* animated circle */}
<motion.svg
  className="
    absolute top-0 left-0
    w-[300px] h-[300px]
    xl:w-[506px] xl:h-[506px]
  "
  fill="transparent"
  viewBox="0 0 506 506"
  xmlns="http://www.w3.org/2000/svg"
>

  <motion.circle
    cx="253"
    cy="253"
    r="250"
    stroke="#00ff99"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"

    style={{
      filter: "drop-shadow(0px 0px 8px rgba(0,255,153,0.35))",
    }}

    initial={{
      strokeDasharray: "24 10 0 0",
    }}

    animate={{
      strokeDasharray: [
        "15 120 25 25",
        "16 25 92 72",
        "4 250 22 22",
      ],

      strokeDashoffset: [0, -24, -24, -24],

      rotate: [120, 360],
    }}

    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
  />

</motion.svg>

      </motion.div>

    </div>
  );
};

export default Photo;