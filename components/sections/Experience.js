import React from "react";
import SectionComponent from "./SectionComponent";
import Image from "next/image";

export default function Experience() {
  const productImages = [
    { src: "/images/pr1.png", alt: "product 1" },
    { src: "/images/pr2.png", alt: "product 2" },
    { src: "/images/pr3.png", alt: "product 3" },
    { src: "/images/pr4.png", alt: "product 4" },
    { src: "/images/pr5.png", alt: "product 5" },
    { src: "/images/pr6.png", alt: "product 6" },
    { src: "/images/pr7.png", alt: "product 7" },
    { src: "/images/pr8.png", alt: "product 8" },
  ];
  return (
    <SectionComponent name="experience" className="text-center">
      <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
        maximize your experience
      </h2>
      <p className="mt-4 text-white/80 leading-8 text-lg">
        Easily find and purchase a wide range of products, from fashion to
        electronics, <br /> all in one place while getting the best deals
        available.
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 py-4 mt-8 items-center">
        {productImages.map((image, index) => (
            <Image
              src={image.src}
              height={300}
              width={300}
              alt={image.alt}
              className="rounded-md border p-6 border-darkPink/40 shadow-md shadow-lightPink/40"
              key={index}
            />
        ))}
      </div>
    </SectionComponent>
  );
}
