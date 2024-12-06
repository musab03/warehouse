"use client"
import React from "react";
import { FaLandmark, FaWarehouse, FaMapMarkerAlt, FaUserShield, FaCamera, FaFireExtinguisher, FaTruckLoading, FaHandHoldingUsd } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { GiCctvCamera } from "react-icons/gi";

const features = [
  {
    title: "2 Acre Land",
    description: "Our facility is spread over 2 acres of secure and well-maintained land.",
    icon: <FaLandmark size={36} className="text-primary" />,
    link: "#acre-land",
  },
  {
    title: "70,000 SQ FT RCC Shed",
    description: "We offer a spacious 70,000 sq ft RCC shed for industrial or storage needs.",
    icon: <FaWarehouse size={36} className="text-primary" />,
    link: "#rcc-shed",
  },
  {
    title: "35,000 SQ FT Open Area",
    description: "Ample open space available for outdoor activities, parking, or logistics.",
    icon: <FaMapMarkerAlt size={36} className="text-primary" />,
    link: "#open-area",
  },
  {
    title: "24/7 Armed & Unarmed Security",
    description: "Our premises are protected round the clock by armed and unarmed security guards.",
    icon: <FaUserShield size={36} className="text-primary" />,
    link: "#security",
  },
  {
    title: "CCTV Facility",
    description: "State-of-the-art CCTV surveillance systems cover the entire premises.",
    icon: <GiCctvCamera size={36} className="text-primary" />,
    link: "#cctv",
  },
  {
    title: "Fire Extinguisher Available",
    description: "Our facility is equipped with fire extinguishers to ensure safety.",
    icon: <FaFireExtinguisher size={36} className="text-primary" />,
    link: "#fire-extinguisher",
  },
  {
    title: "Loading & Unloading Facility",
    description: "We provide efficient loading and unloading facilities for all types of vehicles.",
    icon: <FaTruckLoading size={36} className="text-primary" />,
    link: "#loading-facility",
  },
  {
    title: "Lifter Facility",
    description: "On-site lifters are available to assist with heavy equipment and materials.",
    icon: <FaHandHoldingUsd size={36} className="text-primary" />,
    link: "#lifter-facility",
  },
];

const ServiceCard = ({ title, description, icon, link }:any) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/servicepage${link}`);
  };

  return (
    <div
      onClick={handleRedirect}
      className="w-full px-4 md:w-1/2 lg:w-1/3 cursor-pointer transition-transform transform  hover:scale-105 md:py-5 py-2"
    >
      <div className="mb-10 flex h-full flex-col rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:bg-gradient-to-bl from-red-600 via-transparen">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary bg-opacity-20">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-semibold text- :text-white">
          {title}
        </h3>
        <p className="text-base text-body-color :text--6">{description}</p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section className=" mx-auto flex  w-full items-center justify-center">
      <div className="md:pt-5 container  ">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12  text-center lg:mb-5">
              <span className="mb-2 mt-5 md:mt-0 block text-xl font-semibold text-primary">
                Our Facilities
              </span>
              <h2 className="mb-3 text-3xl font-bold   sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className=" text-lg text-body-color ">
                Explore our wide range of facilities designed to meet your business needs.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap">
          {features.map((feature, index) => (
            <ServiceCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
