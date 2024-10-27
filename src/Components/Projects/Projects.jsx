import { useState, useEffect } from "react";
import Logo from "../Navbar/avatar.png";
import "./Projects.scss";

function Projects() {
  const [randomProjects, setRandomProjects] = useState([]);
  const projetcsData = [
    {
      title: "M.Samy Dashboard",
      desc: " Elzero Dashboard Project Design And Programming And Hosting",
      img: "",
      skills: ["Programming", "Design", "Hosting", "Marketing"],
      progress: 60,
      price: 2500,
      date: "15/10/2024",
    },
    {
      title: "Academy Portal",
      desc: "Academy Portal Project Design And Programming",
      img: "",
      skills: ["Programming", "Design"],
      progress: 80,
      price: 1800,
      date: "10/02/2024",
    },
    {
      title: "Chatting Application",
      desc: "Chatting Application Project Design",
      img: "",
      skills: ["Design"],
      progress: 100,
      price: 950,
      date: "05/06/2024",
    },
  ];
  useEffect(() => {
    let data = [];
    for (let i = 0; i < 3; i++) {
      projetcsData.map(() => {
        data.push(
          projetcsData[Math.floor(Math.random() * projetcsData.length)],
        );
      });
    }
    setRandomProjects(data);
  }, []);
  return (
    <div className="projects-container">
      <div className="projects">
        {randomProjects.map((project) => {
          return (
            <div className="project">
              <div className="project-meta-deta">
                <div className="title">{project.title}</div>
                <div className="date">
                  <small>{project.date}</small>
                </div>
              </div>
              <div className="description-project">{project.desc}</div>
              <div className="img-project">
                <img src={Logo} />
                <img src={Logo} />
                <img src={Logo} />
              </div>
              <div className="line"></div>
              <ul className="skills">
                {project.skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
              <div className="line"></div>
              <div className="footer-project">
                <div className="progress">
                  <span
                    className={`progress-${project.progress} progress-span`}
                  ></span>
                </div>
                <div className="price">{`$${project.price}`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

