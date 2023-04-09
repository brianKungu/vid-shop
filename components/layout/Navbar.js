import React, { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
import { Link } from "react-scroll";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import RCButton from "../react-scroll-btns/RCButton";
import NXTButton from "../next-link-btns/NXTButton";
import NXTButtonOutline from "../next-link-btns/NXTButtonOutline";

export default function Navbar() {
  return (
    <Popover className="backdrop-blur-md nav ">
      <div className="px-6 mx-auto max-w-7xl md:px-2">
        <div className="flex items-center justify-between w-full py-6  border-lightPink md:justify-start md:space-x-10">
          <div className="flex justify-start items-center gap-4">
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              alt="vid shop logo image"
              priority
            />
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <h1 className="font-bold text-white uppercase">Vid shop</h1>
            </Link>
          </div>
          <div className="items-center justify-end flex-1 hidden space-x-4 md:flex">
            <RCButton name="how it works" />
            <RCButton name="reviews" />
            <RCButton name="contact us" />

            <NXTButtonOutline name="sign up" />
            <NXTButton name="login" />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="popover-button">
              <span className="sr-only">Open menu</span>
              <AiOutlineAlignRight className="text-xl" />
            </Popover.Button>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition origin-top-right transform md:hidden backdrop-blur-lg "
        >
          <div className="divide-y-2 divide-blue-100 rounded-md shadow-md bg-secondaryBg/90 ring-1 ring-blue-200 ring-opacity-5 z-10">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white uppercase">VidShop</h3>
                <div className="-mr-2">
                  <Popover.Button className="popover-button">
                    <span className="sr-only">Close Menu</span>
                    <AiOutlineClose aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <div className="grid gap-y-8">
                  <RCButton name="how it works" />
                  <RCButton name="reviews" />
                  <RCButton name="contact us" />
                  <NXTButtonOutline name="sign up" />
                  <NXTButton name="login" />
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
