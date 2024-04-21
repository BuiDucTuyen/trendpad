import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Hero: React.FC = () => {
  return (
    <section className="">
      <nav className="container mx-auto flex flex-col gap-10 lg:flex-row justify-between items-center py-8 px-4 lg:px-0">
        <div className="text-center px-4 py-4 lg:text-left lg:w-1/2 text-white">
          <h1 className="text-2xl lg:text-5xl mb-4 font-bold leading-tight">
            Safest Launchpad. Multi-chain
          </h1>
          <h2 className="text-[18px] lg:text-3xl mb-4 font-bold leading-tight">
            Join the best AI, GameFi & DeFi IDOs on TrustPad
          </h2>
          <h3 className="text-[15px] lg:text-xl mb-6 text-gray-400 font-semibold leading-tight">
            Stake or farm $TPAD tokens to get early access to top-tier IDOs in a
            safe and guaranteed way.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4 font-semibold">
            <div className="flex gap-4">
              {" "}
              <button className="w-24 lg:w-36 lg:h-14 p-2 text-black font-bold hover:text-red-600 h-12 bg-yellow-400 rounded-md lg:text-lg text-sm">
                By TPAQ
              </button>
              <button className="w-28 lg:w-36 lg:h-14 p-2 text-black font-bold hover:text-red-600 h-12 bg-yellow-400 rounded-md lg:text-lg text-sm">
                How To Start
              </button>
            </div>

            <div className="flex justify-center items-center gap-4">
              <FaTelegramPlane className="w-8 h-8" />
              <FaGithub className="w-8 h-8" />
              <AiFillYoutube className="w-8 h-8" />
              <AiFillTwitterCircle className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="mx-auto lg:mx-0 max-w-full lg:max-w-[338px] lg:max-h-[374px]"
            src="../img/trustpad_cube.15dca3fe.png"
            alt=""
          />
        </div>
      </nav>
    </section>
  );
};

export default Hero;
