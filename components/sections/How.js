import React from "react";
import Image from "next/image";

export default function How() {
  const creators_content = [
    {
      id: 1,
      title: " Create account and follow your favorite creators.",
      description:
        "Discover unique products and deals created by a talented community of creators. They bring you products you didn't even know existed, and through their content, you can easily watch, like and buy. Start by following your favorite creators to stay up-to-date on their latest content.",
      imgSrc: "/images/1..png",
    },
    {
      id: 2,
      title: "SHOP FROM ANY SHOP ANYWHERE",
      description:
        "Thanks to our community of creators, you can access shops and products from anywhere in Kenya without a hustle. Our creators are constantly making videos featuring unique and interesting items from various shops and locations, making it easy for you to discover products you never knew existed. And if you're looking for something more specific, fret not, our creators will take your requests and feature the products or shops you're interested in. With Vidshop, shopping has never been more convenient or personalized.",
      imgSrc: "/images/2..png",
    },
    {
      id: 3,
      title: "SHOP AND DISCOVER MORE.",
      description:
        "Found something you like? Cop it or save it to your favorites to easily find it later. You'll also receive personalized recommendations of videos with similar products to help you discover more amazing finds.",
      imgSrc: "/images/3..png",
    },
    {
      id: 4,
      title: "EASY PAYMENT OPTIONS.",
      description:
        "Paying on Vidshop is simple and convenient. With just a few clicks, you can purchase products using a link and choose from bank or Mpesa payment options.",
      imgSrc: "/images/4 retry.png",
    },
    {
      id: 5,
      title: "BECOME A CREATOR.",
      description:
        "Anyone can become a creator on Vidshop and start sharing their favorite products with our community. Earn commission on every purchase made through your videos and build your own following. It's shopping made social!",
      imgSrc: "/images/5..png",
    },
  ];
  return (
    <section id="how">
      <div className="max-w-7xl mx-auto my-8 py-8 w-full">
        <h2 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#F56040] uppercase leading-8">
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
                <p className="my-8 md:text-lg font-normal text-white/80 ">
                  {content.description}
                </p>
                <Image src={content.imgSrc} alt="images" height={500} width={500}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
