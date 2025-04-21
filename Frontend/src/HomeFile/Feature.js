import React, { useState, useRef, useEffect } from 'react';
import { BarChart4, Flag, PieChart, Star } from 'lucide-react';

export const Feature = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Content data for each tab
  const tabContent = {
    analytics: {
      icon: <PieChart size={24} className="text-white" />,
      title: "Earning Tracker",
      items: [
        {
          number: "01",
          title: "Safe & Secure",
          description: "Your data and earnings are always protected with top-level security"
        },
        {
          number: "02",
          title: " Real Earnings",
          description: " Get paid for every ad you watch—no fake promises or delays."
        }
      ]
    },
    advertisement: {
      icon: <Flag size={24} className="text-white" />,
      title: "Ad Engagement",
      items: [
        {
          number: "03",
          title: "100% Free to Use",
          description: " No joining fees, no subscriptions—start earning without spending a rupee"
        },
        {
          number: "04",
          title: "Accessible Anywhere",
          description: " Use AdToEarn on your phone, laptop, or tablet—anytime, anywhere"
        }
      ]
    },
    salesReport: {
      icon: <BarChart4 size={24} className="text-white" />,
      title: "Referral Insights",
      items: [
        {
          number: "05",
          title: "Instant Tracking",
          description: " Live dashboard shows your ad views and earnings in real time."
        },
        {
          number: "06",
          title: "Referral Bonuses",
          description: "Invite friends and earn extra through our simple referral system."
        }
      ]
    }
  };

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
  
  return (
    <div className="relative overflow-hidden bg-white  py-16 md:py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-400 opacity-20"></div>
      <div className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-orange-300 opacity-10"></div>
      <div className="absolute -bottom-32 right-1/4 w-80 h-80 rounded-full bg-orange-400 opacity-10"></div>
      
      <div className="relative z-10 container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Why Choose <span className="text-orange-500">AdToEarn?</span>?
          </h2>
          <p className={`text-black max-w-2xl mx-auto text-lg md:text-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          We make it easy for anyone to earn money online—no investment, no tricks. With trusted features and real payouts, AdToEarn stands out from the rest.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-3">
          {Object.keys(tabContent).map((tab, index) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-white text-orange-600 shadow-lg transform scale-105' 
                : 'bg-orange-600 text-white hover:bg-orange-700'
              } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className={`rounded-full p-1 ${activeTab === tab ? 'bg-orange-100' : 'bg-orange-500'}`}>
                {tabContent[tab].icon}
              </span>
              <span>{tabContent[tab].title}</span>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
            {tabContent[activeTab].items.map((item, index) => (
              <div 
                key={index}
                className={`bg-white bg-opacity-10 border backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:bg-opacity-15 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {item.number}
                  </div>
                  <Star className="text-yellow-300 ml-4" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Action Button */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-white text-orange-600 hover:bg-orange-100 transition-all duration-300 font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Earning Today
          </button>
        </div>
      </div>
    </div>
  );
};