"use client";
import React from "react";

function OfferSection() {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10 bg-parallex bg-fixed bg-cover bg-center ">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-5xl md:leading-tight text-white :text-white">
          We Provide Logistics Services Focused On Quality
          </h2>
          {/* <p className="mt-1 text-gray-600 :text-neutral-400">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            className="group  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition :hover:bg-white/10 :focus:bg-white/10 "
            href="#"
          >
            <div className="aspect-w-16 aspect-h-10  ">
              <img
                className="w-full object-cover rounded-xl"
                src="https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201_1280.jpg"
                alt="Blog Image"
              />
            </div>
            <h3 className="mt-5 text-xl text-orange-500 :text-neutral-300 :hover:text-white">
            We Provide Open And Covered Sheds With A- Grade R.C.C Construction
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-green-600 :text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>

          <a
            className="group  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition :hover:bg-white/10 :focus:bg-white/10"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://thumbs.dreamstime.com/b/forklift-driver-loading-package-boxes-cargo-container-cargo-trailer-truck-parked-loading-dock-warehouse-forklift-driver-213932718.jpg"
                alt="Blog Image"
              />
            </div>
            <h3 className="mt-5 text-xl text-orange-500 :text-neutral-300 :hover:text-white">
            Loading And Unloading Facility            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-green-600 :text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>

          <a
            className="group  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition :hover:bg-white/10 :focus:bg-white/10"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Blog Image"
              />
            </div>
            <h3 className="mt-5 text-xl text-orange-500 :text-neutral-300 :hover:text-white">
            Computerized Inventory
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-green-600 :text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default OfferSection;
