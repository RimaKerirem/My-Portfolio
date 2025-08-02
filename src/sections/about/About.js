import { MainTitle } from "../../components/modules";
import "./about.css";
import { FaGraduationCap } from "react-icons/fa";
import { forwardRef } from "react";

function About({ props }, ref) {
  return (
    <section ref={ref} className="about" id="about">
<<<<<<< HEAD
      <MainTitle title="Profil" />
      <p className="text">
        Titulaire d’un Master en
        Mathématiques et Informatique
        Décisionnelle, avec plus d’1 an
        d’expérience en développement
        d’applications web et desktop.
        Passionnée par la création
        d’interfaces utilisateur intuitives
        et engageantes.
      </p>
      <div className="diplomes">
        <h2>Diplômes</h2>
        <div className="item">
          <FaGraduationCap className="cap" />
          <p>Master Mathématiques et Informatique Décisionnelle</p>
        </div>
        <div className="item">
          <FaGraduationCap className="cap" />
          <p>Licence Informatique Académique</p>
        </div>
      </div>
      <a href="/CV.pdf" className="resume" download="CV-KERIREM Rima">
        Télécharger CV
=======
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
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
      </a>
    </section>
  );
}

export default forwardRef(About);
