import React from "react";
import "/src/App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init();
  return (
    <div
      className=" sm:grid grid-cols-3 gap-10 justify-items-center overflow-hidden mx-9 p-10 "
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className=" md:my-auto sm:my-auto mx-2 mt-14">
        <h1 className="text-5xl uppercase font-bold">
          Hadi <br /> Rachmat
        </h1>
        <hr className="my-5 sm:my-5 h-px bg-black border-0 dark:bg-gray-700 "></hr>
        <h3 className=" font-serif text-2xl">
          <a href="http://">Instagram | </a>
          <a href="http://"> Linkend</a>
          <br />
          <a href="http://"> Github</a>
        </h3>
        <h1 className=" uppercase underline py-2 ">
          <a href="http://" className="text-black">
            download my cv here
          </a>
        </h1>
      </div>
      <div className="flex place-content-center relative right-5 -top-5 ">
        <img
          src="/src/assets/img/me.png"
          alt="me.png"
          width={450}
          className=""
        />
        <img
          src="/src/assets/img/BG-smoke.png"
          alt=""
          srcset=""
          width={600}
          height={600}
          className=" absolute -z-10"
        />
      </div>
      <div className=" md:my-auto ">
        <h1 className=" uppercase text-5xl font-bold py-2">
          Beginner <br /> web developer
        </h1>
        <p className=" text-2xl py-5 r">
          HelLo Guys I’am a Muhammadiyah University Sukabumi Student since 2020
          and I Live in Sukabumi City west java indonesia. <br /> and this is my
          simple web portfolion by using react js
        </p>

        <a href="http://">
          <button className="bg-transparent border-2 rounded-xl text-black border-black p-3">
            {" "}
            Contact me here
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
