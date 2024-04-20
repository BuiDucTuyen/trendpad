import React from "react";

const Hero4: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <nav className="bg-slate-900 flex flex-col justify-center items-center py-10 gap-4">
        <h1 className="text-white text-[36px] text-center uppercase font-bold mb-5">
          Apply for project <br />
          incubation{" "}
        </h1>
        <h2 className="text-[16px] text-[#FFFFFFB3] text-center mb-5">
          If you want to launch an IDO, It will be your perfect choice
        </h2>
        <button className="bg-yellow-400 w-36 h-14 text-[16px] rounded-md font-bold text-black p-4 ">
          Apply For IDO
        </button>
      </nav>
    </section>
  );
};

export default Hero4;
