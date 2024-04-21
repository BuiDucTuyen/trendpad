import React from "react";

const Team: React.FC = () => {
  return (
    <div className="py-14">
      <section className="max-w-[1200px] mx-auto">
        <div className="flex justify-center items-center gap-5">
          <h2 className="text-[25px] uppercase font-bold text-blue-500">
            team member
          </h2>
        </div>
        <h2 className="text-white font-bold text-[30px] mt-4 text-center mb-10">
          MEET THE CREW
        </h2>
        <nav className="flex flex-wrap justify-center gap-4">
          <div className="text-center bg-[#1A1B2FD9] py-4 w-[calc(50% - 20px)] md:w-[calc(25% - 20px)]">
            <img
              className="mb-5 mt-5 mx-auto"
              src="./img/1-Dpix9Od2.png"
              alt=""
            />
            <h2 className="text-[30px] text-white font-semibold">Jonny</h2>
            <h3 className="text-[25px] text-[#FFFFFFB3] mb-4">CEO</h3>
          </div>
          <div className="text-center bg-[#1A1B2FD9] py-4 w-[calc(50% - 20px)] md:w-[calc(25% - 20px)]">
            <img
              className="mb-5 mt-5 mx-auto"
              src="./img/1-Dpix9Od2.png"
              alt=""
            />
            <h2 className="text-[30px] text-white font-semibold">Jonny</h2>
            <h3 className="text-[25px] text-[#FFFFFFB3] mb-4">CEO</h3>
          </div>
          <div className="text-center bg-[#1A1B2FD9] py-4 w-[calc(50% - 20px)] md:w-[calc(25% - 20px)]">
            <img
              className="mb-5 mt-5 mx-auto"
              src="./img/1-Dpix9Od2.png"
              alt=""
            />
            <h2 className="text-[30px] text-white font-semibold">Jonny</h2>
            <h3 className="text-[25px] text-[#FFFFFFB3] mb-4">CEO</h3>
          </div>
          <div className="text-center bg-[#1A1B2FD9] py-4 w-[calc(50% - 20px)] md:w-[calc(25% - 20px)]">
            <img
              className="mb-5 mt-5 mx-auto"
              src="./img/1-Dpix9Od2.png"
              alt=""
            />
            <h2 className="text-[30px] text-white font-semibold">Jonny</h2>
            <h3 className="text-[25px] text-[#FFFFFFB3] mb-4">CEO</h3>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Team;
