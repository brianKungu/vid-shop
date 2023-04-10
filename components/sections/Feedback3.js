import Image from "next/image";
import React from "react";

export default function Feedback3() {
  return (
    <section id="feedback">
      <div className="max-w-7xl mx-auto my-8 py-8 w-full">
        <div className="flex  justify-center items-center gap-4 text-left flex-wrap md:flex-nowrap">
          <div>
            <h2 className="font-bold text-3xl md:text-5xl text-lightBlue uppercase leading-8 drop-shadow-xl">
              Dan Ngugi
            </h2>
            <h3 className="font-bold text-2xl md:text-3xl text-lightPink uppercase leading-8 mt-4">
              Shopper
            </h3>
            <p className="mt-8 text-white/80 leading-8 text-lg">
              &quot; Before discovering Vidshop, I always hesitated to buy
              products from other sites because I wasn&apos;t sure if they were
              legitimate or not. But now, with Vidshop, I feel more confident
              about my purchases because I can see the products being showcased
              by real creators whom I trust. It&apos;s made my shopping
              experience much more enjoyable and stress-free.&quot;
            </p>
          </div>
          <Image
            src="/images/comment3.png"
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
