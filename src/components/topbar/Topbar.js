import "./topbar.css";
import { FaMobileAlt, FaAt } from "react-icons/fa";

function Topbar({ openMenu, setOpenMenu }) {
  return (
    <header className={`topbar ${openMenu && "active"}`}>
      <div className="topbar-content">
        <div className="left">
          <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <FaMobileAlt className="icon" />
            <span>0554 231 952</span>
          </div>
          <div className="item">
            <FaAt className="icon" />
            <span>rima.kerirem@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
