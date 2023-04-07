import React from "react";

export default function How() {
  return (
    <section id="how">
      <div className="m-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 grid-cols-1 mx-auto">
          <div className="flex flex-col">
            <h2 className="font-bold text-5xl capitalize text-gray-800 mb-4 text-center md:text-left">
              How it works
            </h2>{" "}
            <p className="my-auto text-gray-700 text-center md:text-left">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="mt-10 md:m-0">
            <div className="h-[300px] md:w-[500px] bg-darkOrange rounded-md mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
