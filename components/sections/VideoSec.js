import React from "react";
import SectionComponent from "./SectionComponent";

export default function VideoSec() {
  return (
    <section id="inVideoShopping" className="px-0">
      <div className="mx-auto my-8 py-8 w-full marquee-container">
        <div className="bg-lightPink w-full max-w-[1440px]">
          <div className="marquee flex items-center justify-center gap-2">
            <img src="/images/invideo.png" />
            <img src="/images/invideo2.png" />
            <img src="/images/invideo3.png" />
            <img src="/images/invideo.png" />
            <img src="/images/invideo2.png" />
            <img src="/images/invideo3.png" />
            <img src="/images/invideo.png" />
            <img src="/images/invideo2.png" />
            <img src="/images/invideo3.png" />
            <img src="/images/invideo.png" />
            <img src="/images/invideo2.png" />
            <img src="/images/invideo3.png" />
            <img src="/images/invideo.png" />
            <img src="/images/invideo2.png" />
            <img src="/images/invideo3.png" />
            <img src="/images/invideo.png" />
            <img src="/images/invideo2.png" />
            <img src="/images/invideo3.png" />
            <img src="/images/invideo.png" />
            <img src="/images/invideo2.png" />
            <img src="/images/invideo3.png" />
          </div>
        </div>
        <div className="p-12 text-center uppercase font-bold">
          {" "}
          <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
            Don&apos;t get it? <br />{" "}
          </h2>
          <span className=" text-3xl md:text-4xl text-white/80">
            here is a quick {" "}
          </span>
          <span className=" text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#F56040]">
            demo video
          </span>{" "}
          <div className="mt-10">
            <div className="how-container">
              <video
                src="/howToAnimation.mp4"
                type="video/mp4"
                className="mx-auto"
                loop
                autoplay
                muted
                controls
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
