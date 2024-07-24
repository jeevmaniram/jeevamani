// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/Imagemodified.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import reactNavtive from "./assets/react-native.png";
import typeScript from "./assets/techstack/Typescript.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Ram mohan",
  img: profile,
  tagline: "React Native Mobile Developer",
  about: `I am a dedicated and innovative React Native mobile developer with 4 years of hands-on experience in building high-performance mobile applications. My expertise lies in crafting seamless user experiences and delivering robust, scalable, and efficient code for both iOS and Android platforms.`,
  exp: "4 Years of Experience ",
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "React Native Mobile Developer",
    Company: `Ascent technologies private limited`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "15 November 2023 - Till Now",
  },
  {
    Position: "React Native Mobile Developer",
    Company: `Panamax Infotech Ltd `,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "15 Sep 2022 - 10 November 2023",
  },
  {
    Position: "Software Engineer - Developement ",
    Company: `Girmiti Software Pvt Limited`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: " 1 September-2020  - 31 August 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Electrical & Electronics  Engineering",
    Company: `Paladugu Parvathi Devi College Of Engineering`,
    Location: "Vijayawada",
    Type: "Full Time",
    Duration: "2014 - 2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  reactNative: reactNavtive,
  typeScript: typeScript,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "MStoHRM",
    image: projectImage6,
    description: ` MStoHRM is mobile Application for Access your personal information anytime, anywhere.
Mark attendance using geo-tagging and geofencing features
Apply for leaves, view leave balances, and track leave approval status in real-time.
Check your payslips and other payroll-related information securely.
Manage your team efficiently on the go. Approve leave requests and other employee submissions promptly
View team schedules, monitor attendance and track time-off trends effortlessly.`,
    techstack: "HTML/CSS, JavaScript,React Native, Redux, Type script.",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "IMDR(Input Module Demo Readiness)",
    image: projectImage5,
    description: `IMDR is web appliation for  processing the payroll for compaines. With appplication
 we can process the Employess salary's and Tax ,and we can generate the Payslips and FORM 16.This Application offers accurate time and attendance calculations, country-specific compliance, and a user-friendly transition kit for seamless system migration, ensuring precision and compliance in your payroll management`,
    techstack: "HTML/CSS,Bootstrap, JavaScript, React Js , Type script.",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "ANY PAY",
    image: projectImage2,
    description: `Any pay is a mobile appliation with this appliation we can perform transactions
and create Cilents and provide the different Flavours according to customer requirements.
Through CMS we can handle the UI and CMS will load the json , according to JSON we developed the UI.`,
    techstack:
      "HTML/CSS, JavaScript,React Native, Redux, Type script,CMS(Content management system)",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "SVL (Suprme Ventures PVT Limited)",
    image: projectImage3,
    description: `SVL is a mobile appliation with this appliation we can perform transactions
and create Cilents and provide the different Flavours according to customer requirements.
Through CMS we can handle the UI and CMS will load the json , according to JSON we developed the UI.`,
    techstack:
      "HTML/CSS, JavaScript,React Native, Redux, Type script,CMS(Content management system)",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "City Bank",
    image: projectImage4,
    description: `City bank is mobile apllication for Onboarding the Customer and open new Account with this mobile appliation,
 In this appliation we provided feature like Customer KYC throgh with this no need to go bank ,
 throgh this app we can do KYC. In this app we upgrade the all packages according to requirements.`,
    techstack:
      "HTML/CSS, JavaScript,React Native, Redux, Type script,CMS(Content management system)",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "BYOD (Bring Your Own Device)",
    image: projectImage1,
    description: `Byod is mobile application , With this application through bluetooth connection
we can connect a payment device(Verifone device) and perform transactions like Sale , Refund , Void, Reversal.
This Payment device will supports Insert and Tap and Conatctless Transactions.
Once transaction is done we can send transaction receipt to our mails .`,
    techstack: "HTML/CSS, JavaScript,React Native, Redux, Type script.",
  },
];

export const contactDetails = {
  email: "ram.j7298@gmail.com",
  phone: "+91 9959-0529-96 ",
};
