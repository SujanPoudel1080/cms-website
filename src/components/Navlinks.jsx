import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const Navlinks = (isBigSidebar) => {
    const { user, toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            key={link.text}
            className="nav-link"
            onClick={isBigSidebar? null : toggleSidebar }
            end
          >
            <span className="icon">{link.icon}</span> {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;
