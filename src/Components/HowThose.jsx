import React from "react";

function HowThose() {
  return (
    <>
      <main className="  md:mx-12 mt-[5rem] md:m-auto m-3 ">
        <section>
          <h1 className="text-white text-center text-[20px]">
            HOW DOES IT WORKS
          </h1>
          <div className="border-[#2D2646] mt-4 w-[90%] md:w-[50%] lg:w-[30%] m-auto text-white border-[1px] rounded-lg flex justify-center gap-x-12 p-[16px] ">
            <div>
              <div className="bg-[#1B1A2E] w-full md:text-[16px] text-[18px]  rounded-lg p-2 border-[#2D2646] border-[1px]">
                Job seeker
              </div>
            </div>
            <div>
              <div className="border-[#2D2646] md:text-[16px]   w-full text-[18px]   border-[1px] p-2 rounded-lg">
                Employee
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HowThose;
