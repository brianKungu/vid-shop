import React from "react";
import SectionComponent from "./SectionComponent";
import Image from "next/image";

export default function Experience() {
  const productImages = [
    { src: "/images/pr1.png", alt: "product 1" },
    { src: "/images/pr2.png", alt: "product 2" },
    { src: "/images/pr3.png", alt: "product 3" },
    { src: "/images/pr4.png", alt: "product 4" },
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
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 py-4 mt-8">
        {productImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              height={250}
              width={250}
              alt={image.alt}
              className="rounded-md border p-6 border-darkPink/40 shadow-md shadow-lightPink/40"
            />
          </div>
        ))}
      </div>
    </SectionComponent>
  );
}
