import { NavLink } from "react-router-dom";
import NavLogo from "../layout/Logo/NavLogo";
import "./Signin.css";
import { useAuth } from "../../context/authContext";

const Signin = () => {
  const { formData, setFormData } = useAuth();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="signin">
      <NavLogo />
      <hr />
      <form className="form-container" onSubmit={handleChange}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Re-enter Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Re-enter Password"
            onChange={handleChange}
          />
        </div>

        <div className="button-section">
          <button type="submit" className="form-redirect-btn">
            <NavLink to="/home">Submit</NavLink>
          </button>
          <button type="submit" className="form-login-btn">
            <NavLink to="/login">Already had an account?</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
