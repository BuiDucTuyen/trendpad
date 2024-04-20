import React from "react";

const Hero2 = () => {
  return (
    <div className="bg-slate-800 py-10 ">
      <section className="max-w-[1200px] mx-auto mt-12 mb-12">
        {" "}
        <div className="flex gap-4 items-center font-semibold text-yellow-300 mb-1 ">
          <p className="text-[20px] font-semibold">3 EASY STEPS</p>
          <img className="w-16 h-3" src="./img/tải xuống.png" alt="" />
        </div>
        <h1 className="text-3xl uppercase font-bold text-white mb-10">
          HOW TO PARTICIPATE{" "}
        </h1>
        <nav className=" flex justify-between gap-5 items-center ">
          <div className="p-2 flex gap-4 max-w-[33%]">
            <img src="./img/one.png" alt="" />
            <div>
              <h2 className="mb-4 text-[30px] font-bold text-white">
                Buy $MLP
              </h2>
              <p className="text-[20px] text-[#FFFFFFB3]">
                The user purchases $MLP directly on Multipad to participate in
                future rounds
              </p>
            </div>
          </div>
          <div className="p-2 flex gap-4 max-w-[33%]">
            <img src="./img/2.png" alt="" />
            <div>
              <h2 className="mb-4 text-[30px] font-bold text-white">
                Buy $MLP
              </h2>
              <p className="text-[20px] text-[#FFFFFFB3]">
                The user purchases $MLP directly on Multipad to participate in
                future rounds
              </p>
            </div>
          </div>
          <div className="p-2 flex gap-4 max-w-[33%]">
            <img src="./img/3.png" alt="" />
            <div>
              <h2 className="mb-4 text-[30px] font-bold text-white">
                Buy $MLP
              </h2>
              <p className="text-[20px] text-[#FFFFFFB3]">
                The user purchases $MLP directly on Multipad to participate in
                future rounds
              </p>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Hero2;
