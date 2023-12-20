import React from "react";
import "/src/App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init();
  return (
    <div
      className="md:grid grid-cols-3 gap-2"
      // data-aos="fade-down"
      // data-aos-duration="1000"
    >
      <div className="uppercase text-center py-24 sm:my-auto md:mx-auto md:text-left ">
        <h1 className=" text-5xl">
          Hadi <br /> Rachmat
        </h1>
        <hr className=" my-5 border-black w-4/5 sm:w-full mx-auto "></hr>
        <h3 className=" ">
          <a href="http://">Instagram | </a>
          <a href="http://"> Linkend</a>
          <br />
          <a href="http://"> Github</a>
        </h3>
        <h1 className=" ">
          <a href="http://" className="">
            download my cv here
          </a>
        </h1>
      </div>
      <div className="relative sm:top-0 -top-16">
        <img
          src="/src/assets/img/me.png"
          alt="me.png"
          width={300}
          className="mx-auto sm:my-5"
        />
        <img
          src="/src/assets/img/BG-smoke.png"
          alt=""
          srcSet=""
          // width={600}
          // height={300}
          className="absolute sm:-top-20 -top-28 -z-10 px-5"
        />
      </div>
      <div className="sm:my-auto sm:px-2">
        <h1 className="text-center text-4xl py-5 uppercase font-bold ">
          Beginner <br /> <span className=" text-[#5C469C]">web developer</span>
        </h1>
        <p className="text-xl py-5 sm:text-left text-center">
          HelLo Guys I’am a Muhammadiyah University Sukabumi Student since 2020
          and I Live in Sukabumi City west java indonesia. <br /> and this is my
          simple web portfolion by using react js
        </p>
        <div className="text-center">
          <a href="http://">
            <button className="my-5 border border-black p-5 text-black rounded-xl hover:bg-[#352F44] active:bg-[#352F44] hover:text-[#D9D9D9] hover:border-transparent transition delay-75 ">
              {" "}
              Contact me here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
