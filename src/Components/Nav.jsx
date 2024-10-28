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
        <nav className=" w-full drop-shadow-sm z-10 bg-[#0d0e11] backdrop-blur-sm left-0 md:bg-[#17191F] right-0 fixed top-0 flex justify-between p-4 items-center">
          <img
            src={logo}
            alt="logo"
            className="md:w-[189.19px] h-[30px] object-contain"
          />
          <div className="">
            <div
              className={`md:flex  ${
                toggle ? "block bmd" : "hidden"
              } md:relative md:top-0 absolute   w-[60%]   z-0   mx-4 rounded-lg mt-3    right-0    top-14 md:bg-transparent  bg-[#ffff] text-white md:font-light    font-inter`}
            >
              <ul className="md:flex md:space-x-[25px]   mb-4  md:text-white  text-[13px]  md:text-[18px]  m-auto justify-center  md:space-y-0 space-y-[8px]">
                <li className=" md:mt-0 mt-4 border-[1px] cool w-[80%] rounded-full pl-4 pr-4 pt-2 pb-2  md:w-auto  m-auto text-center">
                  Jobs
                </li>
                <li className=" md:mt-0  pl-4 pr-4 pt-2 pb-2  border-[1px] cool  px-4 w-[80%] md:w-auto m-auto rounded-full text-center">
                  Projects
                </li>
                <li className=" md:mt-0   border-[1px] cool pl-4 pr-4 pt-2 pb-2   w-[80%] md:w-auto   m-auto px-4 rounded-full text-center">
                  Client
                </li>
                <li className=" md:mt-0  cool     border-pl-4 pl-4 pr-4 pt-2 pb-2 pb-2gray-400 w-[80%] md:w-auto   m-auto  px-4 rounded-full text-center">
                  Chat
                </li>
                <li className=" md:mt-0 md:hidden bg-[#904EE9]  md:pl-0 md:pr-0   border-pl-4 pl-4 pr-4 pt-2 pb-2 pb-2gray-400 w-[80%] md:w-auto   m-auto   rounded-full text-center">
                  Sign up Free
                </li>
              </ul>
            </div>
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
