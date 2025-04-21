import React, { useState, useEffect, useRef } from "react";

export const Savemoney = () => {
  // Refs for intersection observer
  const sectionRef = useRef(null);
  
  // States
  const [isVisible, setIsVisible] = useState(false);
  const [countValues, setCountValues] = useState({
    revenue: 0,
    otherSavings: 0,
    fastlandSavings: 0
  });

  // Final values for the counters
  const finalValues = {
    revenue: 12420,
    otherSavings: 870,
    fastlandSavings: 2340,
  };

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Use Intersection Observer to trigger animations when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in ms
    const frameRate = 16; // Update every 16ms (roughly 60fps)
    const steps = duration / frameRate;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      if (progress >= 1) {
        setCountValues({
          revenue: finalValues.revenue,
          otherSavings: finalValues.otherSavings,
          fastlandSavings: finalValues.fastlandSavings
        });
        clearInterval(interval);
        return;
      }
      
      // Easing function for smoother animation
      const easeOutQuad = t => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      setCountValues({
        revenue: Math.round(easedProgress * finalValues.revenue),
        otherSavings: Math.round(easedProgress * finalValues.otherSavings),
        fastlandSavings: Math.round(easedProgress * finalValues.fastlandSavings)
      });
    }, frameRate);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-full h-64 bg-gradient-to-b from-orange-50 to-transparent opacity-70"></div>
      <div className="hidden lg:block absolute right-10 top-20">
        <svg width="120" height="120" viewBox="0 0 200 200" className="text-orange-200 opacity-20">
          <path fill="currentColor" d="M44.3,-76.1C58.1,-69.2,70.4,-58.2,79.1,-44.4C87.7,-30.5,92.6,-13.8,91.9,2.8C91.1,19.3,84.5,35.9,74.9,51.2C65.2,66.5,52.4,80.6,37.1,86.3C21.8,92,4.9,89.3,-11.3,85C-27.5,80.7,-43,74.7,-55.7,64.5C-68.4,54.3,-78.3,39.8,-83.8,23.7C-89.4,7.7,-90.6,-9.9,-85.2,-25.2C-79.8,-40.4,-67.9,-53.2,-54.1,-60.2C-40.3,-67.1,-24.7,-68.3,-8.8,-74.3C7.1,-80.3,23.4,-91.3,38.6,-87.5C53.8,-83.7,68,-83.1,44.3,-76.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="hidden lg:block absolute left-1/4 bottom-10">
        <svg width="80" height="80" viewBox="0 0 200 200" className="text-orange-300 opacity-20">
          <path fill="currentColor" d="M42.7,-62.2C54.9,-54.3,64,-41.5,72.1,-26.9C80.1,-12.4,87.2,3.9,84.4,18.5C81.7,33.1,69.1,46,55.1,54.3C41.1,62.7,25.7,66.5,9.7,70.2C-6.3,74,-22.9,77.6,-36.5,71.9C-50.1,66.2,-60.8,51.1,-68.4,35C-76,18.9,-80.7,1.7,-77.2,-13.7C-73.7,-29,-62.1,-42.5,-48.8,-50.5C-35.4,-58.5,-20.4,-61,-6.2,-61.9C8,-62.8,16,-63.2,26.9,-63.9C37.8,-64.7,50.7,-65.9,42.7,-62.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content area */}
          <div className="w-full lg:w-1/2">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-4">AdToEarn Benefits</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start <span className="text-orange-500">Earning </span> with AdToEarn? 
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Don’t let your screen time go to waste. With AdToEarn, you can turn simple ad views into real money—quickly and easily. Whether you have a few minutes or a few hours, it’s the perfect way to earn on your own terms. Join thousands already getting paid to watch ads.

              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
                Join Now & Start Earning
                </a>
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium rounded-lg transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Right earnings comparison */}
          <div className="w-full lg:w-1/2">
            <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <h3 className="text-xl font-bold text-white">Watch Ads. Get Paid. It’s That Simple.</h3>
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              
              {/* Total earnings */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Total earnings by our users</p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">${formatNumber(countValues.revenue)}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              {/* Average earnings on other platforms */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Average earnings on other platforms</p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">${formatNumber(countValues.otherSavings)}</p>
                  </div>  
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: `${(countValues.otherSavings / countValues.fastlandSavings) * 100}%` }}></div>
                </div>
              </div>
              
              {/* Average earnings on AdToFuture */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Average earnings on AdToEarn</p>
                    <p className="text-2xl md:text-3xl font-bold text-orange-500">${formatNumber(countValues.fastlandSavings)}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="bg-orange-50 text-orange-700 text-sm font-medium py-2 px-4 rounded-lg inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    <span>{Math.round((countValues.fastlandSavings / countValues.otherSavings - 1) * 100)}% higher than competitors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};