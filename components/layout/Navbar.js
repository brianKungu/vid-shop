import React, { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
import { Link } from "react-scroll";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

export default function Navbar() {
  return (
    <Popover className="backdrop-blur-md drop-shadow shadow-darkBlue sticky top-0">
      <div className="px-6 mx-auto max-w-7xl md:px-2">
        <div className="flex items-center justify-between w-full py-6 border-b-2 border-lightBlue md:justify-start md:space-x-10">
          <div className="flex justify-start items-center gap-4">
            <Image
              src="/images/logo.jpeg"
              width={50}
              height={50}
              alt="vid shop logo image"
              priority
            />
            <h1 className="font-bold text-darkBlue uppercase">Vid shop</h1>
          </div>
          <div className="items-center justify-end flex-1 hidden space-x-4 md:flex">
            <Link
              to="how"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <span>How it works</span>
            </Link>
            <Link
              to="how"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <span>Products</span>
            </Link>
            <Link
              to="creators"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <span>Creators</span>
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <span>Contacts</span>
            </Link>
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
          className="inset-x-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="divide-y-2 divide-blue-100 rounded-md shadow-md bg-blue-100 ring-1 ring-blue-200 ring-opacity-5 z-10">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-darkBlue uppercase">VidShop</h3>
                <div className="-mr-2">
                  <Popover.Button className="popover-button">
                    <span className="sr-only">Close Menu</span>
                    <AiOutlineClose aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <div className="grid gap-y-8">
                  <Link
                    to="how"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span>How it works</span>
                  </Link>

                  <Link
                    to="creators"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span>Products</span>
                  </Link>
                  <Link
                    to="creators"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span>Creators</span>
                  </Link>
                  <Link
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span>Contacts</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
