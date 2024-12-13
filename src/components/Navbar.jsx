import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to="/" className="font-medium text-sm">
        Home
      </NavLink>
      <NavLink to="/all-jobs" className="font-medium text-sm">
        All Jobs
      </NavLink>
      <NavLink to="/applied-jobs" className="font-medium text-sm">
        Applied Jobs
      </NavLink>
      <NavLink to="/my-profile" className="font-medium text-sm">
        My Profile
      </NavLink>
    </>
  );

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <h1 className="text-2xl font-bold">Job Portal</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 flex gap-5">{links}</div>
      </div>
      <div className="navbar-end flex gap-4">
        {!user ? (
          <Link to={'/login'} className="btn btn-info">Login</Link>
        ) : (
          <button onClick={logoutUser} className="btn btn-info">
            Logout
          </button>
        )}
        {!user && (
          <Link to={"/register"} className="btn btn-info">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
