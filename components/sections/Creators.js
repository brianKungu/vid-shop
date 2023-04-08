import React from "react";

export default function Creators() {
  const creators_content = [
    {
      id: 1,
      title: "Create your content",
      description:
        "Show product videos from your favorite stores or products you already have. Edit using our in-app editing features to add links and prices to each product in the video.",
    },
    {
      id: 2,
      title: "Share your content",
      description:
        "Post in the app and share the video with your online community. invite them to purchase directly from the app.",
    },
    {
      id: 3,
      title: "Watch the sales rolling",
      description:
        "As your community engages with your video, our app does the rest. You'll receive commissions on all purchases made through your unique links. It's that easy!",
    },
  ];
  return (
    <section id="creators">
      <div>
        <div className="my-10">
          <h2 className="text-5xl font-bold text-gray-700">Creator’s Page</h2>
        </div>
        <ol className="relative border-l border-darkBlue mx-6">
          {creators_content.map((content) => (
            <li className="mb-10 ml-6" key={content.id}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                <span className="text-darkBlue font-bold">{content.id}</span>
              </span>
              <h3 className="flex items-center mb-1 text-3xl font-bold text-gray-600 ">
                {content.title}
              </h3>
              <p className="mb-4 text-lg font-normal text-gray-500 ">
                {content.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
