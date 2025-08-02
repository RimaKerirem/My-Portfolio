import "./skill-box.css";
import { FaCheckCircle } from "react-icons/fa";

function SkillsBox({ skillBox }) {
  return (
    <div className="skills-box">
      <div className="title">
        <h4>{skillBox.title}</h4>
      </div>
      <div className="item">
        {skillBox.skills.map((skill, index) => (
          <div className="skill" key={index}>
            <FaCheckCircle className="check" />
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsBox;
