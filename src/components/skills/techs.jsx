import "./techs.scss";
import React from "react";
import { motion } from "framer-motion";


const path = "./techIcons/";

// Langages de Programmation
const techs1 = [
    { name: "Java", logo: `${path}java.svg` },
    { name: "JavaScript", logo: `${path}javascript.svg` },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },

    // Frameworks et Bibliothèques
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
    { name: "React/Vite", logo: `${path}react.svg` },
    { name: "Spring Security", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Hibernate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
    { name: "GSAP", logo: `${path}gsap.png` }
];

// Frameworks et Bibliothèques (suite) + autres catégories
const techs2 = [
    { name: "Leaflet", logo: "https://leafletjs.com/docs/images/logo.png" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },

    // Concepts de Développement Logiciel
    { name: "POO", logo: `${path}java.svg` },
    { name: "UML", logo: `${path}UML.svg` }, 
    { name: "Postman", logo: `${path}postman.svg` }, // Postman logo
    { name: "MVC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" }, // MVC: .NET
    { name: "REST API", logo: `${path}rest-api.png` }, // REST API
    { name: "JWT", logo: `${path}Jwt.png` },
    { name: "Microservices", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }, // Docker for microservices
    { name: "Unit Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" }, // Jest for unit testing
    { name: "Scrum Agile", logo: `${path}Agile.png` }, // Scrum logo
    {name:  "VS Code", logo: `${path}vscode.svg` },
    // Bases de Données
    { name: "MySQL", logo: `${path}mysql.svg` },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

    // Contrôle de Version et Conteneurisation
    { name: "Git", logo: `${path}git.svg` },
    { name: "Docker", logo: `${path}docker.svg` },
    { name: "Gitlab", logo: `${path}gitlab.svg` },
    { name: "GitHub", logo: `${path}github.svg` },
]

// Duplicate the array for seamless infinite scroll
const techsLoop1 = [...techs1, ...techs1 ];
const techsLoop2 = [...techs2, ...techs2 ];

const Techs = () => {
    return (
        <div className="tech-container">
            <div className="title">
                <h1><span>My</span> Technologies</h1>
                <motion.div className="blurEffect"></motion.div>

            </div>

            <div className="wrapper">
                <div className="scrolling-list1">
                    {techsLoop1.map((tech, idx) => (
                        <div className="tech-item" key={idx}>
                            <p id="techName">{tech.name}</p>
                            <img src={tech.logo} alt={tech.name} />
                        </div>
                    ))}
                </div>
                <div className="scrolling-list2">
                    {techsLoop2.map((tech, idx) => (
                        <div className="tech-item" key={idx}>
                            <p id="techName">{tech.name}</p>
                            <img src={tech.logo} alt={tech.name} />
                        </div>
                    ))}
                </div>
                <div className="scrolling-list3">
                    {techsLoop1.map((tech, idx) => (
                        <div className="tech-item" key={idx}>
                            <p id="techName">{tech.name}</p>
                            <img src={tech.logo} alt={tech.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Techs;