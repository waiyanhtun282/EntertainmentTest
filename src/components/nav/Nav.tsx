import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import Buttton from "../common/button/Buttton";

// for nav

const navLinks = [
  {
    id: 1,
    navLink: "Home",
    path: "/",
  },
  {
    id: 2,
    navLink: "Support",
    path: "/support",
  },
  {
    id: 3,
    navLink: "Your Ticket",
    path: "/ticket",
  },
  {
    id: 4,
    navLink: "SignIn",
    path: "/signin",
  },
];

const Nav = () => {
  const [resNav, setResNav] = useState<boolean>(false);
  return (
    <div className=" z-50 ">
      <header className=" container mx-auto    border-b-2 flex justify-between items-center md:fixed md:top-0 md:left-0 lg:z-50 h-[70px] md:h-[90px]  shadow-sm md:backdrop-blur-sm">
      <Link to={"/"}>
            <h1 className=" text-2xl font-bold">Logo</h1>
          </Link>
        <nav className=" nav-main  ">
          
          {/* for desktop */}
          <div className="  md:flex gap-10   hidden">
            <ul className={`nav-ul`}>
              {navLinks?.map((nav, index) => (
                <li className=" cursor-pointer" key={nav.id + index}>
                  <NavLink to={nav.path}>{nav.navLink}</NavLink>
                </li>
              ))}
            </ul>

            <select
              name=""
              id=""
              className=" border-gray-300 bg-white font-medium"
            >
              <option value="">En</option>
              <option>My</option>
            </select>
          </div>

          {/* for mobile */}
          <Buttton className="md:hidden" >
            <RiMenu3Fill size={20}   onClick={() => setResNav(true)}/>
            {/* <HiOutlineXMark size={20} /> */}
          </Buttton>

          
        </nav>

        {/* for mobil tablet */}
        <div
          className={` h-screen w-full lg:hidden fixed top-0 bottom-0 transition-all duration-200 z-50 ${
            resNav ? "right-0" : "right-[-100%]"
          }`}
        >
          
          <nav className=" absolute top-0 w-full h-screen  bg-gray-800/10 backdrop-blur-sm">
            <ul className=" flex flex-col justify-center items-center gap-[48px] h-[100%] relative">
              {navLinks.map((n, id) => (
                <NavLink
                  to={n.path}
                  className=" text-blac-300"
                  key={id}
                  onClick={() => setResNav(false)}
                >
                  {n.navLink}
                </NavLink>
              ))}
            
              <button className=" absolute top-5 right-5 md:top-10 md:right-10">
                <RiCloseLine
                  className={"text-[25px] md:text-[30px]"}
                  onClick={() => setResNav(false)}
                />
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
