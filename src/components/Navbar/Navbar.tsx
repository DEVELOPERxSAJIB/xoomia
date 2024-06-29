import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faBars } from "@fortawesome/free-solid-svg-icons";
import headerbg from "../../assets/images/header-bg.png";
import { NavLink, Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav
        style={{
          backgroundImage: `url(${headerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100%",
        }}
        className="min-w-screen h-[52px] border-b border-b-slate-100 flex justify-between pl-2 py-1 z-0"
      >
        <Link to="/">
          <img
            src={logo}
            className="h-[48px] max-sm:w-[80%] max-md:w-[80%] max-sm:h-auto max-md:h-auto"
            alt="logo"
          />
        </Link>
        {/* deckstop nav  */}
        <div className="menu relative z-10 flex max-lg:hidden max-sm:hidden justify-between items-center">
          <ul className="flex gap-2 h-full items-center pr-5">
            <li className="h-full flex items-center">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/agency-dashboard"
              >
                Main
              </NavLink>
            </li>
            <li className="h-full flex items-center">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/agency-staff"
              >
                System Users
              </NavLink>
            </li>
            <li className="h-full flex items-center">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/agency-individual"
              >
                Individuals
              </NavLink>
            </li>
            <li className="h-full flex items-center">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/calendar"
              >
                Calendar
              </NavLink>
            </li>
            <li className="h-full flex items-center">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/mail-box/inbox"
              >
                Message Center
              </NavLink>
            </li>
            <li className="h-full flex items-center">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] flex items-center gap-1"
                to="/notification"
              >
                Notification{" "}
                <span className="w-[18px] text-[12px] h-[18px] bg-red-500 rounded-full text-white flex justify-center items-center">
                  0
                </span>
              </NavLink>
            </li>
            <li className="h-full flex items-center mr-5">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] flex items-center gap-1"
                to="/incident-reportlog"
              >
                Incident Report Log
                <span className="w-[18px]  text-[12px] h-[18px] bg-red-500 rounded-full text-white flex justify-center items-center">
                  0
                </span>
              </NavLink>
            </li>
            <li className="h-full flex items-center">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] bg-[#779e03] transition-all duration-500 delay-150 ease-in-out text-white rounded-[5px] inline-block"
                to="/help-support"
              >
                Help
              </NavLink>
            </li>
          </ul>
        </div>
        {/* mobile nav  */}
        <div className="hidden max-sm:flex max-lg:flex items-center pr-5 h-full max-sm:gap-x-5 max-lg:gap-x-5 ">
          <button className="bg-red-500 p-1 text-white rounded-[5px]">
            <FontAwesomeIcon icon={faCogs} size="lg" />
          </button>
          <button
            onClick={() => setMenu(!menu)}
            className="bg-red-500 p-1 text-white rounded-[5px]"
          >
            <AlignJustify />
          </button>
        </div>
      </nav>
      {menu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`menu ${
            menu ? "visible" : "hidden"
          }  max-md:block max-sm:block py-5 z-10 bg-white left-0 transition-all delay-150  duration-500 ease-in-out`}
        >
          <ul className="flex h- gap-2 flex-col items-start ">
            <li className="h-full flex items-center w-full">
              <NavLink
                className="text-[14px] leading-[20px] w-full capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/agency-dashboard"
              >
                Main
              </NavLink>
            </li>
            <li className="h-full flex items-center w-full">
              <NavLink
                className="text-[14px] leading-[20px] w-full capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/agency-staff"
              >
                System Users
              </NavLink>
            </li>
            <li className="h-full flex items-center w-full">
              <NavLink
                className="text-[14px] leading-[20px] w-full capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/agency-individual"
              >
                Individuals
              </NavLink>
            </li>
            <li className="h-full flex items-center w-full">
              <NavLink
                className="text-[14px] leading-[20px] w-full capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/calendar"
              >
                Calendar
              </NavLink>
            </li>
            <li className="h-full flex items-center w-full">
              <NavLink
                className="text-[14px] leading-[20px] w-full capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] inline-block"
                to="/mail-box/inbox"
              >
                Message Center
              </NavLink>
            </li>
            <li className="h-full flex items-center w-full">
              <NavLink
                className="text-[14px] leading-[20px] w-full capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] flex items-center gap-1"
                to="/notification"
              >
                Notification{" "}
                <span className="w-[18px] h-[18px] bg-red-500 rounded-full text-white flex justify-center items-center">
                  0
                </span>
              </NavLink>
            </li>
            <li className="h-full flex items-center mr-5">
              <NavLink
                className="text-[14px] leading-[20px] w-full capitalize  px-[15px] py-[5px] hover:bg-sky-500 transition-all duration-500 delay-150 ease-in-out hover:text-white rounded-[5px] flex items-center gap-1"
                to="/incident-reportlog"
              >
                Incident Report Log
                <span className="w-[18px] h-[18px] bg-red-500 rounded-full text-white flex justify-center items-center">
                  0
                </span>
              </NavLink>
            </li>
            <li className="h-full flex items-center pl-5">
              <NavLink
                className="text-[14px] leading-[20px] capitalize  px-[15px] py-[5px] bg-[#779e03] transition-all duration-500 delay-150 ease-in-out  text-white rounded-[5px] inline-block"
                to="/help-support"
              >
                Help
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
