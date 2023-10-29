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
  SiGraphql,
  SiMysql
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
          <SiMysql key={11} />
        ],
      },
      {
        title: "UI / UX",
        icons: [
          <FaFigma key={1} />,
        ],
      },
      {
        title: "Word Processing",
        icons: [
          <SiMicrosoftword key={2} />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Junior Web Developer - Scandiweb",
        stage: "2022 - 2023",
        icons: [],
      },
      {
        title: "React Intern - LinuxJobber",
        stage: "2022",
        icons: [],
      },
      {
        title: "Typist - Vision International Academu",
        stage: "2014 - present",
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