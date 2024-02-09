import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { SlScreenDesktop, SlLayers, SlScreenSmartphone, SlScreenTablet, SlBadge, SlEarphonesAlt, } from "react-icons/sl";

const MyIcon = () => {
  const ref = useRef();
  return (
    <svg className="icon" ref={ref}>
      <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#251cc9" offset="0%" />
        <stop stopColor="#9b19cf" offset="44%" />
        <stop stopColor="#f322be" offset="70%" />
        <stop stopColor="#13deee" offset="100%" />
      </linearGradient>
      {/* Include your icon paths or shapes here */}
    </svg>
  );
};



const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >

      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "rgb(53 35 96)" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(53 35 96)" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <SlLayers className="iconStyle" />
          <h2>Developement Web</h2>
          <p>
            we create innovative websites and applications that fit your needs using the latest technologies and industry best practices
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <SlScreenDesktop className="iconStyle" />
          <h2>Web Design</h2>
          <p>
            Enhance your online image with attractive, user-friendly designs that leave a positive impression on your visitors
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <SlScreenSmartphone className="iconStyle" />
          <h2>Fully Responsive</h2>
          <p>
            We ensure your website works seamlessly on all devices, specializing in designs that adapt to all screens
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <SlBadge className="iconStyle" />
          <h2>Clean Code</h2>
          <p>
            We guarantee the lasting success of your project with carefully written, easy-to-maintain code that meets the highest standards
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
      <MyIcon />

    </motion.div>

  );
};

export default Services;
