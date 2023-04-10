import React from "react";

export default function How() {
  const creators_content = [
    {
      id: 1,
      title: " Create account and follow your favorite creators.",
      description:
        " Discover unique products and deals from created by a talented community of creators that you are already familiar with. Start by following your favorite creators to stay up-to-date on their latest content.",
    },
    {
      id: 2,
      title: "SHOP FROM ANY SHOP ANYWHERE",
      description:
        "Thanks to our community of creators, Vidshop is able to bring you an endless variety of products from all over the country, right at your fingertips. Our creators are constantly making videos featuring unique and interesting items from various shops and locations, making it easy for you to discover products you never knew existed. And if you're looking for something specific that isn't already on the app, our creators are always happy to take your request and create a video featuring the shop and products you're interested in. With Vidshop, shopping has never been more convenient or personalized.",
    },
    {
      id: 3,
      title: "SHOP AND DISCOVER MORE.",
      description:
        "Found something you like? Cop it or save it to your favorites to easily find it later. You'll also receive personalized recommendations of videos with similar products to help you discover more amazing finds.",
    },
    {
      id: 4,
      title: "EASY PAYMENT OPTIONS.",
      description:
        "Paying on Vidshop is simple and convenient. With just a few clicks, you can purchase products using a link and choose from bank or Mpesa payment options.",
    },
    {
      id: 5,
      title: "BECOME A CREATOR.",
      description:
        "Anyone can become a creator on Vidshop and start sharing their favorite products with our community. Earn commission on every purchase made through your videos and build your own following. It's shopping made social!",
    },
  ];
  return (
    <section id="how">
      <div className="max-w-7xl mx-auto my-8 py-8 w-full">
        <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
          This is how it goes down
        </h2>
        <div className="mt-12">
          <ol className="relative border-l-8 border-lightPink mx-6 my-4">
            {creators_content.map((content) => (
              <li className="mb-10 ml-8" key={content.id}>
                <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-4 ring-8 ring-lightPink ">
                  <span className="text-darkPink font-bold">{content.id}</span>
                </span>
                <h3 className="flex items-center mb-1 md:text-3xl text-xl font-bold text-white uppercase">
                  {content.title}
                </h3>
                <p className="mt-4 md:text-lg font-normal text-white/80 ">
                  {content.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
