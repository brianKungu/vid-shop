import React from "react";

export default function Header() {
  return (
    <section id="header">
      <div className="mx-auto my-8">
        <div>
          <div className="video-container drop-shadow shadow-lg shadow-lightOrange/20">
            <video
              className="mx-auto rounded-md header-video"
              autoplay
              muted
              loop
              controls
              
            >
              <source src="./logoAnimation2.mp4" type="video/mp4" />
            </video>
          </div>{" "}
          <div className="text-center mt-8">
            <h2 className="font-bold text-3xl md:text-5xl text-gray-700">
              #ONLINE VS REALITY JUST GOT CANCELLED
            </h2>
            <p className="mt-4 text-gray-600">
              Experience shopping like a <strong>VIP</strong>. Shop{" "}
              <strong>directly </strong>
              from creator videos <strong>quicker</strong> than you can say, &quot;a
              synonym for cinnamon is a cinnamon synonym.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
