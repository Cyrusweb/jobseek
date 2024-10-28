import React from "react";

function WhatWeDo() {
  return (
    <>
      <main>
        <article className="w-full p-4">
          <div class="marquee-container mb-4">
            <ul class="marquee flex items-center space-x-4">
              <li>Financial Manager</li>
              <li>Project Manager</li>
              <li>Risk Manager</li>
              <li>Quality Manager</li>
              <li>Resource Manager</li>
              <li>Strategic Manager</li>
              <li>Operations Manager</li>
              <li>Human Resource Manager</li>
              <li>Supply Chain Manager</li>
              <li>Time Manager</li>
              <li>Product Manager</li>
            </ul>
          </div>

          {/* second */}
          <div class="marquee-container_2 mb-4">
            <ul class="marquee_2 flex flex-row-reverse items-center space-x-4">
              <li>Data Analyst</li>
              <li>Data Scientist</li>
              <li>Business Intelligence Analyst</li>
              <li>Project Management Software Specialist</li>
              <li>Risk Analysis Software Developer</li>
              <li>Quality Assurance Analyst</li>
              <li>Resource Management Software Engineer</li>
              <li>Strategic Planning Software Analyst</li>
              <li>Operations Research Analyst</li>
              <li>Human Resource Information System (HRIS) Specialist</li>
              <li>Supply Chain Management Software Analyst</li>
            </ul>
          </div>
          <div className=" md:hidden flex justify-center mt-8">
            <button className="bg-white w-[142.36px] rounded-full px-2 py-2 text-[16px]">
              View all
            </button>
          </div>
        </article>
      </main>
    </>
  );
}

export default WhatWeDo;
