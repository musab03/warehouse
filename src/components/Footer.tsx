import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white w-full max-w-[100rem] mx-auto ">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>123 Warehouse Street</p>
            <p>Bond City, BC 45678</p>
            <p>Email: info@warehousebond.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Navigation Links */}
          {/* <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div> */}

          {/* Social Media */}
          {/* <div>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-75">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-75">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
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
