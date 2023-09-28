import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import { FormRow } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <div className="form">
        <Link to="/">
          <Logo />
        </Link>
        <h4>Login</h4>

        <FormRow
          type="text"
          name="email"
          className="form-input"
          placeHolder="Enter Email"
        />

        <FormRow
          type="password"
          name="password"
          className="form-input"
          placeHolder="Enter Password"
        />

        <button className="btn btn-block">Login</button>
        <p>
          Not Registered Yet? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default Login;
