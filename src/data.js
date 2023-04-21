import demo from "./images/demo.gif";
import eshop from "./images/eshop.gif";
import newslive from "./images/newslive2.gif";
import qrcode from "./images/qrcode2.gif";

export const projects = [
  {
    id: "1",
    title: "QR Code Generator",
    subtitle: "React Based Project",
    description:
      "This web application  helps to generate QR Code for your buisness or application. It includes creating QR Code for  Contact, instagram url, Site URL, Wifi, and many more",
    image: qrcode,
    link: "https://dwr-qrcode-react.netlify.app/",
    gihub:"https://github.com/ranjansharma1/react-qrcode-generator"
  },
  {
    id: "2",
    title: "My PortFolio",
    subtitle: "React and Tailwindcss",
    description:
      "This application is a simple react based applicationwhich uses tailwindcss for styling and make UI more attractive.",
    image: demo,
    link: "#",
    gihub:"https://github.com/ranjansharma1/developwithranjan"
  },

  {
    id: "3",
    title: "E-commerce",
    subtitle: "Java Full Stack",
    description:
      "This e-commerce website offers users a seamless online buying experience. Customers can browse through a variety of products, and add them to their shopping carts.",
    image: eshop,
    link: "#",
    gihub:"https://github.com/ranjansharma1/Capstone-ShopForHome",
    skills: "springboot, Angular, Matarial UI, MYSQL",
  },
  {
    id: "4",
    title: "World Live News",
    subtitle: "React-Based Project",
    description:
      "This project will show the live news all over the world in different catagories. User can see the live news",
    image: newslive,
    link: "#",
    skills: "HTMl, CSS, JavaScript, Bootstrap 5, React",
    gihub:"https://github.com/ranjansharma1/News-App-Live-Project"
  },
];

export const skills = [
  "JFD",
  "JS",
  "HTMl",
  "SprinBoot",
  "Microservices",
  "Cloud",
];
