import React from "react";
import { PrivacyHeroSection } from "./PrivacyHeroSection";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";

const privacySections = [
  {
    id: 1,
    title: "Information We Collect",
    description: "We collect basic information when you use AdToEarn:",
    points: [
      { label: "Personal Information", details: "Name, email, phone number, and payment details when you sign up." },
      { label: "Usage Data", details: "Ad view history and earnings." },
      { label: "Device Information", details: "Device and browser type (for security and support)" }
    ]
  },
  {
    id: 2,
    title: "How We Use Your Information",
    description: "We use your information to:",
    points: [
      { details: "✅  Track your ad views and rewards" },
      { details: "✅  Improve the platform’s features" },
      { details: "✅  Communicate updates and support." },
      { details: "✅  Prevent fraud and fake activity" }
    ]
  },
  {
    id: 3,
    title: "How We Protect Your Data",
    description: "We protect your personal data using:",
    points: [
      { details: "🔒 Advanced encryption and secure servers" },
      { details: "🔒 Login monitoring and threat alerts" },
      { details: "🔒 Strict access controls for our team" }
    ]
  },
  {
    id: 4,
    title: "Third-Party Sharing",
    description: "We do not sell your personal data. We may share data only to:",
    points: [
      { details: "Show relevant ads" },
      { details: "Provide support via third-party tools" },
      { details: "Follow legal or security rules (if required)." }
    ]
  },
  {
    id: 5,
    title: "Policy Updates",
    description: "We may update this policy when needed.  You’ll always be informed of any important changes. Please check this page from time to time."
  }
];

export default function Privacy() {
  return (
    <>
      <Header />
      <PrivacyHeroSection />

      <div className="px-4 py-16 bg-gray-50">
        <div className="mx-auto container">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">
          Our Privacy Commitment
          </h2>

          <div className="space-y-8">
            {privacySections.map((section) => (
              <div
                key={section.id}
                className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-orange-500"
              >
                <h2 className="flex items-center text-xl font-semibold text-orange-500 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-orange-500 rounded-full shadow-md">
                    {section.id}
                  </span>
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-gray-700 mb-4">{section.description}</p>
                )}
                {section.points && (
                  <ul className="space-y-3 text-gray-600">
                    {section.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        {point.details.startsWith("✅") || point.details.startsWith("🔒") ? (
                          <>
                            <span className="mr-2">{point.details.charAt(0)}</span>
                            <span className="flex-1">{point.details.substring(2)}</span>
                          </>
                        ) : (
                          <div className="ml-4">
                            {point.label && <strong className="text-orange-500">{point.label}: </strong>}
                            {point.details}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200 text-center">
            <p className="text-gray-700">
              For any privacy concerns or questions, please contact our dedicated privacy team at{" "}
              <a href="mailto:privacy@AdToEarn.com" className="text-orange-500 font-medium hover:underline">
                privacy@AdToEarn.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}