// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mahima",
  middleName: "",
  lastName: "Chhagani",
  message: " Passionate about changing the world with AI.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mahima5598",
    },
    {
      image: "fa-kaggle",
      url: " https://www.kaggle.com/mahima5598",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mahima-chhagani/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/mahimachhagani.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/1ENcPk6h3tHndd7FE6NGpvYOwtCNRnO30nRzip9yZb3o/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mahimachhagani.jpg"),
  imageSize: 340,
  message:
    "Hello, I am a Machine Learning Engineer. I have completed my Bachelors of Technology in Computer Science and have also studied Business. I love solving problems especially if they are related to Machine Learning. And I hope you have gotten to know me better and enjoy my projects.",
  resume: "https://docs.google.com/document/d/1ENcPk6h3tHndd7FE6NGpvYOwtCNRnO30nRzip9yZb3o/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mahima5598", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
// const leadership = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images: [
//     { 
//       img: require("../editable-stuff/mahimachhagani.jpg"), 
//       label: "First slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//     { 
//       img: require("../editable-stuff/mahimachhagani.jpg"), 
//       label: "Second slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//   ],
//   imageSize: {
//     width:"615",
//     height:"450"
//   }
// };

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Machine Learning", value: 85 },
    { name: "Cloud Computing", value: 65 },
    { name: "JavaScript", value: 65 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 90 },
    { name: "Microsoft Office tools", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 75 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 75 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Data Science or AI/ML opportunities! If you need my help, feel free to email me at",
  email: "chhaganimahima@gmail.com",
};

// const experiences = {
//   show: false,
//   heading: "Experiences",
//   data: [
//     {
//       role: 'Software Engineer',// Here Add Company Name
//       companylogo: require('../assets/img/dell.png'),
//       date: 'June 2018 – Present',
//     },
//     {
//       role: 'Front-End Developer',
//       companylogo: require('../assets/img/boeing.png'),
//       date: 'May 2017 – May 2018',
//     },
//   ]
// }

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch};
