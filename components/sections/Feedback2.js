import Image from "next/image";
import React from "react";

export default function Feedback2() {
  return (
    <section id="feedback" className="bg-darkPink/95 rounded-md md:rounded-none">
      <div className="max-w-7xl mx-auto my-8 py-8 w-full">
        <div className="flex mx-8 justify-center items-center gap-4 text-left flex-wrap md:flex-nowrap">
          <Image
            src="/images/comment2.png"
            className="mx-auto"
            priority
            width={350}
            height={300}
            alt="comments-photo"
          />
          <div>
            <h2 className="font-bold text-3xl md:text-5xl text-lightBlue uppercase leading-8 drop-shadow-xl">
              Princess Zuri
            </h2>
            <h3 className="font-bold text-2xl md:text-3xl text-lightPink uppercase leading-8 mt-4 drop-shadow-lg">
              Creator
            </h3>
            <p className="mt-8 text-white/80 leading-8 text-md">
              &quot;Vidshop has been a game-changer for me and my followers. I
              can easily showcase the amazing products I find and recommend to
              my followers on other platforms, they can conveniently purchase
              through the links I provide on Vidshop. It&apos;s a win-win
              situation for both my followers and me. Plus, the commission I
              earn for every sale made through my links is just the cherry on
              top!&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
