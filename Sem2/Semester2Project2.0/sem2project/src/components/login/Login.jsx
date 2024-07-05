import { NavLink } from "react-router-dom";
import NavLogo from "../layout/Logo/NavLogo";
import { useAuth } from '../../context/authContext';
import "./Login.css";

const Login = () => {
  const { setCurrentUser, formData, setFormData } = useAuth();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate successful login
    setCurrentUser({ id: 1, email: formData.email }); // Mock user data
  };

  return (
    <div className="signin">
      <NavLogo />
      <hr />
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="button-section">
          <button type="submit" className="form-redirect-btn">
            <NavLink to="/home">Submit</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
