import React from "react";

export default function Header() {
  return (
    <section id="header">
      <div className="mx-auto my-8">
        <div>
          <div className="video-container">
            <video
              className="mx-auto rounded-md shadow-lg header-video"
              autoplay
              muted
              loop
              src="./logo.mp4"
              type="video/mp4"
            ></video>
          </div>{" "}
          <div className="text-center mt-8">
            <h2 className="font-bold text-3xl text-gray-700">
              ONLINE VS REALITY JUST GOT CANCELED
            </h2>
            <p className="mt-4 text-gray-600">
              Experience shopping like a <strong>VIP</strong>. Shop{" "}
              <strong>directly </strong>
              from creator videos <strong>quicker</strong> than you can say a
              synonym for cinnamon is a cinnamon synonym.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
