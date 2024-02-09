import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AI Image Generator",
    img: "portfolioImages/aiCap.PNG",
    desc: "AI image generator tool, developed with React/Vite, OpenAI API, and other technologies. It transforms text into images within seconds, allowing users to easily download the generated images. The app is designed to be adaptable across various devices.",
    url: "https://ai-image-generator-drab-gamma.vercel.app/",
    technologies: ["React", "Vite", "JavaScript", "CSS", "OpenAI API", "NodeJs", "Express"],
  },
  {
    id: 2,
    title: "X - O Game",
    img: "portfolioImages/tictacCap.PNG",
    desc: "Developed an interactive and responsive Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game offers a unique player-VS-robot experience fitting all screen sizes.",
    url: "https://ghizlaneincode.github.io/ticTacToe_Game/",
    technologies: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: 3,
    title: "Movie App",
    img: "portfolioImages/movieApp.png",
    desc: "Built a dynamic movie app featuring extensive image galleries, detailed movie descriptions, categories, actor lists, and rankings. The user-friendly interface allows for effortless movie management, including updating, deleting (after confirmation), and adding new entries to enhance the user's cinematic experience ,the app is adaptable to multiple devices.",
    url: "",
    technologies: ["SpringBoot", "Angular", "MySQL", "SCSS", "TS", "Pagination"],
  },
  {
    id: "item-4",
    title: "Emergency Pharmacie",
    img: "portfolioImages/pharmacies.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    url: "https://github.com/GhizlaneInCode/android-emergency-pharmacies",
    technologies: ["Java", "Android Studio", "Scrapping"],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
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
            <button><a target="_blank" rel="noopener noreferrer" href={item.url}>See Demo</a></button>
          </motion.div>
        </div>
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
