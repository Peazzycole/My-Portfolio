import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPhp,
  FaMagento,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMicrosoftword,
  SiTailwindcss,
  SiNativescript,
  SiFramer,
  SiGraphql,
  SiMysql,
} from "react-icons/si";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        stage: "",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <FaPhp key={5} />,
          <SiNextdotjs key={6} />,
          <FaMagento key={7} />,
          <SiTailwindcss key={8} />,
          <FaNodeJs key={9} />,
          <SiGraphql key={10} />,
          <SiMysql key={11} />,
        ],
      },
      {
        title: "UI / UX",
        icons: [<SiFramer key={1} />],
      },
      {
        title: "Word Processing",
        icons: [<SiMicrosoftword key={2} />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer - EVE",
        stage: "July 2024 - Present",
        icons: [],
      },
      {
        title: "Fullstack Developer - Freelance",
        stage: "May 2024 - July 2024",
        icons: [],
      },
      {
        title: "Junior Web Developer - Scandiweb",
        stage: "September 2022 - June 2023",
        icons: [],
      },
      {
        title: "React Intern - LinuxJobber",
        stage: "2022",
        icons: [],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Bachelor Of Engineering - University Of Benin",
        stage: "2018 - 2022",
        icons: [],
      },
      {
        title: "SSCE - Institutue Of Continuous Education",
        stage: "2016",
        icons: [],
      },
    ],
  },
];
