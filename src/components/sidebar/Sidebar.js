import { SidebarList } from "../modules";
import "./sidebar.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Sidebar({ openMenu, setOpenMenu, selected }) {
  const list = [
    { id: "#about", title: "Profil" },
    { id: "#exp", title: "Mes Expériences" },
    { id: "#skills", title: "Mes Compétences" },
    { id: "#my-projects", title: "Mes Projets" },
    { id: "#contact", title: "Me Contacter" },
  ];

  return (
    <div className={`sidebar ${openMenu && "active"}`}>
      <h1 className="name">Rima KERIREM</h1>
      <ul className="nav-items">
        {list.map((li) => (
          <SidebarList
            key={li.id}
            id={li.id}
            title={li.title}
            handleClick={() => {
              setOpenMenu(false);
            }}
            active={selected === li.id}
          />
        ))}
      </ul>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/rima-kerirem/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/RimaKerirem"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
