import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
const Hero = () => {
  return (
    <section className="">
      <nav className="max-w-[1200px] mt- mx-auto flex justify-between items-center">
        <div className="text-left text-white">
          <h1 className="text-[60px] mb-4 font-bold">
            safest launchpad. multi-⁠chain
          </h1>
          <h2 className="text-[30px] mb-4 font-bold">
            Join the best AI, GameFi & DeFi IDOs on TrustPad
          </h2>
          <h3 className="text-[20px] mb-6 font-bold">
            Stake or farm $TPAD tokens to get early-access to top-tier IDOs in a
            safe and guaranteed way.
          </h3>
          <div className="flex   items-center gap-4 font-semibold">
            <button className="w-28 p-2 text-black font-bold h-14 bg-yellow-400 rounded-md text-[18px]">
              By TPAQ
            </button>
            <button className="w-32 p-2 h-14 text-black font-bold bg-yellow-400 rounded-md text-[18px]">
              How To Start
            </button>
            <div className="flex justify-center items-center gap-4 ml-2">
              <FaTelegramPlane className="w-8 h-8" />
              <FaGithub className="w-8 h-8" />
              <AiFillYoutube className="w-8 h-8" />
              <AiFillTwitterCircle className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div>
          <img
            className="max-w-[338px] max-h-[374px]"
            src="../img/trustpad_cube.15dca3fe.png"
            alt=""
          />
        </div>
      </nav>
    </section>
  );
};

export default Hero;
