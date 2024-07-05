import { NavLink } from "react-router-dom";
import NavLogo from "../layout/Logo/NavLogo";
import { useAuth } from '../../context/authContext';
import "./Login.css";

const Login = () => {
  const { setCurrentUser } = useAuth(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    setCurrentUser({ id: 1, email: 'admin@admin.com', password: '123' });
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
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
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
