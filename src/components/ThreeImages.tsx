"use client"
import React from "react";

function ThreeImages() {
  return (
    <>
      <div className="max-w-[100rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-4">
                <img
                  className="rounded-xl  "
                  src="https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Features Image"
                />
              </div>

              <div className="col-span-3 ">
                <img
                  className="rounded-xl"
                  src="https://cdn.pixabay.com/photo/2016/09/01/15/19/stevedore-1636392_960_720.jpg"
                  alt="Features Image"
                />
              </div>

              <div className="col-span-5">
                <img
                  className="rounded-xl"
                  src="https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Features Image"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 :text-neutral-200">
                Streamlined Tools for Optimizing Warehouse Operations
                </h2>
                <p className="text-gray-500 :text-neutral-500">
                Utilize our advanced solutions to enhance efficiency, reduce downtime, and maximize productivity. Share your achievements seamlessly.
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 :bg-blue-800/30 :text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 :text-neutral-500">
                      <span className="font-bold">Focus on Growth </span> – Leave the Routine to Us
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 :bg-blue-800/30 :text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 :text-neutral-500">
                    Save Thousands of Hours
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 :bg-blue-800/30 :text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 :text-neutral-500">
                    Automate repetitive tasks and streamline workflows to focus on scaling your warehouse operations{" "}
                      <span className="font-bold">efficiently</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeImages;
