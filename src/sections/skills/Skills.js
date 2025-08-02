import { MainTitle, SkillBox } from "../../components/modules";
import "./skills.css";
import { skillsData } from "../../data/skillsData";
import { forwardRef } from "react";

function Skills({ props }, ref) {
  return (
    <section ref={ref} className="skills" id="skills">
<<<<<<< HEAD
      <MainTitle title="Mes Compétences" />
=======
      <MainTitle title="My Skills" />
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
      <div className="skills-container">
        {skillsData.map((elt) => (
          <SkillBox key={elt.id} skillBox={elt} />
        ))}
      </div>
    </section>
  );
}

export default forwardRef(Skills);
