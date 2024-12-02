"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [animate, setAnimate] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setAnimate(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 40) {
          clearInterval(interval);
          return 40;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-[url('https://cdn.pixabay.com/photo/2016/11/21/13/20/port-1845350_960_720.jpg')] bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" aria-hidden="true"></div>

      {/* Circular Progress */}
      <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full flex items-center justify-center">
       
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-white">{progress}</span>
          <span className="text-lg text-gray-200">Years</span>
        </div>
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center transform transition-all duration-1000 ease-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl leading-tight">
          Welcome to{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-500">
            Tulip
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Custom Bonded & Private Warehouse
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contactus"
            className="bg-gradient-to-r from-red-800 to-orange-500 hover:text-black hover:bg-white text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      
    </section>
  );
}
