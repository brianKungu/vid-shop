import Image from "next/image";
import React from "react";

export default function Feedback() {
  return (
    <section id="feedback">
      <div className="max-w-7xl mx-auto my-8 py-8 w-full">
        <div className="flex md:mx-8 justify-center items-center gap-4 text-left flex-wrap md:flex-nowrap">
          <div>
            <h2 className="font-bold text-3xl md:text-5xl text-lightBlue uppercase leading-8 drop-shadow-xl">
              Geoffrey Otieno
            </h2>
            <h3 className="font-bold text-2xl md:text-3xl text-lightPink uppercase leading-8 mt-4">
              Shopper
            </h3>
            <p className="mt-8 text-white/80 leading-8 text-lg">
              &quot;I am blown away by how easy vidshop made shopping. it was so
              convenient to discover products while watching videos and the
              seamless link popups made checkout a breeze. I&apos;ll definitely
              be using this app for all my future shopping needs.&quot;
            </p>
          </div>
          <Image
            src="/images/comment1.png"
            className="mx-auto"
            priority
            width={300}
            height={200}
            alt="comments-photo"
          />
        </div>
      </div>
    </section>
  );
}
