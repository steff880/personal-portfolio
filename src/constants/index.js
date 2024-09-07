import {
  code,
  team,
  rocket,
  TheDOM,
  MyRecipeBook,
  forkify,
  CozyCottage,
  StefsRecipes,
  BlarneyBunch,
} from "../assets";

const projects = [
  {
    name: "TheDOM",
    description: "A full stack E-commerce website for Web Development courses.",
    image: TheDOM,
    sourceCodeLink: "https://github.com/steff880/MS4-theDOM",
    liveLink: "https://steff880-the-dom.herokuapp.com/",
  },
  {
    name: "MyRecipeBook",
    description:
      "A full stack website where users can perform full CRUD operations and store their favourite recipes.",
    image: MyRecipeBook,
    sourceCodeLink: "https://github.com/steff880/MS3-MyRecipeBook",
    liveLink: "https://ms3-myrecipebook.herokuapp.com/home",
  },
  {
    name: "Forkify",
    description:
      "A fictional website built by following The Complete JavaScript Course 2023: From Zero to Expert!",
    image: forkify,
    sourceCodeLink: "https://github.com/steff880/forkify-js-course-project",
    liveLink: "https://master--forkify-stefan880.netlify.app/",
  },
  {
    name: "CozyCottage",
    description:
      "A interactive frontend project for booking cottages, built with HTML, CSS, and JavaScript.",
    image: CozyCottage,
    sourceCodeLink: "https://github.com/steff880/MS2-project-Cozy-Cottage",
    liveLink: "https://steff880.github.io/MS2-project-Cozy-Cottage/index.html",
  },
  {
    name: "StefsRecipes",
    description:
      "My first project. A frontend website built with HTML and CSS.",
    image: StefsRecipes,
    sourceCodeLink: "https://github.com/steff880/MS1-project-Stefs-Recipes",
    liveLink: "https://steff880.github.io/MS1-project-Stefs-Recipes/",
  },
  {
    name: "TheBlarneyBunch",
    description:
      "This is a website for Hackathon Mar 2021 in Code Institute created by The Blarney Bunch team.",
    image: BlarneyBunch,
    sourceCodeLink: "https://github.com/michaeldijk/team14Hackathon",
    liveLink: "https://michaeldijk.github.io/team14Hackathon/",
  },
];

const testimonials = [
  {
    id: 0,
    quote:
      "I had the pleasure of working with Stefan at Futureproof, where he excelled in full-stack web development. He's a skilled and dedicated professional, always eager to try out the latest technologies. Stefan is easy to work with, demonstrating excellent communication skills and a positive attitude. I highly recommend him for any software development role.",
    name: "Jason Chan",
    title: "Full Stack Developer",
  },
  {
    id: 1,
    quote:
      "Stefan is a dedicated, hard-working and talented professional. He always goes above and beyond to deliver and learn new things. Working with him is a pleasure.",
    name: "Sergi Navaro",
    title: "Software Engineer",
  },
];

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    id: 1,
    title: "Fast Learner",
    icon: rocket,
    text: "With the  ability to quickly grasp new concepts, I am ready to expand my knowledge, and for new challenges. ",
  },

  {
    id: 2,
    title: "Team Player",
    icon: team,
    text: "I value team work and believe that the best way to achieve common goals is through collaboration. ",
  },

  {
    id: 3,
    title: "Clean Code",
    icon: code,
    text: "I always strive to write clean, easy-to-understand, functional, and scalable code while following best practices.",
  },
];

export { navLinks, skills, projects, testimonials };
