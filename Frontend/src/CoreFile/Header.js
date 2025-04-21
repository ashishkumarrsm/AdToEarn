   
    
    import { useState, useEffect } from "react";
    import {
      Popover,
      PopoverButton,
      PopoverGroup,
      PopoverPanel,
    } from "@headlessui/react";
    import {
      Bars3Icon,
      ChevronDownIcon,
      XMarkIcon,
    } from "@heroicons/react/24/outline";
    import {Link} from "react-router-dom"

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    // Handle scroll effect
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    // Sample data for the dropdown menus


  

  return (
    <>
 


      <header
        className={` fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white text-black backdrop-blur-md shadow-lg py-2  "
            : "bg-white py-4 text-black"
        }`}
      >
        <nav
          aria-label="Global"
          className="mx-auto flex  items-center justify-between px-6 lg:px-12"
        >
          {/* Logo */}
          <div className="flex item-center gap-20">
            <div className="flex lg:flex-1">
              <a
                href="#"
                className="flex items-center space-x-2 transition duration-300 ease-in-out hover:opacity-80"
              >
                <div className=" p-2 ">
                  <img
                    alt="ADTOEARN"
                    src="/ADTOEARN.png"
                    className="h-auto w-16  bg-transparent items-center  flex "
                  />
                </div>
              </a>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-8 lg:items-center">
              <a
                href="/"
                className="text-lg   
            transition duration-300 ease-in-out"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-lg   
            transition duration-300 ease-in-out"
              >
                About US
              </a>
              <a
                href="/Blogs"
                className="text-lg   
            transition duration-300 ease-in-out"
              >
                Blogs
              </a>
              {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className={`flex items-center gap-x-1 text-lg 
                  ${open ? '' : ''} 
                   transition duration-300 ease-in-out
                  focus:outline-none`}>
                    Product
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl 
                    bg-white shadow-xl ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 
                    data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    
                    <div className="p-4">
                      
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 text-lg hover:bg-gray-50 
                          transition duration-300 ease-in-out"
                        >
                          <div className="mt-1 flex size-10 flex-none items-center justify-center rounded-lg 
                          bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md
                          transition duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg">
                            <item.icon aria-hidden="true" className="size-5" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900 
                            transition duration-300 ease-in-out">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                   
                  </PopoverPanel>
                </>
              )}
            </Popover> */}
              {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className={`flex items-center gap-x-1 text-lg 
                  ${open ? '' : ''} 
                   transition duration-300 ease-in-out
                  focus:outline-none`}>
                    Portfolios
                    <ChevronDownIcon aria-hidden="true" className={`size-4 flex-none transition-transform duration-200 ${open ? 'rotate-180 text-indigo-600' : 'text-gray-400'}`} />
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl 
                    bg-white shadow-xl ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 
                    data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    
                    <div className="p-4">
                      
                      {Portfolios.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 text-lg hover:bg-gray-50 
                          transition duration-300 ease-in-out"
                        >
                          <div className="mt-1 flex size-10 flex-none items-center justify-center rounded-lg 
                          bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md
                          transition duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg">
                            <item.icon aria-hidden="true" className="size-5" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900 
                            transition duration-300 ease-in-out">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                   
                  </PopoverPanel>
                </>
              )}
            </Popover> */}

              <a
                href="/Carrer"
                className="text-lg   
            transition duration-300 ease-in-out"
              >
                Career
              </a>
              <a
                href="/Price"
                className="text-lg   
            transition duration-300 ease-in-out"
              >
                Price
              </a>

              {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className={`flex items-center gap-x-1 text-lg 
                  ${open ? '' : ''} 
                   transition duration-300 ease-in-out
                  focus:outline-none`}>
                   Contact
                    <ChevronDownIcon aria-hidden="true" className={`size-4 flex-none transition-transform duration-200 ${open ? 'rotate-180 text-indigo-600' : 'text-gray-400'}`} />
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-80 rounded-2xl bg-white p-4 shadow-xl 
                    ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 
                    data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {company.map((item) => (
                      <div key={item.name} className="relative rounded-lg p-3 hover:bg-gray-50 
                      transition duration-300 ease-in-out">
                        <a href={item.href} className="block text-lg text-gray-900 
                         transition duration-300 ease-in-out">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                      </div>
                    ))}
                  </PopoverPanel>
                </>
              )}
            </Popover> */}
            </PopoverGroup>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center rounded-full p-2 
              text-gray-600 bg-white/80 backdrop-blur-sm shadow-sm border border-gray-200
              hover:bg-indigo-50  transition duration-300 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-5" />
            </button>
          </div>

          {/* Desktop navigation */}

          {/* Login buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
            <Link
              to="/user/login"
              className="text-lg font-mediumtext-gray-600  
            transition duration-300 ease-in-out"
            >
              Log in
            </Link>
            <a
              href="/registration"
              className="inline-flex items-center justify-center  bg-gray-200 
            px-4 py-2 text-lg text-black font-semibold shadow-sm hover:shadow-lg hover:text-gray-600 
            "
            >
              Registration
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between px-6 py-6">
                <a href="#" className="flex items-center space-x-2">
                  <div className="  ">
                    <img
                      alt="adtofuture"
                      src="/adtofuture.png"
                      className="h-auto w-12"
                    />
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full p-2 text-gray-600 bg-gray-100 hover:bg-gray-200"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="size-5" aria-hidden="true" />
                </button>
              </div>
              <div className=" divide-y divide-gray-900 px-6 py-4 space-y-2">
                <a
                  href="/"
                  className="text-lg text-gray-900   
            transition duration-300 ease-in-out"
                >
                  Home
                </a>
                <div className="py-4">
                  <div className="space-y-1">
                    <a
                      href="/aboutUs"
                      className="text-lg   
            transition duration-300 ease-in-out"
                    >
                      About US
                    </a>
                  </div>
                  <div className="space-y-1">
                    <a
                      href="/Blogs"
                      className="text-lg   
            transition duration-300 ease-in-out"
                    >
                      Blogs
                    </a>
                  </div>
                </div>
                <div className="py-4">
                  <div className="space-y-4">
                    <a
                      href="/Career"
                      className="text-lg   
            transition duration-300 ease-in-out"
                    >
                      Career
                    </a>

                    {/* {company.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-lg text-gray-900 "
                      >
                        {item.name}
                      </a>
                    ))} */}
                  </div>
                  <div className="space-y-4">
                    <a
                      href="/Price"
                      className="text-lg   
            transition duration-300 ease-in-out"
                    >
                      Price
                    </a>

                    {/* {company.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-lg text-gray-900 "
                      >
                        {item.name}
                      </a>
                    ))} */}
                  </div>
                </div>
                <div className="py-6 space-y-4">
                  <a
                    href="/user/login"
                    className="block text-center w-full rounded-md bg-white px-3 py-2 text-base 
                    text-orange-600 hover:bg-indigo-50 border border-orange-600 shadow-sm"
                  >
                    Log in
                  </a>
                  <a
                    href="?Login"
                    className="block text-center w-full rounded-md bg-gradient-to-r from-orange-600 to-orange-400 
                    px-3 py-2.5 text-base text-white shadow-sm hover:from-orange-500 hover:to-orange-800"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
  

    
    </>
  )
}
export default Header