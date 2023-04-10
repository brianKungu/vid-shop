import React from "react";
import SectionComponent from "./SectionComponent";
import Image from "next/image";

export default function Experience() {
  const productImages = [
    { src: "/images/products 1.png", alt: "product 1" },
    { src: "/images/product 2.png", alt: "product 2" },
    { src: "/images/product 3.png", alt: "product 3" },
    { src: "/images/product 4.png", alt: "product 4" },
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
      <div className="flex items-center justify-center flex-wrap">
        {productImages.map((image, index) => (
          <div key={index}>
            <Image src={image.src} height={300} width={300} alt={image.alt} />
          </div>
        ))}
      </div>
    </SectionComponent>
  );
}
