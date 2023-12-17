import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  AOS.init();
  return (
    <div className="z-20">
      <div className="flex justify-center z-20">
        <nav
          className=" bg-[#5C5470] flex fixed p-2 m-3 rounded-full bg-opacity-50 md:max-w-2xl z-20"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <a href="http://" className="px-5 md:px-5">
            <img
              className=" px-2 md:px-2 py-2 opacity-80 drop-shadow-xl bg-slate-200 rounded-full"
              src="/src/assets/img/Home-page.png"
              alt="Home-Page"
              srcset=""
              width={50}
              height={50}
            />
          </a>
          <a href="http://" className="px-5 md:px-5">
            <img
              className=" px-2 md:px-2 py-2 opacity-80 drop-shadow-xl bg-slate-200 rounded-full"
              src="/src/assets/img/Account.png"
              alt="Account"
              srcset=""
              width={50}
              height={50}
            />
          </a>
          <a href="http://" className="px-5 md:px-5">
            <img
              className=" px-2 md:px-2 py-2 opacity-80 drop-shadow-xl bg-slate-200 rounded-full"
              src="/src/assets/img/picture.png"
              alt="picture"
              srcset=""
              width={50}
              height={50}
            />
          </a>
          <a href="http://" className="px-5 md:px-5">
            <img
              className=" px-2 md:px-2 py-2 opacity-80 drop-shadow-xl bg-slate-200 rounded-full"
              src="/src/assets/img/WhatsApp.png"
              alt="WhatsApp"
              srcset=""
              width={50}
              height={50}
            />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
