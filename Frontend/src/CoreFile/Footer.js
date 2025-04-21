import React from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { FaTwitterSquare, FaAddressBook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white overflow-hidden relative text-black pb-10 pt-20 px-4 sm:px-6">
      {/* Newsletter Section */}
      <div className="space-y-6 flex flex-col justify-center mb-16 sm:mb-24 lg:mb-32 px-4">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-30 max-w-4xl mx-auto text-center font-medium tracking-tight leading-tight mb-6">
          It's easy to get started. Start now.
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center w-full max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full z-30 md:w-96
            rounded-lg
            border-2 border-orange-400
            bg-white/20
            text-black
            text-lg
            font-normal
            placeholder-black
            leading-normal
            px-6 py-4
            h-16
            transition duration-300
            focus:ring-2 focus:ring-white
            outline-none"
          />
          <button className="bg-white text-orange-500 font-medium text-lg px-6 sm:px-8 py-4 rounded-lg w-full md:w-auto transition-all duration-300 hover:bg-orange-50 shadow-lg">
            Start For Free
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16 sm:mb-24">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link to="/" className="inline-block">
                <div className="mb-6">
                  <img
                    src="/ADTOEARN.png"
                    className="h-auto w-16"
                    alt="Ad to future"
                  />
                </div>
              </Link>
            </div>
            <p className="mt-4 text-lg font-normal leading-relaxed text-black/90">
            AdToEarn — Helping Everyone Earn Money Online by Watching One Ad at a Time.

            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 border-b border-orange-400 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/Blogs"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 border-b border-orange-400 pb-2 inline-block">More Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/Career"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/Price"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Price
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-500 text-black/90 text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 text-sm">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 border-b border-orange-400 pb-2 inline-block">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="mr-3 p-2 bg-white text-orange-500 rounded-lg shadow-md group-hover:bg-orange-100 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium group-hover:text-orange-500 transition-colors duration-300">info@AdToEarn.com</p>
              </div>
              <div className="flex items-center group">
                <div className="mr-3 p-2 bg-white text-orange-500 rounded-lg shadow-md group-hover:bg-orange-100 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium group-hover:text-orange-500 transition-colors duration-300">support@AdToEarn.com</p>
              </div>
              <div className="flex items-start group">
                <div className="mt-1 mr-3 p-2 bg-white text-orange-500 rounded-lg shadow-md group-hover:bg-orange-100 transition-colors duration-300">
                  <FaAddressBook className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium group-hover:text-orange-500 transition-colors duration-300">
                  AdToEarn, Level 21 API Tower Sheikh Zayed Road (Dubai - UAE)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-orange-400/50 mt-8 pt-6">
          <p className="text-base font-medium text-black/90">
          © 2025 AdToEarn. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="https://www.facebook.com/profile.php?id=61574923178676"
              className="bg-white text-orange-500 p-2 rounded-lg hover:bg-orange-100 transition-colors duration-300 shadow-md"
              target="blank"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link
              to="https://www.instagram.com/AdToEarn/"
              className="bg-white text-orange-500 p-2 rounded-lg hover:bg-orange-100 transition-colors duration-300 shadow-md"
              target="blank"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              to="https://x.com/AdToEarn"
              className="bg-white text-orange-500 p-2 rounded-lg hover:bg-orange-100 transition-colors duration-300 shadow-md"
              target="blank"
              aria-label="Twitter"
            >
              <FaTwitterSquare className="h-5 w-5" />
            </Link>
            <Link
              to="https://t.me/AdToEarn"
              className="bg-white text-orange-500 p-2 rounded-lg hover:bg-orange-100 transition-colors duration-300 shadow-md"
              target="blank"
              aria-label="Telegram"
            >
              <FaTelegram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background Shape */}
      <div className="pointer-events-none">
        <img
          className="absolute top-0 left-0 z-0 opacity-20 w-full"
          src="https://finestwp.co/demos/html/fastland/image/home-1/footer-shape.png"
          alt="Background shape"
        />
      </div>
    </footer>
  );
};

export default Footer;