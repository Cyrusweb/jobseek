import React, { useState } from "react";
import logo from "../assets/Link.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

function Nav() {
  const [toggle, setToggle] = useState(false);

  const handle = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <>
      <main>
        <nav className="bg-[#17191F] w-full drop-shadow-sm flex justify-between md:justify-around p-4 items-center">
          <img
            src={logo}
            alt="logo"
            className="md:w-[189.19px] h-[30px] object-contain"
          />
          <div>
            <ul
              className={`md:flex ${
                toggle ? "hidden" : ""
              } md:relative md:top-0 absolute text-center top-14 p-2 md:space-y-0 space-y-5 gap-4 md:bg-transparent right-0 left-0 bg-[#17191F] text-white font-inter text-[18px]`}
            >
              <li className="font-inter">Jobs</li>
              <li>Projects</li>
              <li>Client</li>
              <li>Chat</li>
              <li className="md:hidden block">
                <button className="vl_me">
                  <span className="inner">Sign up Free</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="md:hidden" onClick={handle}>
            <CiMenuFries size={25} className="text-white font-bold" />
          </div>
          <div className="md:flex items-center gap-4 hidden">
            <div>
              <IoMdNotificationsOutline className="text-white" />
            </div>
            <button className="vl">
              <span className="inner">Sign up</span>
            </button>
          </div>
        </nav>
      </main>
    </>
  );
}

export default Nav;
