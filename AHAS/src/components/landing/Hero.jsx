import React from "react";
import { Link } from "react-router-dom";
import { handleLoginRedirect } from "../../services/handleSessionStorage";

const Hero = () => {
  return (
    <section className="bg-gradient-to-t from-[#030303] to-[#363636]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative items-center w-full px-5 pt-12 mx-auto max-w-7xl lg:pt-36 lg:px-16 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Menerapkan layanan Anda
              <span className="md:block">tidak pernah semudah ini</span>
            </p>
            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
              Zeabur is a platform that helps developers deploy services with a
              single click, no matter what programming language or development
              framework your project uses.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
            <Link
              to="/dashboard"
              className="items-center inline-flex focus:outline-none justify-center text-white bg-[#5b03e3] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full"
              onClick={handleLoginRedirect}
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
          <img
            alt=""
            className="relative object-cover w-full rounded lg:rounded-2xl"
            src="https://i.pinimg.com/originals/fe/e8/47/fee8478fc9ec7a2dd6c30a60f9537e4a.gif"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
