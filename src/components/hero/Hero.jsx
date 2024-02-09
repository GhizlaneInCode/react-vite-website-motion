import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}><span>GHIZLANE ELKARROUMI</span></motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button className="active" variants={textVariants}>
              <a href="#Services">Get Started</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Designer
      </motion.div>
      <div className="iframeContainer">
        {/* <img src="/hero.png" alt="" /> */}
        {/* <img src="/myPic3-removebg-preview (2).png" alt="" /> */}
        <iframe src='https://my.spline.design/daccord-33290d987400c47285f7e451f9e9029b/' width='100%' height='100%'></iframe>
        {/* <iframe class="responsive-iframe" src='https://my.spline.design/daccord-33290d987400c47285f7e451f9e9029b/'></iframe> */}

      </div>
    </div>
  );
};

export default Hero;

