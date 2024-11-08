import React from "react";

function DisCover() {
  return (
    <>
      <main>
        <article className="text-center mt-10">
          <h1 className="text-purple-500 text-center font-semibold">
            Job Vacancy
          </h1>
          <h1 className="font-medium md:text-[36px] text-[26px] text-center text-white">
            Discover the best job
          </h1>
          <p className="text-[12px] text-white   md:text-[16px]   lg:w-[40%] md:w-[60%] m-auto">
            Start career with the best company in the world, we ensures you to
            get the best job possible.
          </p>

          <div className="border-[#2D2646] mt-4 w-[90%] md:w-[36%] lg:w-[20%] m-auto text-white border-[1px] rounded-lg flex justify-center gap-x-12 p-[16px] ">
            <div>
              <div className="bg-[#1B1A2E] flex gap-1 w-full md:text-[16px] text-[18px]  rounded-lg p-2 border-[#2D2646] border-[1px]">
                <p> Job </p>
                <p>seeker</p>
              </div>
            </div>
            <div>
              <div className="border-[#2D2646] md:text-[16px]   w-full text-[18px]   border-[1px] p-2 rounded-lg">
                Employee
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default DisCover;
