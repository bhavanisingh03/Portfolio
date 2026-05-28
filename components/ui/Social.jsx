import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";

import React from "react";

const socialIcons = [
  {
    id: 1,
    icon: <FaGithub />,
    path: "https://github.com/bhavanisingh03",
  },

  {
    id: 2,
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/bhavani-singh-rajpurohit",
  },

  {
    id: 3,
    icon: <FaMedium />,
    path: "https://medium.com/@rajpurohitbhavanisingh2001",
  },

  {
    id: 4,
    icon: "THM",
    path: "https://tryhackme.com/p/reprisalfracture",
  },

  {
    id: 5,
    icon: "HTB",
    path: "https://app.hackthebox.com/profile",
  },

  {
    id: 6,
    icon: <FaTwitter />,
    path: "https://x.com/Bhavanisingh__",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>

      {socialIcons.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          target="_blank"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}

    </div>
  );
};

export default Social;