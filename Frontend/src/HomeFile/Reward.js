import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Star, TrendingUp, Medal } from 'lucide-react';

export const Reward = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef(Array(4).fill().map(() => React.createRef()));

  const rewardsData = [
    {
      badge: '2024',
      icon: <Trophy size={24} className="text-white" />,
      title: 'Simple to Start',
      text: 'Sign up and start watching ads instantly.'
    },
    {
      badge: '98%',
      icon: <Star size={24} className="text-white" />,
      title: ' Works Everywhere',
      text: 'Earn from your phone, tablet, or computer—wherever you are.'
    },
    {
      badge: '140%',
      icon: <TrendingUp size={24} className="text-white" />,
      title: 'Get Paid Fast',
      text: 'Withdraw your earnings easily and securely.'
    },
    {
      badge: '2024',
      icon: <Medal size={24} className="text-white" />,
      title: 'Earn on Your Terms',
      text: 'No limits on how much you can earn—watch ads anytime'
    }
  ];

  const goToSlide = (slideIndex) => {
    let newIndex = slideIndex;
    if (newIndex >= rewardsData.length) newIndex = 0;
    if (newIndex < 0) newIndex = rewardsData.length - 1;
    setCurrentSlide(newIndex);
  };

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % rewardsData.length);
    }, 4000);
  };

  const resetAutoSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      startAutoSlide();
    }
  };

  const handleCardTilt = (e, index) => {
    const cardRef = cardRefs.current[index];
    if (!cardRef || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 25;
    const tiltY = (centerX - x) / 25;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
  };

  const handleCardLeave = (index) => {
    const cardRef = cardRefs.current[index];
    if (!cardRef || !cardRef.current) return;

    cardRef.current.style.transform = 'translateY(-4px)';
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = '';
      }
    }, 200);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused && slideInterval.current) {
      clearInterval(slideInterval.current);
    } else if (!isPaused) {
      startAutoSlide();
    }
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1);
        resetAutoSlideTimer();
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentSlide + 1);
        resetAutoSlideTimer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div
      className="relative overflow-hidden py-6 px-4 sm:py-8 md:py-12 lg:py-16 mx-auto w-full rounded-xl bg-gradient-to-br from-orange-50 to-white shadow-lg border border-orange-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-center mb-6 sm:mb-8 md:mb-10">
        Watch Ads.
        <span className="text-orange-500"> Get Paid.</span> It’s That Simple.
      </h3>

      {/* Mobile Indicator */}
      <div className="flex justify-center mb-4 md:hidden">
        <p className="text-sm text-gray-500">Slide {currentSlide + 1} of {rewardsData.length}</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {rewardsData.map((reward, index) => (
            <div key={index} className="min-w-full px-2 sm:px-4 md:px-6 box-border">
              <div
                ref={cardRefs.current[index]}
                className="relative bg-white rounded-xl p-6 sm:p-8 shadow-md text-center transition-all duration-300 overflow-hidden border border-orange-200 mx-auto max-w-3xl hover:shadow-xl"
                onMouseMove={(e) => handleCardTilt(e, index)}
                onMouseLeave={() => handleCardLeave(index)}
              >
                <div className="absolute top-3 right-3 bg-orange-500 text-white font-medium text-xs sm:text-sm py-1 px-3 rounded-full shadow-md">
                  {reward.badge}
                </div>

                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-orange-500 shadow-lg transition-all duration-300 hover:scale-110">
                  {reward.icon}
                </div>

                <h4 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">{reward.title}</h4>

                <div className="w-12 h-0.5 mx-auto mb-3 rounded bg-orange-500"></div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mx-auto">{reward.text}</p>

                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Navigation Arrows */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-orange-200 shadow-md flex items-center justify-center text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg z-10"
          onClick={() => {
            goToSlide(currentSlide - 1);
            resetAutoSlideTimer();
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-orange-200 shadow-md flex items-center justify-center text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg z-10"
          onClick={() => {
            goToSlide(currentSlide + 1);
            resetAutoSlideTimer();
          }}
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6">
        {rewardsData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 sm:mx-2 transition-all duration-300 
              ${currentSlide === index
                ? 'bg-orange-500 scale-125 shadow-md'
                : 'bg-gray-300 hover:bg-gray-400'}`}
            onClick={() => {
              goToSlide(index);
              resetAutoSlideTimer();
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Responsive controls for smaller screens */}
      <div className="flex justify-center items-center mt-4 sm:mt-6 md:hidden">
        <button
          className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md mx-2 hover:bg-orange-600 transition-colors"
          onClick={() => {
            goToSlide(currentSlide - 1);
            resetAutoSlideTimer();
          }}
        >
          <ChevronLeft size={16} className="mr-1" />
          <span>Prev</span>
        </button>

        <button
          className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md mx-2 hover:bg-orange-600 transition-colors"
          onClick={() => {
            goToSlide(currentSlide + 1);
            resetAutoSlideTimer();
          }}
        >
          <span>Next</span>
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};