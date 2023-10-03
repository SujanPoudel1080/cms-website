import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import { FormRow } from "../components";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Link to="/">
          <Logo />
        </Link>
        <h4>Register New User</h4>
        <FormRow
          type="text"
          name="firstName"
          className="form-input"
          placeHolder="Enter First Name"
        />
        <FormRow
          type="text"
          name="lastName"
          className="form-input"
          placeHolder="Enter Last Name"
        />
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
        <FormRow
          type="password"
          name="confirmPassword"
          className="form-input"
          placeHolder="Confirm Password"
        />

        <button className="btn btn-block">Register</button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
