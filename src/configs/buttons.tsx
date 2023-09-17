import { Email, Github, Linkedin, Resume } from "../icons";

export const buttonsData = [
  {
    href: "https://github.com/birkagal/",
    aria: "Visit my Github profile",
    icon: <Github />,
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/in/birkagal/",
    aria: "Visit my Linkedin profile",
    icon: <Linkedin />,
    label: "Linkedin",
  },
  {
    href: "https://drive.google.com/file/d/1tb2hTQ1y5oH6cMHSnkM6jDVlbXtThnth/",
    aria: "Visit Google Drive to view and download my resume",
    icon: <Resume />,
    label: "Resume",
  },
  {
    href: "mailto:birkagal@gmail.com",
    aria: "Send me an email",
    icon: <Email />,
    label: "Email",
  },
];
