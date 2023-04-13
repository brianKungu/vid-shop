import React from "react";
import Image from "next/image";
import CRCButton from "../react-scroll-btns/CRCButton";
export default function Header() {
  return (
    <section id="header" className="mt-10 ">
      <div className="max-w-7xl mx-auto my-8 py-8">
        <div className="flex flex-col items-center">
          <Image
            src="/images/logo3.jpg"
            width={350}
            height={350}
            alt="vidshop logo"
            className="rounded-md"
          />
          <div className="text-center mt-8">
            <h1 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
              Shop and swipe. the ultimate shopping experience
            </h1>
            <p className="mt-4 text-white/80 leading-8 text-lg">
              &quot;Explore the underground world of shopping with creators as
              they unveil hidden gems, <br />
              share product finds and prices with our innovative in-video
              shopping technology.&quot;
            </p>
            <div className="mt-4">
              <CRCButton to="video" name="watch a demo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
