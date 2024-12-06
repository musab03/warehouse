import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-500 text-white w-full max-w-[100rem] mx-auto ">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="text-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>Plot # F, 237, Metroville Labor Colony Sindh Industrial Trading Estate</p>
            <p>Karachi City</p>
            <p>Email: info@tulipbond.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-8 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Warehouse & Bond. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
