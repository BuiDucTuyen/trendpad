import React from "react";

const Hero2: React.FC = () => {
  return (
    <div className="py-10 px-5">
      <section className="max-w-[1200px] mx-auto mt-12 mb-12">
        <h1 className="text-3xl uppercase text-center font-bold text-white mb-10">
          HOW TO PARTICIPATE{" "}
        </h1>
        <nav className="flex flex-col md:flex-row justify-between gap-5 items-center">
          <div className="p-4 border bg-slate-700 rounded-md flex gap-4 md:w-[33%]">
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
          <div className="p-4 border bg-slate-700 rounded-md flex gap-4 md:w-[33%]">
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
          <div className="p-4 border bg-slate-700 rounded-md flex gap-4 md:w-[33%]">
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
