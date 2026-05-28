"use client";

import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",

    category: "Machine Learning + Cyber Security",

    title: "DDoS Attack Detection using Machine Learning",

    description:
      "A machine learning based cybersecurity project developed to detect Distributed Denial of Service (DDoS) attacks by analyzing malicious traffic behavior and abnormal network patterns. The project implements multiple classification algorithms including K-Nearest Neighbors (KNN), Random Forest, and Gradient Boosting Classifier to improve attack detection accuracy and strengthen network defense mechanisms.",

    stack: [
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "Cyber Security" },
    ],

    github:
      "https://github.com/bhavanisingh03/DDoS-Attack-Detection-using-Machine-Learning",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[80vh] py-16 xl:py-24 flex items-center">

      <div className="container mx-auto max-w-[1400px] px-4 xl:px-0">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          className="flex flex-col gap-10 xl:gap-14"
        >

          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  flex flex-col
                  xl:flex-row
                  xl:items-center
                  gap-10 xl:gap-14
                  border border-white/10
                  rounded-2xl
                  p-8 xl:p-10
                  bg-[#232329]/70
                  backdrop-blur-sm
                  hover:border-accent/40
                  hover:shadow-[0_0_30px_rgba(0,255,153,0.06)]
                  transition-all duration-300
                "
              >

                {/* subtle glow */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-accent/5
                    to-transparent
                    transition-all duration-300
                    pointer-events-none
                  "
                />

                {/* LEFT */}
                <div className="flex-1 flex flex-col gap-6">

                  {/* number */}
                  <div
                    className="
                      text-5xl xl:text-7xl
                      font-extrabold
                      text-transparent
                      text-outline
                    "
                  >
                    {project.num}
                  </div>

                  {/* title section */}
                  <div className="flex flex-col gap-4">

                    <p
                      className="
                        text-accent
                        text-xs xl:text-sm
                        uppercase
                        tracking-[3px]
                      "
                    >
                      {project.category}
                    </p>

                    <h2
                      className="
                        text-2xl
                        md:text-3xl
                        xl:text-4xl
                        font-bold
                        leading-tight
                        text-white
                      "
                    >
                      {project.title}
                    </h2>

                  </div>

                  {/* description */}
                  <p
                    className="
                      text-white/70
                      leading-8
                      text-[15px] xl:text-base
                      max-w-[750px]
                    "
                  >
                    {project.description}
                  </p>

                  {/* STACK */}
                  <ul className="flex flex-wrap gap-3">

                    {project.stack.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="
                            px-4 py-2
                            rounded-full
                            border border-white/10
                            bg-white/5
                            text-sm text-white/80
                            hover:border-accent
                            hover:text-accent
                            hover:bg-accent/5
                            transition-all duration-300
                          "
                        >
                          {item.name}
                        </li>
                      );
                    })}

                  </ul>

                </div>

                {/* RIGHT */}
                <div
                  className="
                    flex xl:flex-col
                    items-center
                    gap-4
                    xl:min-w-[120px]
                  "
                >

                  <Link
                    href={project.github}
                    target="_blank"
                    className="
                      w-[68px] h-[68px]
                      rounded-full
                      bg-white/5
                      border border-white/10
                      flex justify-center items-center
                      group
                      hover:bg-accent
                      hover:border-accent
                      hover:-translate-y-1
                      transition-all duration-300
                    "
                  >

                    <BsArrowUpRight
                      className="
                        text-3xl
                        text-white
                        group-hover:text-primary
                        transition-all duration-300
                      "
                    />

                  </Link>

                  <span className="text-white/60 text-sm">
                    View Project
                  </span>

                </div>

              </div>
            );
          })}

        </motion.div>

      </div>

    </section>
  );
};

export default Projects;