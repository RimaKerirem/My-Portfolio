import { SidebarList } from "../modules";
import "./sidebar.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Sidebar({ openMenu, setOpenMenu, selected }) {
  const list = [
    { id: "#about", title: "About Me" },
    { id: "#skills", title: "My Skills" },
    { id: "#my-projects", title: "My Projects" },
    { id: "#contact", title: "Contact Me" },
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
