import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Privacy', href: '/privacy', current: false },
]

export const PrivacyHeroSection = () => {
  return (
    <>
    <div className="h-[80px]"></div>
      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div className="max-w-2xl py-5 mx-auto sm:py-16 ">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-orange-500 text-balance sm:text-4xl">
            Privacy <span className="text-orange-600">Policy</span>
            </h2>
            <p className="mt-4 text-base font-medium text-gray-600 text-pretty ">
            At AdToEarn, we value your privacy and work hard to keep your information safe. This Privacy Policy explains what data we collect, how we use it, and how we protect your information.

            </p>
            
            <nav aria-label="Breadcrumb" className="flex justify-center mt-6">
              <ol role="list" className="flex space-x-4 rounded-md bg-orange-50 border border-orange-200 px-6 shadow">
                <li className="flex">
                  <div className="flex items-center">
                    <Link to="/" className="text-orange-500 hover:text-orange-600">
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
                        className="h-full w-6 shrink-0 text-orange-300"
                      >
                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                      </svg>
                      <Link
                        to={page.href}
                        aria-current={page.current ? 'page' : undefined}
                        className="ml-4 text-sm font-medium text-orange-500 hover:text-orange-600"
                      >
                        {page.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};