import { MainTitle, SkillBox } from "../../components/modules";
import "./skills.css";
import { skillsData } from "../../data/skillsData";
import { forwardRef } from "react";

function Skills({ props }, ref) {
  return (
    <section ref={ref} className="skills" id="skills">
      <MainTitle title="Mes Compétences" />

      <div className="skills-container">
        {skillsData.map((elt) => (
          <SkillBox key={elt.id} skillBox={elt} />
        ))}
      </div>
    </section>
  );
}

export default forwardRef(Skills);
