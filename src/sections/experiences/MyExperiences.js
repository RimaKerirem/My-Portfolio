import { MainTitle } from "../../components/modules";
import "./experiences.css";
import { FaBuilding } from "react-icons/fa"; // Importation correcte de l'icône
import { forwardRef } from "react";

function Experiences({ props }, ref) {
  return (
    <section ref={ref} className="experiences" id="exp">
      <MainTitle title="Mes Expériences" />
      <div className="exp-container">
        <h1>
          Assistante PDG Chargée des systèmes d’information
        </h1>
        <h3> <FaBuilding className="building" /> EPE TRANSUB SPA &nbsp; &nbsp; / &nbsp; &nbsp; Fév 2024 – Aujourd’hui</h3>

        <ul>
          <li>
            Développement d'applications web complètes à l'aide de HTML, CSS, JavaScript, PHP et MySQL.
          </li>
          <li>
            Développement d'applications desktop complètes à l'aide de VB.NET, Python, MySQL et Access.
          </li>
          <li>
            Utilisation de la méthodologie de développement Agile pour développer des applications logicielles et des bases de données.
          </li>
          <li>
            Collaborer avec les membres de l'équipe pour dépanner et déboguer le code.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default forwardRef(Experiences);