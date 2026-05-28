"use client";

import { motion } from "framer-motion";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";


// ================= ABOUT =================

const about = {
  title: "About me",
  description:
    "Cybersecurity Engineer focused on Web Application Security, API Security, Mobile Security, Thick Client Security, Threat Modeling, and Cloud Security,  with experience in VAPT and Red Teaming. Passionate about ethical hacking, security research, and continuous learning in the cybersecurity domain.",
  info: [
    { fieldName: "Name", fieldValue: "Bhavani Singh" },
    { fieldName: "Phone", fieldValue: "+91 6304837960" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    { fieldName: "Email", fieldValue: "bhavanisinghr.info@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Hindi, Telugu, German." },
    { fieldName: "Freelance", fieldValue: "Available for freelance work." },
  ],
};


// ================= EXPERIENCE =================

const experience = {
  title: "My experience",
  description:
    "Professional experience in cybersecurity engineering, security testing, and research.",

  items: [
    {
      company:
        "C-DAC: Centre for Development of Advanced Computing, Hyderabad",
      position: "Project Engineer",
      duration: "Dec 2024 - Present",
    },

    {
      company:
        "C-DAC: Centre for Development of Advanced Computing, Hyderabad",
      position: "Cyber Security Intern",
      duration: "May 2024 - Oct 2024",
    },
  ],
};


// ================= EDUCATION =================

const education = {
  title: "My education",
  description:
    "Academic background focused on Cyber Security and Forensic Science.",

  items: [
    {
      institution: "Amity University",
      degree: "MSc Cyber Security",
      duration: "2022 - 2024",
    },

    {
      institution: "Parul University",
      degree: "BSc Forensic Science",
      duration: "2019 - 2022",
    },
  ],
};

// ================= CERTIFICATIONS =================

const certifications = {
  title: "My certifications",

  description:
    "Professional certifications and cybersecurity training completed.",

  items: [
    {
      name: "Certified Ethical Hacker v13 (CEH)",
      issuer: "EC-Council",
      year: "2026",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=ymsqf7r/YbyloylyLQjcwjQa2O+wT7XFnVCoxAt6d4U="

    },

    {
      name: "Cyber Threat Intelligence (CTI) Training",
      issuer: "NULLCON",
      year: "2025",
      link: "https://www.linkedin.com/posts/bhavani-singh-rajpurohit_cybersecurity-cyberthreatintelligence-nullcon-activity-7340393150386970626-5Jpu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeIrqwBB3jCcwsLfrePkwARQ8S_2ZAyITc"
    },

  ],
};


// ================= RESUME COMPONENT =================

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] py-12 xl:py-20"
    >

      <div className="container mx-auto">

        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >

          {/* ================= LEFT SIDE ================= */}

          <TabsList className="xl:w-[28%]">

            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>

            <TabsTrigger value="education">
              Education
            </TabsTrigger>

            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>

            <TabsTrigger value="certifications">
              Certifications
            </TabsTrigger>

            <TabsTrigger value="about">
              About me
            </TabsTrigger>

          </TabsList>



          {/* ================= RIGHT SIDE ================= */}

          <div className="xl:w-[72%] min-h-[500px]">

            {/* ===================================================== */}
            {/* EXPERIENCE */}
            {/* ===================================================== */}

            <TabsContent value="experience" className="w-full">

              <div className="flex flex-col gap-[30px]">

                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                    {experience.title}
                  </h3>

                  <p className="max-w-[700px] text-white/60 leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                <ScrollArea className="h-[420px] pr-4">

                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="
                          bg-[#232329]/70 backdrop-blur-sm
                          border border-white/5
                          hover:border-accent/30
                          hover:shadow-[0_0_25px_rgba(0,255,153,0.06)]
                          transition-all duration-300
                          rounded-xl
                          p-8
                          flex flex-col gap-4
                        "
                      >

                        <span className="text-accent text-sm">
                          {item.duration}
                        </span>

                        <h3 className="text-2xl font-semibold leading-snug">
                          {item.position}
                        </h3>

                        <div className="flex items-center gap-3">

                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                          <p className="text-white/60">
                            {item.company}
                          </p>

                        </div>

                      </li>
                    ))}

                  </ul>

                </ScrollArea>

              </div>

            </TabsContent>



            {/* ===================================================== */}
            {/* EDUCATION */}
            {/* ===================================================== */}

            <TabsContent value="education" className="w-full">

              <div className="flex flex-col gap-[30px]">

                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                    {education.title}
                  </h3>

                  <p className="max-w-[700px] text-white/60 leading-relaxed">
                    {education.description}
                  </p>
                </div>

                <ScrollArea className="h-[420px] pr-4">

                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="
                          bg-[#232329]/70 backdrop-blur-sm
                          border border-white/5
                          hover:border-accent/30
                          hover:shadow-[0_0_25px_rgba(0,255,153,0.06)]
                          transition-all duration-300
                          rounded-xl
                          p-8
                          flex flex-col gap-4
                        "
                      >

                        <span className="text-accent text-sm">
                          {item.duration}
                        </span>

                        <h3 className="text-2xl font-semibold leading-snug">
                          {item.degree}
                        </h3>

                        <div className="flex items-center gap-3">

                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                          <p className="text-white/60">
                            {item.institution}
                          </p>

                        </div>

                      </li>
                    ))}

                  </ul>

                </ScrollArea>

              </div>

            </TabsContent>

            

            



            {/* ===================================================== */}
            {/* SKILLS */}
            {/* ===================================================== */}

            <TabsContent value="skills" className="w-full">

              <div className="flex flex-col gap-[50px]">

                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                    My skills
                  </h3>

                  <p className="text-white/60 leading-relaxed max-w-[700px]">
                    Technologies, tools, and security domains I work with.
                  </p>
                </div>



                {/* SECURITY DOMAINS */}

                <div className="flex flex-col gap-6">

                  <div className="flex flex-col gap-2">

                    <h4 className="text-2xl font-bold uppercase tracking-[2px] text-white">
                      Security Domains
                    </h4>

                    <div className="w-16 h-[2px] bg-accent rounded-full"></div>

                  </div>

                  <div className="flex flex-wrap gap-4">

                    {[
                      "Web App Security",
                      "API Security",
                      "Android Security",
                      "iOS Security",
                      "Threat Modeling",
                      "VAPT",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="
                          px-5 py-3
                          rounded-lg
                          bg-[#232329]/70 backdrop-blur-sm
                          border border-white/10
                          text-white/80
                          hover:text-accent
                          hover:border-accent/40
                          hover:bg-[#2a2a31]
                          hover:shadow-[0_0_12px_rgba(0,255,153,0.08)]
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </div>
                    ))}

                  </div>

                </div>





                {/* INFRASTRUCTURE */}

                <div className="flex flex-col gap-6">

                  <div className="flex flex-col gap-2">

                    <h4 className="text-2xl font-bold uppercase tracking-[2px] text-white">
                      Infrastructure & Cloud
                    </h4>

                    <div className="w-16 h-[2px] bg-accent rounded-full"></div>

                  </div>

                  <div className="flex flex-wrap gap-4">

                    {[
                      "Network Security",
                      "Cloud Security",
                      "Firewall",
                      "IDS / IPS",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="
                          px-5 py-3
                          rounded-lg
                          bg-[#232329]/70 backdrop-blur-sm
                          border border-white/10
                          text-white/80
                          hover:text-accent
                          hover:border-accent/40
                          hover:bg-[#2a2a31]
                          hover:shadow-[0_0_12px_rgba(0,255,153,0.08)]
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </div>
                    ))}

                  </div>

                </div>



                {/* TOOLS */}

                <div className="flex flex-col gap-6">

                  <div className="flex flex-col gap-2">

                    <h4 className="text-2xl font-bold uppercase tracking-[2px] text-white">
                      Security Tools
                    </h4>

                    <div className="w-16 h-[2px] bg-accent rounded-full"></div>

                  </div>

                  <div className="flex flex-wrap gap-4">

                    {[
                      "Burp Suite",
                      "Nmap",
                      "Wireshark",
                      "Metasploit",
                      "OWASP ZAP",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="
                          px-5 py-3
                          rounded-lg
                          bg-[#232329]/70 backdrop-blur-sm
                          border border-white/10
                          text-white/80
                          hover:text-accent
                          hover:border-accent/40
                          hover:bg-[#2a2a31]
                          hover:shadow-[0_0_12px_rgba(0,255,153,0.08)]
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </div>
                    ))}

                  </div>

                </div>



                {/* PROGRAMMING */}

                <div className="flex flex-col gap-6">

                  <div className="flex flex-col gap-2">

                    <h4 className="text-2xl font-bold uppercase tracking-[2px] text-white">
                      Programming & Scripting
                    </h4>

                    <div className="w-16 h-[2px] bg-accent rounded-full"></div>

                  </div>

                  <div className="flex flex-wrap gap-4">

                    {[
                      "Python",
                      "Bash Scripting",
                    
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="
                          px-5 py-3
                          rounded-lg
                          bg-[#232329]/70 backdrop-blur-sm
                          border border-white/10
                          text-white/80
                          hover:text-accent
                          hover:border-accent/40
                          hover:bg-[#2a2a31]
                          hover:shadow-[0_0_12px_rgba(0,255,153,0.08)]
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </TabsContent>

{/* ===================================================== */}
{/* CERTIFICATIONS */}
{/* ===================================================== */}

<TabsContent value="certifications" className="w-full">

  <div className="flex flex-col gap-[30px]">

    <div>
      <h3 className="text-3xl xl:text-4xl font-bold mb-4">
        {certifications.title}
      </h3>

      <p className="max-w-[700px] text-white/60 leading-relaxed">
        {certifications.description}
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">

      {certifications.items.map((item, index) => (
        <a
  key={index}
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-[#232329]/70 backdrop-blur-sm
    border border-white/5
    hover:border-accent/50
    hover:shadow-[0_0_25px_rgba(0,255,153,0.12)]
    hover:-translate-y-1 hover:scale-[1.01]
    transition-all duration-300
    rounded-xl
    p-8
    flex flex-col gap-4
    cursor-pointer
  "
>

          <span className="text-accent text-sm">
            {item.year}
          </span>

          <h3 className="text-2xl font-semibold leading-snug">
            {item.name}
          </h3>

          <div className="flex items-center gap-3">

            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

            <p className="text-white/60">
              {item.issuer}
            </p>

          </div>

        </a>
      ))}

    </div>

  </div>

</TabsContent>

            {/* ===================================================== */}
            {/* ABOUT */}
            {/* ===================================================== */}

            <TabsContent value="about" className="w-full">

              <div className="flex flex-col gap-[30px]">

                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold mb-4">
                    {about.title}
                  </h3>

                  <p className="max-w-[700px] text-white/60 leading-relaxed">
                    {about.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6">

                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4"
                    >

                      <span className="text-white/60">
                        {item.fieldName}:
                      </span>

                      <span className="text-xl">
                        {item.fieldValue}
                      </span>

                    </li>
                  ))}

                </ul>

              </div>

            </TabsContent>

          </div>

        </Tabs>

      </div>

    </motion.section>
  );
};

export default Resume;