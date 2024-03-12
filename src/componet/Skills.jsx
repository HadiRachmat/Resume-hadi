import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "/src/App.css/";

function Skills() {
  // AOS.init();
  return (
    <>
      <div id="skill-section" className=" my-20 mx-auto">
        <h1
          className=" text-center text-4xl uppercase font-bold"
          data-aos="fade-down"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          skills
        </h1>
        <div className="mx-10">
          <div className="md:grid grid-cols-2 gap-11 my-11 ">
            <div
              className="my-10"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h1 className=" text-3xl text-center font-semibold">
                Techincal Skill
              </h1>
              {/* JAVASCRIPT-SKILLS */}
              <div className="py-3">
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-medium text-black dark:text-white ">
                    JAVASCRIPT
                  </span>
                  <span className="text-xl font-medium text-black dark:text-white">
                    70%
                  </span>
                </div>
                <div className="progress2 progress-moved-javascript">
                  <div className="progress-bar2"></div>
                </div>
              </div>
              {/* END-JAVASCRIPT-SKILLS */}
              {/* HTML-SKILL */}
              <div className="py-3">
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-medium text-black dark:text-white">
                    HTML + CSS
                  </span>
                  <span className="text-xl font-medium text-black dark:text-white">
                    85%
                  </span>
                </div>
                <div className="progress2 progress-moved-html-css">
                  <div className="progress-bar2"></div>
                </div>
              </div>
              {/* END-HTML-SKILL */}
              {/* REACT JS-SKILL */}
              <div className="py-3">
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-medium text-black dark:text-white">
                    REACT JS
                  </span>
                  <span className="text-xl font-medium text-black dark:text-white">
                    75%
                  </span>
                </div>
                <div className="progress2 progress-moved-react">
                  <div className="progress-bar2"></div>
                </div>
              </div>
              {/* END-REACT-JS-SKILL */}
              {/* NODE JS-SKILL */}
              <div className="py-3">
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-medium text-black dark:text-white">
                    NODE JS
                  </span>
                  <span className="text-xl font-medium text-black dark:text-white">
                    65%
                  </span>
                </div>
                <div className="progress2 progress-moved-node">
                  <div className="progress-bar2"></div>
                </div>
              </div>
              {/* END-NODE JS-SKILL */}
              {/* DESIGN-SKILL */}
              <div className="py-3">
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-medium text-black dark:text-white">
                    DESIGN
                  </span>
                  <span className="text-xl font-medium text-black dark:text-white">
                    80%
                  </span>
                </div>
                <div className="progress2 progress-moved-design">
                  <div className="progress-bar2"></div>
                </div>
              </div>
              {/* END-DESIGN-SKILL */}
            </div>
            <div
              className="my-10"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h1 className=" text-center text-3xl font-semibold">
                Langguage Skill
              </h1>
              {/* ENGLISH-SKILL */}
              <div className="py-3">
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-medium text-black dark:text-white">
                    INDONESIA
                  </span>
                  <span className="text-xl font-medium text-black dark:text-white">
                    95%
                  </span>
                </div>
                <div className="progress2 progress-moved-indo">
                  <div className="progress-bar2"></div>
                </div>
              </div>
              {/* END-ENGLISH-SKILL */}
              {/* ARABIC-SKILL */}
              <div className="py-3">
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-medium text-black dark:text-white">
                    ENGLISH
                  </span>
                  <span className="text-xl font-medium text-black dark:text-white">
                    85%
                  </span>
                </div>
                <div className="progress2 progress-moved-english">
                  <div className="progress-bar2"></div>
                </div>
              </div>
              {/* END-ARABIC-SKILL */}
              {/* INDONESIA-SKILL */}
              <div className="py-3">
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-medium text-black dark:text-white">
                    ARABIC
                  </span>
                  <span className="text-xl font-medium text-black dark:text-white">
                    75%
                  </span>
                </div>
                <div className="progress2 progress-moved-arabic">
                  <div className="progress-bar2"></div>
                </div>
              </div>
              {/* END-INDONESIA-SKILL */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
