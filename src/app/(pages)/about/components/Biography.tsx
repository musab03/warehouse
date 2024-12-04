"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      once: true, // Whether animation should happen only once
    });
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
    <section className="py-20 px-5 md:px-20 max-w-[100rem] mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div data-aos="fade-right" className="space-y-6">
          <h1 className="text-4xl font-bold">Hello, We are Tulip Bond</h1>
          <p className="text-gray-600">
            At Tulip Custom Bonded Warehouse, we&apos;re more than just a place to
            store your products—we&apos;re here to be your trusted partner in
            fulfillment. We know how challenging it can be to keep up with a
            growing market, which is why we&apos;ve designed our services to handle
            everything from large, bulky shipments to delicate, small-scale
            items—all in a secure and reliable environment. Our goal is simple:
            to seamlessly integrate with your brand and become the fulfillment
            partner you can count on. Think of us as the powerhouse working
            behind the scenes, so you can focus on growing your business. With a
            skilled team, cutting-edge technology, and years of industry
            experience, we&apos;re committed to helping you not just meet, but exceed
            your customers' expectations. At Tulip, we&apos;re here to help you grow
            and thrive.
          </p>
          <div className="text-5xl font-bold text-blue-600">
            {progress}{" "}
            <span className="text-2xl text-gray-600">YEARS OF EXPERIENCE</span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="space-y-10">
          <div
            data-aos="fade-up"
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="https://img.freepik.com/premium-photo/photo-portrait-happy-warehouse-workers-warehouse-management-team-working_763111-72185.jpg"
              alt="TechWave Solutions Team"
              className="w-full object-cover"
            />
          </div>
          <div
            data-aos="fade-up"
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="https://img.freepik.com/premium-photo/professional-warehouse-worker-team-celebrating-success-warehouse-factory-cheerful-workers-having-fun-work-happiness-job-concept-success-happy-team-enjoying-their-successful-job_73899-12189.jpg"
              alt="TechWave Solutions Team"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
