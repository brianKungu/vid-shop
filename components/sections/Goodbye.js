import React from "react";
import SectionComponent from "./SectionComponent";

export default function Goodbye() {
  return (
    <SectionComponent className="flex flex-col items-center justify-center text-center">
      <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
        #Online vs reality just got cancelled.
      </h2>
      <p className="mt-8 text-white/80 leading-8 md:text-xl text-xl">
        &quot;{" "}
        
        Discover high quality videos with accurate and detailed product
        descriptions.Basically, what you see is what you get. &quot;
      </p>
    </SectionComponent>
  );
}
