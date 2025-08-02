import "./sidebar-list.css";

function SidebarList({ id, title, active, handleClick }) {
  return (
    <li className="sidebar-list" onClick={handleClick}>
      <a href={id} className={active ? "link active" : "link"}>
        {title}
      </a>
    </li>
  );
}

export default SidebarList;
