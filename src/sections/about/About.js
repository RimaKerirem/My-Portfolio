import { MainTitle } from "../../components/modules";
import "./about.css";
import { FaGraduationCap } from "react-icons/fa";
import { forwardRef } from "react";

function About({ props }, ref) {
  return (
    <section ref={ref} className="about" id="about">
      <MainTitle title="About Me" />
      <p className="text">
        I graduated with a master's degree in Mathematics and Business
        Intelligence. Interested in web development.
      </p>
      <div className="diplomes">
        <h2>Diplomas</h2>
        <div className="item">
          <FaGraduationCap className="cap" />
          <p>Master's in Mathematics and Business Intelligence</p>
        </div>
        <div className="item">
          <FaGraduationCap className="cap" />
          <p>Academic Computer License</p>
        </div>
      </div>
      <a href="/resume.pdf" className="resume" download="Resume">
        Download Resume
      </a>
    </section>
  );
}

export default forwardRef(About);
