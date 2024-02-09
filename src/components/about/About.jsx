import "./about.scss";
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

const About = () => {
    return (
        <div className="about">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className="title">
                        <motion.div className="blurEffect"></motion.div>
                        <h1><span>About</span> me</h1>

                    </div>
                    {/* <motion.h2 variants={textVariants}><span>GHIZLANE ELKARROUMI</span></motion.h2> */}
                    <motion.div variants={textVariants}>
                        <motion.h2 variants={textVariants}>
                            Hi there! I'm Ghizlane ElKarroumi a <span>full-stack developer and UI designer</span>
                        </motion.h2>
                        <motion.p>
                            ✨As a passionate woman in the tech industry, I love turning code into visually stunning and functional digital experiences.
                        </motion.p>
                        <motion.p>
                            ✨With expertise in both front-end and back-end technologies,I craft elegant interfaces and build robust systems.
                        </motion.p>
                        <motion.p>
                            ✨ I'm driven by problem-solving, always exploring the latest tech trends.
                        </motion.p>
                        <motion.p>
                            ✨Let's collaborate and transform your ideas into exceptional digital experiences. Whether it's a web application, a user interface, or a full-stack project, I'm here to make it happen.
                        </motion.p>

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
                Writer Content Creator Influencer
            </motion.div>
            <div className="imageContainer">
                {/* <img src="/hero.png" alt="" /> */}
                <img src="./myPic3-removebg-preview (2).png" alt="" />
            </div>
        </div>
    );
};

export default About;