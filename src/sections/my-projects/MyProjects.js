import { Card, MainTitle } from "../../components/modules";
import "./my-projects.css";
import { projectsData } from "../../data/projectsData";
import { forwardRef } from "react";

function MyProjects({ props }, ref) {
  return (
    <section ref={ref} className="my-projects" id="my-projects">
      <MainTitle title="Mes Projets" />
      <div className="projects-container">
        {projectsData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default forwardRef(MyProjects);
