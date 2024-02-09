import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <img className="logo" src="./logo-complet-rb.png" alt="" />
        <div className="social">
          <a href="#">
            <img src="./linkedin.png" alt="" />
            <p>LinkedIn</p>
          </a>

          <a href="https://github.com/GhizlaneInCode">
            <img src="./github.png" alt="" />
            <p>Github</p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
