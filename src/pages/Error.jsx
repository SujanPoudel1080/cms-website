import { Link, useLocation, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  const routePath = useLocation();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page Not Found</h3>
          <p>We cannot seem to find the page you are looking for "<b>{routePath.pathname}</b>". Please make sure you are trying to reach a page that actually exists.</p>
          <Link to="/dashboard">go back home</Link>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h3>Something Went Wrong</h3>
      </Wrapper>
    );
  }
};

export default Error;
