import Wrapper from "../assets/wrappers/SmallSidebar";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import { useState } from "react";
import links from "../utils/links";
const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  const [isOn, setIsOn] = useState("false");
  const data = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
            <div className="nav-links">
              {links.map((link) => {
                return (
                  <NavLink to={link.path} key={link.text} className="nav-link">
                    <span className="icon">{link.icon}</span> {link.text}
                  </NavLink>
                );
              })}
            </div>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
