import React from "react";

const Hero3 = () => {
  return (
    <section className="bg-bg3 py-16">
      <h1 className="text-[30px] text-white font-bold text-center mb-5">
        OUR PARTNERS
      </h1>
      <div className="flex py-10">
        <div className="max-w-[1200px] mx-auto flex select-none gap-10 overflow-x-hidden">
          <div className="marquee-container flex flex-row gap-20">
            <ul className="flex flex-row min-w-full run flex-shrink-0 content-around items-center gap-20 md:animate-marqueeScroll">
              {renderLogo("Armory", "./img/bina.png", 148, 40)}
              {renderLogo("Armory", "./img/ether.png", 148, 40)}
              {renderLogo("Code Combat", "./img/ether.png", 153, 34)}
              {renderLogo("Orb", "./img/ether.png", 113, 46)}
              {renderLogo("Kong", "./img/ether.png", 138, 46)}
              {renderLogo("PopSQL", "./img/kusa.png", 136, 32)}
              {renderLogo("Jam", "./img/ether.png", 117, 48)}
              {renderLogo("Patch", "./img/ether.png", 142, 36)}
              {renderLogo("Monte Carlo", "./img/poly.png", 211, 32)}
            </ul>
            <ul className="flex flex-row min-w-full run flex-shrink-0 content-around items-center gap-20 md:animate-marqueeScroll">
              {renderLogo("Armory", "./img/poly.png", 148, 40)}
              {renderLogo("Code Combat", "./img/poly.png", 153, 34)}
              {renderLogo("Orb", "./img/poly.png", 113, 46)}
              {renderLogo("Code Combat", "./img/poly.png", 153, 34)}
              {renderLogo("Kong", "./img/poly.png", 138, 46)}
              {renderLogo("PopSQL", "./img/poly.png", 136, 32)}
              {renderLogo("Jam", "/./img/poly.png", 117, 48)}
              {renderLogo("Patch", "./img/poly.png", 142, 36)}
              {renderLogo("Monte Carlo", "./img/poly.png", 211, 32)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderLogo = (
  alt: string,
  src: string,
  width: number,
  height: number
) => (
  <li className="leading-0 !text-zinc-200">
    <img
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      decoding="async"
      data-nimg="1"
      style={{ color: "transparent" }}
      src={src}
    />
  </li>
);

export default Hero3;
