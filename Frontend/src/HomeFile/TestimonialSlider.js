import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
// Import icons directly from your project instead of lucide-react
// You can replace these with your own icon components or use a library that's compatible with your React version

// Mock testimonial data
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Day Trader",
        company: "Independent",
        avatar: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740",
        rating: 5,
        text: "This trading platform completely transformed my day trading strategy. The intuitive interface and real-time analytics helped me increase my returns by 27% in just three months.",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Investment Analyst",
        company: "Global Investments",
        avatar: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-161709.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740",
        rating: 5,
        text: "The advanced charting tools and custom alerts have given me an edge in the market. I've been using it daily for 6 months and can't imagine trading without it now.",
    },
    {
        id: 3,
        name: "Priya Patel",
        role: "Forex Trader",
        company: "ForexMasters",
        avatar: "https://img.freepik.com/free-photo/lovely-model-with-interim-result-make-up-procedure_231208-3583.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740",
        rating: 4,
        text: "The currency pair analysis tools are exceptional. I've tried many platforms, but this one stands out for its accuracy and ease of use in volatile forex markets.",
    },
    {
        id: 4,
        name: "James Wilson",
        role: "Crypto Investor",
        company: "BlockchainVentures",
        avatar: "https://img.freepik.com/free-photo/3d-icon-travel-with-man_23-2151037420.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740",
        rating: 5,
        text: "The crypto portfolio tracking and automatic tax reporting features have saved me countless hours. This platform understands what modern traders need.",
    },
    {
        id: 5,
        name: "Elena Rodriguez",
        role: "Swing Trader",
        company: "TradePro Academy",
        avatar: "https://img.freepik.com/premium-photo/smiling-indian-businessman-png-round-badge-transparent-background_53876-953643.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid&w=740",
        rating: 4,
        text: "As someone who teaches trading strategies, I recommend this platform to all my students. The backtesting tools and educational resources are simply unmatched in the industry.",
    }
];

// Simple icon components to replace lucide-react
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
);

// Custom Testimonial Card Component
const TestimonialCard = ({ testimonial, isActive }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-white rounded-xl shadow-lg p-6 relative overflow-hidden ${isActive ? 'border-l-4 border-orange-500' : ''}`}
        >
            <div className="absolute top-4 right-4 text-orange-500 opacity-20">
                <QuoteIcon />
            </div>

            <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
            </div>

            <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-orange-500" : "text-gray-300"}>
                        <StarIcon />
                    </span>
                ))}
            </div>

            <p className="text-gray-700 italic">{testimonial.text}</p>
        </motion.div>
    );
};

// Main Testimonial Slider Component
const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    useEffect(() => {
        let interval;
        if (isAutoplay) {
            interval = setInterval(() => {
                if (direction === 1) {
                    goToNext();
                } else {
                    goToPrev();
                }
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoplay, activeIndex, direction]);

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setDirection(1);
    };

    const goToPrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setDirection(-1);
    };

    const goToSlide = (index) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const pauseAutoplay = () => setIsAutoplay(false);
    const resumeAutoplay = () => setIsAutoplay(true);
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className="w-full container mx-auto py-16 px-4" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
            <div className="text-center mb-12 flex flex-col justify-center items-center">

                <BlurText
                    text="Trusted by Traders Worldwide"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className=" flex justify-center px-4 py-1  text-orange-400 border border-orange-400 rounded-full w-fit text-3xl md:text-4xl font-bold mb-4"
                />


                
                <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    See what our community of professional traders and investors have to say about our platform
                </p>
            </div>

            <div className="relative">
                {/* Desktop View - 3 cards in view */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {[-1, 0, 1].map((offset) => {
                        const index = (activeIndex + offset + testimonials.length) % testimonials.length;
                        return (
                            <TestimonialCard
                                key={testimonials[index].id}
                                testimonial={testimonials[index]}
                                isActive={offset === 0}
                            />
                        );
                    })}
                </div>

                {/* Mobile View - Single card */}
                <div className="md:hidden">
                    <TestimonialCard
                        testimonial={testimonials[activeIndex]}
                        isActive={true}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8">
                    <button
                        onClick={goToPrev}
                        className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 transition-colors"
                    >
                        <span className="text-orange-500">
                            <ChevronLeftIcon />
                        </span>
                    </button>

                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goToNext}
                        className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 transition-colors"
                    >
                        <span className="text-orange-500">
                            <ChevronRightIcon />
                        </span>
                    </button>
                </div>
            </div>

            <div className="text-center mt-12">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
                >
                    Start Trading Today
                </motion.button>
            </div>
        </div>
    );
};

export default TestimonialSlider;