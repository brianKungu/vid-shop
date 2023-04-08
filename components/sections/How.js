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
            <p className="my-auto text-gray-600 text-center md:text-left text-3xl">
              {" "}
              <strong className="text-4xl">Browse</strong> product <br />
              videos, <strong className="text-4xl">like</strong> something,{" "}
              <strong className="text-4xl">want</strong> it,{" "}
              <strong className="text-4xl">get</strong> it with just
              <strong className="text-4xl"> three clicks.</strong>
            </p>
          </div>
          <div className="mt-10 md:m-0">
            <div className="how-container">
              <video
                src="./logoAnimation.mp4"
                type="video/mp4"
                className="mx-auto rounded-md shadow-lg"
                loop
                autoplay
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
