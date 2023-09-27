import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          {
            showSidebar ? <FaAlignLeft /> :<GiHamburgerMenu /> 
          }
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">toggle/logout</div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
