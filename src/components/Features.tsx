import React from 'react';
import { FaWarehouse, FaTv, FaFireExtinguisher, FaTruckLoading, FaMapMarkedAlt, FaClock } from "react-icons/fa";
import { GiSecurityGate, GiForklift } from "react-icons/gi";

const WarehouseFeatures: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Warehouse Features</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Our warehouse is situated at SITE Ltd, a prime location just 7 miles from the custom house. 
            With 40 years of operation, we provide both "Public Custom Bonded Warehouse" and "Public Private Warehouse" services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature Card */}
          <div className="flex items-center space-x-4">
            <FaMapMarkedAlt className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">Prime Location</h3>
              <p className="text-sm">Located 7 miles from the custom house</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaWarehouse className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">Spacious Facility</h3>
              <p className="text-sm">2-acre land with a 70,000 SQ FT RCC shed</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaClock className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">40 Years of Experience</h3>
              <p className="text-sm">Serving the industry for over 4 decades</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaTv className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">CCTV Surveillance</h3>
              <p className="text-sm">24/7 monitoring for security</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <GiSecurityGate className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">Round-the-Clock Security</h3>
              <p className="text-sm">Armed and unarmed guards available</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaFireExtinguisher className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">Fire Safety</h3>
              <p className="text-sm">Fire extinguishers available</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaTruckLoading className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">Loading & Unloading</h3>
              <p className="text-sm">Facilities for smooth operations</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <GiForklift className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">Lifter Facility</h3>
              <p className="text-sm">For handling heavy items efficiently</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaWarehouse className="text-white text-5xl" />
            <div>
              <h3 className="text-xl font-semibold">Open Storage Area</h3>
              <p className="text-sm">35,000 SQ FT open area for versatile use</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseFeatures;
