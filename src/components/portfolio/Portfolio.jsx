import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PopUp from "./popUp/PopUp";

const pathMovie = "./portfolioImages/movieAppAssets";
const pathCrm = "./portfolioImages/crmAppAssets";


const items = [
  {
    id: 1,
    title: "AI Image Generator",
    img: "./portfolioImages/aiCap.PNG",
    desc: "AI image generator tool, developed with React/Vite, OpenAI API, and other technologies. Using the power of AI, it seamlessly transforms text into images within seconds, allowing users to easily download the generated images. The app is designed to be adaptable across various devices.",
    url: "https://ai-image-generator-drab-gamma.vercel.app/",
    technologies: ["React", "Vite", "JavaScript", "CSS", "OpenAI API", "NodeJs", "Express"],
    isDemo: true,
  },
  {
    id: 2,
    title: "CRM Application",
    img: `${pathCrm}/crm12.png`,
    desc: "This CRM app, created for internal use within the company's intranet, utilizes Spring Boot and Angular with a robust REST API. The app's design was planned using UML diagrams to ensure clear and effective conception. It supports internationalization (i18n) for multiple languages and employs JWT for secure authentication. The app features a statistics dashboard that highlights the best leads and the agent of the month, alongside various charts for different functionalities. Built using a microservices architecture, it efficiently manages customer data and interactions across multiple departments.",
    url: "",
    technologies: ["SpringBoot", "Angular", "MySQL", "SCSS", "TS", "Rest API" , "JWT", "Microsevices" , "i18n" , "UML"],
    isDemo: false,
    preview: [`${pathCrm}/crm1.png`, `${pathCrm}/crm2.png`, `${pathCrm}/crm3.png`, `${pathCrm}/crm4.png`, `${pathCrm}/crm5.png`, `${pathCrm}/crm6.png`,`${pathCrm}/crm7.png`
      ,`${pathCrm}/crm8.png`,`${pathCrm}/crm9.png`,`${pathCrm}/crm10.png`,`${pathCrm}/crm11.png`,`${pathCrm}/crm12.png`, `${pathCrm}/crm13.png`, `${pathCrm}/crm14.png`,
    `${pathCrm}/crm15.png`, `${pathCrm}/crm16.png`, `${pathCrm}/crm17.png`, `${pathCrm}/crm18.png`, `${pathCrm}/crm19.png`]
  }, 
  {
    id: 3,
    title: "X - O Game",
    img: "./portfolioImages/tictacCap.PNG",
    desc: "Developed an interactive and responsive Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game offers a unique player-VS-robot experience fitting all screen sizes.",
    url: "https://ghizlaneincode.github.io/ticTacToe_Game/",
    technologies: ["JavaScript", "CSS", "HTML"],
    isDemo: true,

  },
  {
    id: 4,
    title: "Movie App",
    img: `${pathMovie}/movieApp.png`,
    desc: "Built a dynamic movie app featuring extensive image galleries, detailed movie descriptions, categories, actor lists, and rankings. The user-friendly interface allows for effortless movie management, including updating, deleting (after confirmation), and adding new entries to enhance the user's cinematic experience ,the app is adaptable to multiple devices.",
    url: "",
    technologies: ["SpringBoot", "Angular", "MySQL", "SCSS", "TS", "Pagination", "Rest API"],
    isDemo: false,
    preview: [`${pathMovie}/movieApp.png`, `${pathMovie}/mv2.PNG`, `${pathMovie}/mv3.PNG`, `${pathMovie}/mv4.PNG`, `${pathMovie}/mv5.PNG`, `${pathMovie}/mv6.PNG`,`${pathMovie}/mv7.PNG`
      ,`${pathMovie}/mv8.PNG`,`${pathMovie}/mv9.PNG`,`${pathMovie}/mv10.PNG`,`${pathMovie}/mv11.PNG`,`${pathMovie}/mv12.PNG`]
  }, {
    id: 5,
    title: "Travel Advisor",
    img: "./portfolioImages/travel.png",
    desc: "This React-based app, utilizes an interactive Leaflet map and Leaflet-Control-Geocoder plugin, alongside a maps data API to gather detailed information, based on the latitude and longitude of the user's search, the app serves to explore nearby hotels and restaurants, displayed as cards with detailed information as rating, reviews number, opening times, location on Google Maps, and official website link for further exploration. Users can filter places by rating and search worldwide to explore more surroundings. It's designed to be responsive, ensuring seamless user experience across different devices.",
    url: "https://react-vite-travel-advisor-o7ed.vercel.app/",
    technologies: ["React", "Vite", "JavaScript", "CSS", "Leaflet", "MAPs API", "leaflet-control-geocoder", "GSAP"],
    isDemo: true,
  }, {
    id: "item-4",
    title: "Emergency Pharmacie",
    img: "./portfolioImages/pharmacies.png",
    desc: "An Android mobile app, build in Java using Android Studio, help users to easily locate today's emergency pharmacies. Utilizing the JSoup library for web scraping, the app provides up-to-date information on nearby pharmacies based on the current date. Users can easily find the nearest emergency pharmacies, ensuring timely access to essential medications during urgent situations.",
    url: "https://github.com/GhizlaneInCode/android-emergency-pharmacies",
    technologies: ["Java", "Android Studio", "Scrapping", "Jsoup"],
    isDemo: true,
  },
];

const Single = ({ item }) => {

  const [showSlider, setShowSlider] = useState(false);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };


  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  useEffect(() => {
    if (showSlider) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSlider]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div id={item.id} className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <ul className="technologies">
              {item.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <p>{item.desc}</p>
            {item.isDemo ? <button><a target="_blank" rel="noopener noreferrer" href={item.url}>See Demo</a></button>
              : <button onClick={toggleSlider}>Explore Gallery</button>
            }
          </motion.div>

        </div>
        {showSlider && <PopUp onClose={toggleSlider} images={item.preview} />}

      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1><span> Featured </span> Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
