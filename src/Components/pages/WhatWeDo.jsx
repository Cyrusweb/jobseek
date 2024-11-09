// WhatWeDo.js
import React from "react";
import ListLeft from "../Json/ListLeft.json";

function WhatWeDo() {
  console.log(ListLeft.length);
  return (
    <>
      <main>
        <article className="w-full p-4">
          {/* First Marquee */}
          <div className="marquee-container mb-4 left">
            <ul className="marquee flex items-center space-x-4">
              {ListLeft.slice(0, 25).map((job) => (
                <li key={job.id} className="pb-2">
                  <a href={`#job-${job.id}`} className="text-white">
                    {job.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Marquee - */}
          <div className="marquee-container_2 mb-4 px-2">
            <ul className="marquee_2 flex flex-row-reverse items-center space-x-4">
              {ListLeft.slice(25, 50).map((job) => (
                <li key={job.id}>
                  <a href={`#job-${job.id}`} className="text-white ">
                    {job.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden flex justify-center mt-8">
            <button className="bg-white w-[142.36px] rounded-full px-2 py-2 text-[13px]">
              View all
            </button>
          </div>
        </article>
      </main>
    </>
  );
}

export default WhatWeDo;
