import React from "react";

function Footer(props) {
  return (
    <div className=" bg-[#352F44]">
      <div className="sm:grid grid-cols-2 mx-10">
        <div className="my-10">
          <h1 className="text-[#D9D9D9] text-center text-4xl font-semibold py-5"> Contact Me </h1>
          <p className=" text-[#D9D9D9] text-center text-xl py-5">
            You can contact me on various platforms that
            <br /> I have listed below, thank you for visiting this <br />{" "}
            portfolio website
          </p>
          <div className="">
            {/* INSTAGRAM */}
            <div>
              <a
                href="https://www.instagram.com/hadi.rachmat01/"
                className="flex"
              >
                <img
                  src="/src/assets/img/instagram.png"
                  alt="instagram"
                  sizes=""
                  srcSet=""
                />
                <p className="place-self-center px-5 text-2xl text-[#D9D9D9] hover:text-white">
                  {" "}
                  hadi.rachmat01
                </p>
              </a>
            </div>
            {/* END-INSTAGRAM */}
            {/* GMAIL-SENT */}
            <div>
              <a href="http://" className="flex">
                <img
                  src="/src/assets/img/Email.png"
                  alt="hadirahmat712@gmail.com"
                  srcSet=""
                />
                <p className="place-self-center px-5 text-2xl text-[#D9D9D9] hover:text-white">
                  {" "}
                  hadirahmat712@gmail.com{" "}
                </p>
              </a>
            </div>
            {/* END-GMAIL-SEND */}
            {/* WHATSAPP-APP */}
            <div>
              <a href="wa.me/085793710978" className="flex">
                <img
                  src="/src/assets/img/WhatsAppFooter.png"
                  alt="WhatsApp"
                  srcSet=""
                />
                <p className="place-self-center px-5 text-2xl text-[#D9D9D9] hover:text-white">
                  WhatsApp
                </p>
              </a>
            </div>
            {/* END-WHATSAPP-APP */}
            {/* TELEGRAM-APP */}
            <div>
              <a href="http://" className="flex">
                <img src="/src/assets/img/Telegram App.png" alt="" srcSet="" />
                <p className="place-self-center px-5 text-2xl text-[#D9D9D9] hover:text-white">
                  {" "}
                  Telegram{" "}
                </p>
              </a>
            </div>
            {/* END-TELEGRAM-APP */}
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" text-[#D9D9D9] text-center text-4xl py-5 font-semibold"> Contact Form</h3>
            <p className="text-[#D9D9D9] text-center text-xl py-5">
              If not, you can contact me via the form that I have 
              provided below and this is connected to Gmail
            </p>
          </div>
          <div className="">
            <form action="" className="">
              <div className="relative py-3">
                <input
                  type="text"
                  className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Full Name"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <img
                    src="/src/assets/img/user2.svg"
                    alt=""
                    srcSet=""
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
              </div>
              <div className="relative py-3">
                <input
                  type="email"
                  className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Your Email"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <img
                    src="/src/assets/img/mail.svg"
                    alt=""
                    srcSet=""
                    className="text-sky-200"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="relative py-3">
                <input
                  type="email"
                  className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Phone Number"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <img
                    src="/src/assets/img/wa.svg"
                    alt=""
                    srcSet=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="relative py-3">
                <textarea
                  className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  rows="5"
                  placeholder="your notes write here"
                ></textarea>
              </div>
              <div className=" relative py-3">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#D9D9D9] text-[#D9D9D9] hover:border-white hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Button
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
