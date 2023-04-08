import React from "react";

export default function How() {
  return (
    <section id="how">
      <div className="m-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 grid-cols-1 mx-auto">
          <div className="flex flex-col">
            <h2 className="font-bold text-5xl capitalize text-gray-700 mb-4 text-center md:text-left">
              How it works
            </h2>{" "}
            <p className="my-10 text-gray-600 text-center md:text-left text-3xl">
              {" "}
              <strong className="text-4xl">Browse</strong> product
              videos, <br /> <strong className="text-4xl capitalize">like</strong>{" "}
              something, <strong className="text-4xl capitalize">want</strong>{" "}
              it, and <strong className="text-4xl capitalize">get</strong> it with
              just
              <strong className="text-4xl capitalize"> three clicks.</strong>
            </p>
          </div>
          <div className="mt-10 md:m-0">
            <div className="how-container">
              <video
                src="./howToAnimation.mp4"
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