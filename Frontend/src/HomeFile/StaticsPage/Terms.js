import React from 'react';
import { TermsHeroSection } from './TermsHeroSection';
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";

export const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <TermsHeroSection />
      
      <div className="container mx-auto py-12 px-4 md:px-8 flex-grow">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-orange-500">Terms and Conditions</h2>
          
          <div className="space-y-10">
            {/* Trading & Transactions Section */}
            <section className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500 border-b border-orange-300 pb-2">
                Trading & Transactions
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>All earnings are based on valid ad views only.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>Users must not use bots or automated tools.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>Payouts follow our withdrawal rules and timing.


</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>Any false activity may lead to account suspension.</p>
                </li>
              </ul>
            </section>

            {/* Account Security Section */}
            <section className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500 border-b border-orange-300 pb-2">
                Account Security
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>Keep your login details safe and private.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>You are responsible for all activity in your account.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>Do not share your account with others.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>Report any suspicious activity right away.</p>
                </li>
              </ul>
            </section>

            {/* Limitation of Liability Section */}
            <section className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500 border-b border-orange-300 pb-2">
                Limitation of Liability
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>AdToEarn is not responsible for losses from misuse.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>We do not promise guaranteed earnings                 .</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>Platform access may change or stop at any time.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✅</span>
                  <p>Use the service at your own risk and judgment.</p>
                </li>
              </ul>
            </section>
            
            {/* 
             We encourage all users to stay informed about market conditions and carefully monitor their trading activities.           
            */}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};