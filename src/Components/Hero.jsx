import React from "react";

import banner from "../assets/banner (1).svg";
function Hero() {
  return (
    <>
      <main className="mt-[20px] px-4">
        <article className=" md:flex justify-around md:m-[3rem] flex-row-reverse">
          <img
            src={banner}
            alt="banner"
            className="w-[330px] mt-[14px] md:w-[400px] lg:w-[569.89px] px-[30px] pt-[-6px]"
          />
          <section className="">
            <div className="border-[1px] lg:w-[309.58px]   mt-[45.3px] px-[10.2px] justify-center border-[#484848] mx-[40.2] items-center rounded-full w-[309.58px] flex">
              <article className="text-white pl-[21px] mr-[21px] py-[11px] text-[16px] font-[400] leading-[19.2px]">
                The best job seekers
              </article>
              <p className="border-[#484848] border-l-2 pl-[14px] explore">
                Explore
              </p>
            </div>
            <div>
              <p className="  lg:w-[491.39px] lg:text-[52px] lg:font-medium lg:leading-[62.4px] md:text-left mt-[30px]  text-[#FFFFFF] text-[35px] font-medium leading-[49.2px] text-center">
                Find your{" "}
                <span className="text-[#848484]">dream job with jobBoard</span>
              </p>

              <p className="text-[14px] md:text-[18px]  lg:w-[366.72px] font-[300] md:text-left  leading-[27px] text-center mt-[27px] text-white">
                Growing a business means having the right people in your team.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Hero;
