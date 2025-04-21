














import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Contact', href: '/contact', current: false },
]

export const ContactHeroSection = () => {
  return (
    <>
      <div className="relative px-6 isolate pt-14 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-500 to-orange-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-3xl py-12 mx-auto sm:py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Connect with <span className="text-orange-500">Teirrax Today!</span>
            </h2>
            
            <p className="mt-6 text-lg font-medium text-gray-300 text-pretty">
              Have any questions? Need help with trading? Our team is always ready to help you. Reach out to us 
              for support, guidance, or partnership opportunities—we're just a message away!
            </p>
            
            <nav aria-label="Breadcrumb" className="flex justify-center mt-8">
              <ol role="list" className="flex items-center space-x-4 rounded-lg bg-gray-800/70 border border-gray-700 px-6 py-2 shadow-lg">
                <li className="flex">
                  <div className="flex items-center">
                    <Link to="/" className="text-gray-200 hover:text-orange-500 transition-colors duration-200">
                      <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                {pages.map((page) => (
                  <li key={page.name} className="flex justify-center">
                    <div className="flex items-center justify-center">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 44"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="h-full w-6 shrink-0 text-orange-500"
                      >
                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                      </svg>
                      <Link
                        to={page.href}
                        aria-current={page.current ? 'page' : undefined}
                        className="ml-4 text-sm font-medium text-gray-200 hover:text-orange-500 transition-colors duration-200"
                      >
                        {page.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex justify-center mt-8">
              <div className="relative inline-flex group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
                <Link to="/contact" className="relative flex items-center gap-2 px-8 py-3 bg-gray-900 rounded-lg leading-none text-orange-500 hover:text-white transition-colors duration-200">
                  Contact Us
                  <MdKeyboardDoubleArrowRight className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-600 to-orange-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </>
  );
};