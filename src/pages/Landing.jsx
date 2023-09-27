import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

// const StyledBtn = styled.button`
//   margin: 5px;
//   padding: 3px;
//   font-size: 1.5rem;
//   border-radius: 4px;
//   background: red;
//   color: white;
// `;

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="/">
          <Logo />
        </Link>
      </nav>
      <div className="container-page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            laboriosam, incidunt harum debitis deserunt corrupti repellendus
            maxime quae exercitationem neque quisquam! Ea placeat amet ipsa qui.
            Sint nesciunt corporis neque.
          </p>
          <Link to="/register" className="btn">
            Register User
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
