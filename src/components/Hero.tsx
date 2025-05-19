import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Background3D from "./Background3D";

const Hero = () => {
  // Slider images - replace with your actual image paths
  const sliderImages = [
    "https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2FMI_Store_Cover_1x.png?alt=media&token=72b3be5d-b41e-4763-b2b6-87392ca4a1c6",
    "https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2FKdona.png?alt=media&token=9776ee89-8c6f-4e3a-8c4e-c0c12f4a44d6",
    "https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2Fsripay.png?alt=media&token=519e6fb7-c975-4671-8456-a50aaa6587b1",
  ];
  const sliderLable =[
    "MI Store",
    "Kdona",
    "SRI Pay",
  ]

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white text-slate-900 justify-center flex items-center"
    >
      <Background3D />
      {/* Animated background effect - light themed gradient mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,128,0.05),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(64,93,230,0.08),transparent_50%)]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBINjBWNjBIMHoiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="container max-w-6xl mx-auto px-4 pt-32 pb-24 relative z-10 flex flex-col lg:flex-col items-center gap-16">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Main Headline with animated typing effect */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <div className="m-8 p-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2Fblack%20logo%20eith%20boswin.png?alt=media&token=17bebd6c-bb39-4aa2-9559-96cb8b7aafc1"
                alt=""
              />
            </div>
          </h1>
        </div>

        {/* Right side - Image Slider */}
        <div className="w-full lg:w-2/2">
          <div className="relative">
            {/* Soft shadow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-200/40 to-blue-200/40 rounded-3xl transform rotate-3 scale-105 blur-sm"></div>

            <div className="relative bg-white border border-gray-100 rounded-2xl p-2 overflow-hidden shadow-xl">
              {/* Image slider container */}
              <div className="relative overflow-hidden rounded-xl">
                {/* Slider images */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sliderImages.map((img, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div>
                        <div className="absolute inset-0"></div>
                      </div>
                      <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[400px]  sm:h-[600px]"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation arrows */}
                {/* <button
                  onClick={goToPrevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white focus:outline-none transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-700" />
                </button>
                <button
                  onClick={goToNextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white focus:outline-none transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-slate-700" />
                </button> */}

                {/* Slide indicators */}
                <div className="absolute top-[50%] left-1/2">
                  {sliderLable.map((img, index) => (
                    <h2>{img}</h2>
                  ))}
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSlide === index ? "bg-red-500" : "bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Interactive floating elements */}
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-r from-red-200 to-red-300 rounded-full blur-xl opacity-50"></div>
              <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-blue-200 rounded-full blur-lg opacity-50"></div>
            </div>

            {/* Pattern overlay */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
