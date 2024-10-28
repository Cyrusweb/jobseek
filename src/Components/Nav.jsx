import React, { useState } from "react";
import logo from "../assets/Link.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function Nav() {
  const [toggle, setToggle] = useState(false);

  const handle = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <>
      <main>
        <nav className=" w-full drop-shadow-sm bg-[#0d0e11] md:bg-[#17191F] right-0 fixed top-0 flex justify-between p-4 items-center">
          <img
            src={logo}
            alt="logo"
            className="md:w-[189.19px] h-[30px] object-contain"
          />
          <div>
            <ul
              className={`md:flex ${
                toggle ? "block" : "hidden"
              } md:relative md:top-0 absolute text-center  top-14 p-2 md:space-y-0 space-y-5 gap-4 md:bg-transparent right-0 left-0 bg-[#0d0e11] text-white md:font-light  font-inter text-[18px]`}
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
            {toggle ? (
              //   <CiMenuFries size={25} className="text-white font-bold" />
              <IoMdClose
                size={25}
                className="text-white font-bold"
                onClick={handle}
              />
            ) : (
              <CiMenuFries size={25} className="text-white font-bold" />
            )}
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
