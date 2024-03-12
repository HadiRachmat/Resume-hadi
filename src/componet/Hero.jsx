import React from "react";
import "/src/App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init();
  return (
    <div
      id="hero-section"
      className="md:grid grid-cols-3 gap-2"
      // data-aos="fade-down"
      // data-aos-duration="1000"
    >
      <div
        className="uppercase text-center py-24 sm:my-auto md:mx-auto md:text-left"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <h1 className=" text-5xl">
          Hadi <br /> Rachmat
        </h1>
        <hr className=" my-5 border-black w-4/5 sm:w-full mx-auto "></hr>
        <div>
          <a
            href="https://www.instagram.com/hadi.rachmat01/"
            className="text-black hover:text-[#5C469C]"
          >
            Instagram |{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/hadi-rachmat-4266921b6/"
            className="text-black hover:text-[#5C469C]"
          >
            Linkedin
          </a>
          <br />
          <a
            href="https://github.com/hadi278"
            className="text-black hover:text-[#5C469C]"
          >
            {" "}
            Github
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1NEXtFvBARfLSMq6Y9R_QxLFJoYV3n3e_/view?usp=sharing"
          className=""
        >
          <h1 className="py-5 text-black hover:text-[#5C469C]">
            download my cv here
          </h1>
        </a>
      </div>
      <div
        className="relative sm:top-0 -top-16"
        data-aos="fade-down"
        data-aos-delay="1500"
        data-aos-duration="1000"
      >
        <img
          src="/src/assets/img/me.png"
          alt="me.png"
          width={300}
          className="mx-auto -sm:my-5 z-20"
        />
        <img
          src="/src/assets/img/BG-smoke.png"
          alt=""
          srcSet=""
          width={600}
          height={300}
          className="absolute sm:-top-20 -top-28 right-0 left-0 bottom-0 -z-10 mx-auto my-auto px-10"
        />
      </div>
      <div
        className="sm:my-auto mx-14 sm:px-2 text-center"
        data-aos="fade-left"
        data-aos-delay="2000"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl py-3 uppercase font-bold ">
          Beginner <br /> <span className=" text-[#5C469C]">web developer</span>
        </h1>
        <p className="text-xl py-1">
          HelLo Guys I’am a Muhammadiyah University Sukabumi Student since 2020
          and I Live in Sukabumi City west java indonesia. <br /> and this is my
          simple web portfolion by using react js
        </p>
        <div className="">
          <a href="https://wa.me/085793710978">
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
