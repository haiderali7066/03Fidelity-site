import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/img/uk-logo.svg"
                alt="Fidelity logo"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/services">
                <NavItem href="#services">Services</NavItem>
              </Link>
              <Link to="/partner">
                <NavItem href="#">Partner Programmes</NavItem>
              </Link>
              <Link to="/about">
                <NavItem href="#company">Company</NavItem>
              </Link>
              <Link to="/">
                <NavItem href="#support">Support</NavItem>
              </Link>
              <Link to="/contact">
                <NavItem href="#contact">Contact</NavItem>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services">
              <NavItem href="#services">Services</NavItem>
            </Link>
            <Link to="/partner">
              <NavItem href="#">Partner Programmes</NavItem>
            </Link>
            <Link to="/about">
              <NavItem href="#company">Company</NavItem>
            </Link>
            <Link to="/">
              <NavItem href="#support">Support</NavItem>
            </Link>
            <Link to="/contact">
              <NavItem href="#contact">Contact</NavItem>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
