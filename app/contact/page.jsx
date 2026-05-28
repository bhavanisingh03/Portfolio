"use client";

import { motion } from "framer-motion";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import dynamic from "next/dynamic";

const Turnstile = dynamic(
  () => import("react-turnstile"),
  {
    ssr: false,
  }
);

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 6304837960",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "bhavanisinghr.info@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Hyderabad, Telangana, India",
  },
];

const Contact = () => {

  const formRef = useRef();

  const [service, setService] = useState("");

  const [captchaToken, setCaptchaToken] = useState("");

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {

    e.preventDefault();

    if (!captchaToken) {

      toast.error("Please complete the CAPTCHA challenge.");
      return;

    }

    setLoading(true);

    try {

      // ADMIN EMAIL (TO YOU)
      await emailjs.sendForm(
        "service_jbwtm9h",
        "template_cd67iis",
        formRef.current,
        "ztQ8CkjoCC3x-2-Tw"
      );
      
/* This module can be used in furure, sending auto-replies to visitors who fill out the contact form, acknowledging receipt of their message and providing an estimated response time.
      
  // AUTO REPLY EMAIL (TO VISITOR)
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_AUTO_REPLY_TEMPLATE_ID",
        formRef.current,
        "ztQ8CkjoCC3x-2-Tw"
      );
    */

      toast.success("Message sent successfully!, I will get back to you soon.");

      formRef.current.reset();

      setService("");

    } catch (error) {

      console.log(error);

      toast.error("Failed to send message. Please try again.");

    }

    setLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] flex items-center py-12 xl:py-0"
    >

      <div className="container mx-auto">

        <div className="flex flex-col xl:flex-row gap-[50px]">

          {/* CONTACT INFO */}
          <div className="flex-1 flex items-center xl:justify-start order-2 xl:order-none">

            <ul className="flex flex-col gap-8 w-full">

              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 group"
                >

                  {/* icon */}
                  <div
                    className="
                      w-[60px] h-[60px]
                      xl:w-[72px] xl:h-[72px]
                      bg-[#27272c]
                      text-accent
                      rounded-xl
                      flex items-center justify-center
                      group-hover:bg-accent
                      group-hover:text-primary
                      transition-all duration-300
                    "
                  >

                    <div className="text-[28px]">
                      {item.icon}
                    </div>

                  </div>

                  {/* text */}
                  <div className="flex flex-col gap-1">

                    <p className="text-white/60 text-sm">
                      {item.title}
                    </p>

                    <h3 className="text-lg xl:text-xl">
                      {item.description}
                    </h3>

                  </div>

                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT FORM */}
          <div className="xl:w-[58%]">

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="
                flex flex-col gap-6
                p-8 xl:p-10
                bg-[#27272c]
                rounded-2xl
                border border-white/10
              "
            >

              <div className="flex flex-col gap-3">

                <h3 className="text-4xl xl:text-5xl text-accent font-bold">
                  Let&apos;s work together
                </h3>

                <p className="text-white/60 leading-relaxed">
                  I am available for freelance opportunities,
                  security assessments, and cybersecurity consulting.
                  Feel free to contact me regarding projects,
                  collaborations, or professional opportunities.
                </p>

              </div>

              {/* INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  required
                />

                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  required
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                />

                <Input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                />

              </div>

              {/* SERVICES */}
              <Select onValueChange={(value) => setService(value)}>

                <SelectTrigger className="w-full">

                  <SelectValue placeholder="Select a service" />

                </SelectTrigger>

                <SelectContent>

                  <SelectGroup>

                    <SelectLabel>
                      Services
                    </SelectLabel>

                    <SelectItem value="Web App Security">
                      Web App Security
                    </SelectItem>

                    <SelectItem value="API Security">
                      API Security
                    </SelectItem>

                    <SelectItem value="Mobile App Security">
                      Mobile App Security
                    </SelectItem>

                    <SelectItem value="Thick Client Security">
                      Thick Client Security
                    </SelectItem>

                    <SelectItem value="Threat Modeling">
                      Threat Modeling
                    </SelectItem>

                    <SelectItem value="Cloud Security">
                      Cloud Security
                    </SelectItem>

                    <SelectItem value="Hire for a job opportunity">
                      Hire for a job opportunity
                    </SelectItem>

                  </SelectGroup>

                </SelectContent>

              </Select>

              {/* hidden service field */}
              <input
                type="hidden"
                name="service"
                value={service}
              />

              {/* MESSAGE */}
              <Textarea
                name="message"
                className="h-[180px]"
                placeholder="Type your message here..."
                required
              />

              {/* CAPTCHA */}
              <div className="pt-2">
              <Turnstile
                sitekey="0x4AAAAAADX1REsyEwjjuWBZ"
                onVerify={(token) => 
                  setCaptchaToken(token)}
              />
              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="
                  max-w-[220px]
                  transition-all duration-300
                "
              >

                {loading ? "Sending..." : "Send Message"}

              </Button>

            </form>

          </div>

        </div>

      </div>

    </motion.section>
  );
};

export default Contact;