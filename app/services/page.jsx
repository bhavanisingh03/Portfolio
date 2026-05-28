"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Application Security",
    description:
      "Security assessments for web applications to identify vulnerabilities and strengthen defenses.",
    href: "/",
  },
  {
    num: "02",
    title: "Web Services Security",
    description:
      "Security testing for APIs and web services to identify vulnerabilities such as injection flaws, broken authentication, and data exposure.",
    href: "/",
  },
  {
    num: "03",
    title: "Android Security",
    description:
      "Security assessments for Android applications to identify vulnerabilities and strengthen defenses.",
    href: "/",
  },
  {
    num: "04",
    title: "Cloud Security",
    description:
      "cloud security assessments to identify misconfigurations, access control weaknesses, and data protection issues in cloud environments.",
    href: "/",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] py-16 xl:py-24 flex items-center">

      <div className="container mx-auto px-4 xl:px-0">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-12"
        >

          {services.map((service, index) => (
            <div
              key={index}
              className="
                border border-white/10
                bg-[#232329]/70
                backdrop-blur-sm
                rounded-2xl
                p-8
                group
                hover:border-accent/30
                transition-all duration-300"
            >

              {/* top */}
              <div className="flex items-center justify-between mb-6">

                <h2 className="text-6xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-300">
                  {service.num}
                </h2>

                <Link
                  href={service.href}
                  className="text-2xl hover:text-accent transition-all duration-300 hover:-rotate-45"
                >
                  <BsArrowDownRight />
                </Link>

              </div>

              {/* title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-all duration-300">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-white/60 leading-7 max-w-[90%]">
                {service.description}
              </p>

            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Services;