import React from "react";

export default function Header() {
  return (
    <section id="header">
      <div className="mx-auto my-8">
        <div>
          <div className="md:w-[1200px] h-[300px] bg-lightBlue mx-auto rounded-md">
            <p className="text-center text-2xl font-bold text-primaryBg uppercase my-auto">
              Logo animation
            </p>
          </div>{" "}
          <p className="text-center mt-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
