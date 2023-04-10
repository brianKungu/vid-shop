import React from "react";
import Button from "../next-link-btns/Button";

export default function ContactUs() {
  return (
    <section id="contact">
      <div className="max-w-7xl mx-auto my-8 py-8 w-full">
        <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
          <div className="flex items-center justify-evenly text-left flex-wrap">
            <h2 className="font-bold text-3xl md:text-5xl text-white uppercase leading-8">
              contact us
            </h2>
            <form className="shadow-md rounded px-8 pt-6 pb-8 md:w-1/2">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="h-16 w-full  bg-primaryBg/50 rounded-lg px-3  outline-none transition-all duration-200 ease-linear text-white/60 placeholder:text-white/60 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-lg"
                  name="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="h-16 w-full  bg-primaryBg/50 rounded-lg px-3  outline-none transition-all duration-200 ease-linear text-white/60 placeholder:text-white/60 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-lg"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  for="username"
                >
                  Message
                </label>
                <textarea
                  className="h-24 bg-primaryBg/50 rounded-lg px-3 py-2 w-full outline-none transition-all duration-200 ease-linear text-white/60 placeholder:text-white/60 focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  text-lg"
                  id="username"
                  placeholder="Your message"
                ></textarea>
              </div>

              <Button>Submit</Button>
            </form>
          </div>
        </h2>
      </div>
    </section>
  );
}
