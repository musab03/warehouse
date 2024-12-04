"use client";

import { useEffect, useState } from "react";

const ServicesPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation after the component has mounted
  }, []);
  return (
    <section className={`py-20 px-5 md:px-20 ${
      animate ? 'animate-slide-down' : ''
    }`}>
      <div id="acre-land" className="service-section mb-10">
        <h2 className="text-3xl font-bold">2 Acre Land</h2>
        <p>
          This expansive 2-acre property offers the perfect space for various
          business operations. Whether you need outdoor storage, parking, or
          open-air activities, this secure, well-maintained space is designed to
          support your growth and provide the room you need for your endeavors.
        </p>
      </div>

      <div id="rcc-shed" className="service-section mb-10">
        <h2 className="text-3xl font-bold">70,000 SQ FT RCC Shed</h2>
        <p>
          Our 70,000 sq ft RCC shed is built with industrial-grade materials to
          accommodate a variety of business needs. Whether it's manufacturing,
          warehousing, or logistics, this space provides the infrastructure and
          flexibility to scale your operations.
        </p>
      </div>

      <div id="open-area" className="service-section mb-10">
        <h2 className="text-3xl font-bold">35,000 SQ FT Open Area</h2>
        <p>
          This open space of 35,000 sq ft is perfect for staging events,
          managing logistics, or providing additional workspace. It offers a
          flexible solution that adapts to your unique business requirements, all
          within a safe and secure environment.
        </p>
      </div>

      <div id="security" className="service-section mb-10">
        <h2 className="text-3xl font-bold">24/7 Armed & Unarmed Security</h2>
        <p>
          Your peace of mind is our top priority. With professional, 24/7
          security services, both armed and unarmed, we ensure the safety of your
          property, assets, and personnel at all times. Our security team is
          well-trained and highly responsive to any situation.
        </p>
      </div>

      <div id="cctv" className="service-section mb-10">
        <h2 className="text-3xl font-bold">CCTV Surveillance</h2>
        <p>
          Our advanced CCTV surveillance system is strategically placed
          throughout the facility to monitor all key areas. This provides
          additional security and allows you to keep an eye on your property from
          anywhere, anytime.
        </p>
      </div>

      <div id="fire-safety" className="service-section mb-10">
        <h2 className="text-3xl font-bold">Fire Safety Infrastructure</h2>
        <p>
          The facility is equipped with state-of-the-art fire safety systems,
          including fire extinguishers and emergency protocols, to ensure that
          you’re always prepared in case of an emergency. Your safety is always
          our top priority.
        </p>
      </div>

      <div id="loading-facility" className="service-section mb-10">
        <h2 className="text-3xl font-bold">Loading & Unloading Facility</h2>
        <p>
          Our loading and unloading facilities are equipped with ramps and
          heavy-duty equipment to make your logistics process smoother. This
          enables efficient handling of goods and ensures that your operations
          run without delays.
        </p>
      </div>

      <div id="lifter-facility" className="service-section mb-10">
        <h2 className="text-3xl font-bold">On-Site Lifter Facility</h2>
        <p>
          Our on-site lifter facility is designed to assist with the heavy
          lifting of materials, goods, and equipment. This ensures that your team
          can safely and efficiently handle any large items without additional
          outsourcing.
        </p>
      </div>
    </section>
  );
};

export default ServicesPage;
