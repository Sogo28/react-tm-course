import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-black text-white p-2 rounded-lg "
      : "text-white p-2 rounded-lg hover:bg-black";
  return (
    <>
      <nav className="bg-indigo-600 flex flex-row justify-between px-12 sm:px-24 border-b-2">
        <div className="flex justify-center items-center gap-4">
          <img src={Logo} alt="react-logo" className="h-10 w-auto" />
          <span className="text-2xl hidden sm:block text-white font-bold">
            React Jobs
          </span>
        </div>
        <div className="flex flex-row gap-5 text-white text-xl w-fit py-5">
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
          <NavLink to="/jobs" className={activeLink}>
            Jobs
          </NavLink>
          <NavLink to="/jobs/add" className={activeLink}>
            Add job
          </NavLink>
        </div>
      </nav>
    </>
  );
}
