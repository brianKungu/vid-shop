import React from "react";
import SectionComponent from "./SectionComponent";

export default function VideoSec() {
  return (
    <section id="feedback">
      <div className="mx-auto my-8 py-8 w-full">
        <marquee
          width="100%"
          direction="left"
          height="50px"
          className="text-white font-bold text-5xl bg-lightPink text-center uppercase"
        >
          in-video shopping{" "}
          <span className="text-lightBlue">in-video shopping</span> in-video
          shopping <span className="text-lightBlue">in-video shopping</span>
        </marquee>
        <div className="p-12 text-center">
          {" "}
          <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
            Don&apos;t get it? <br /> <span className="text-3xl text-white/80">here is a quick demo video</span>
          </h2>
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
