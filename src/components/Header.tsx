"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Get current route

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if link is active
  const isActive = (path:any) => pathname === path;

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change header on scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <img alt="Logo" src="/logo.svg" className="h-6 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12 cursor-pointer">
          <Link
            href="/"
            className={`text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-red-600 ${
              isActive("/")
                ? "text-red-600"
                : isScrolled
                ? "text-black"
                : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-red-600 ${
              isActive("/about")
                ? "text-red-600"
                : isScrolled
                ? "text-black"
                : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-red-600 ${
              isActive("/services")
                ? "text-red-600"
                : isScrolled
                ? "text-black"
                : "text-white"
            }`}
          >
            Services
          </Link>
          <Link
            href="/getquote"
            className={`text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-red-600 ${
              isActive("/getquote")
                ? "text-red-600"
                : isScrolled
                ? "text-black"
                : "text-white"
            }`}
          >
            Get a Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Home</span>
              <img
                alt="Logo"
                src="https://cdn.brandfetch.io/idfBvvT77O/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${
                    isActive("/") ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${
                    isActive("/about") ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${
                    isActive("/services") ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/getquote"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold ${
                    isActive("/getquote") ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
