import { Card, MainTitle } from "../../components/modules";
import "./my-projects.css";
import { projectsData } from "../../data/projectsData";
import { forwardRef } from "react";

function MyProjects({ props }, ref) {
  return (
    <section ref={ref} className="my-projects" id="my-projects">
<<<<<<< HEAD
      <MainTitle title="Mes Projets" />
=======
      <MainTitle title="My Projects" />
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
      <div className="projects-container">
        {projectsData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default forwardRef(MyProjects);
