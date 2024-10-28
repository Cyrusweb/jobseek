import React from "react";
import ListLeft from "./Json/ListLeft.json";

function WhatWeDo() {
  return (
    <>
      <main>
        <article className="w-full p-4">
          {/* First Marquee - Display first 15 items */}
          <div className="marquee-container mb-4 left">
            <ul className="marquee flex items-center space-x-4">
              {ListLeft.slice(0, 15).map((job) => (
                <li key={job.id}>{job.title}</li>
              ))}
            </ul>
          </div>

          {/* Second Marquee - Display next 15 items */}
          <div className="marquee-container_2 mb-4">
            <ul className="marquee_2 flex flex-row-reverse items-center space-x-4">
              {ListLeft.slice(15, 30).map((job) => (
                <li key={job.id}>{job.title}</li>
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
