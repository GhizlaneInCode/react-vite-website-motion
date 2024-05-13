import "./skills.scss";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


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

const Skills = () => {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const animatedVariants = inView ? textVariants.animate : textVariants.initial;

    return (
        <div className="skills">
            <div className="title">
                <h1><span>Our</span> Skills</h1>
                <motion.div className="blurEffect"></motion.div>

            </div>

            <div className="wrapper">

                <motion.div
                    className="imageContainer"
                    variants={textVariants}
                    ref={ref}
                    initial="initial"
                    animate={animatedVariants}
                >
                    <img src="./logos1.png" alt="" />
                </motion.div>

                <motion.div className="content" variants={textVariants}
                 ref={ref}
                    initial="initial"
                    animate={animatedVariants}>

                    <div className="progressContainer">
                        <h4>Machine Learning<small>60%</small></h4>
                        <progress id='p1' value='60' max='100'></progress>
                    </div>
                    <div className="progressContainer">
                        <h4>system modeling<small>75%</small></h4>
                        <progress id='p1' value='75' max='100'></progress>
                    </div>
                    <div className="progressContainer">
                        <h4>database manipulation<small>85%</small></h4>
                        <progress id='p1' value='85' max='100'></progress>
                    </div>
                    <div className="progressContainer">
                        <h4>Front-end Developement<small>90%</small></h4>
                        <progress id='p1' value='90' max='100'></progress>
                    </div>
                    <div className="progressContainer">
                        <h4>Back-end Developement<small>95%</small></h4>
                        <progress id='p1' value='95' max='100'></progress>
                    </div>
                </motion.div>
            </div>
            {/* <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Writer Content Creator Influencer
            </motion.div> */}

        </div>
    );
};

export default Skills;