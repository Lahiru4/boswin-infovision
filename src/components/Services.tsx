import { CircleCheck, ArrowRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Technology Development",
    description: "Custom software solutions for diverse industries",
    features: ["Web Applications", "Mobile Solutions", "Enterprise Software"],
  },
  {
    title: "Digital Transformation",
    description: "Helping businesses evolve in the digital landscape",
    features: [
      "Business Process Automation",
      "Cloud Migration",
      "Digital Strategy",
    ],
  },
  {
    title: "FinTech Solutions",
    description: "Innovative financial technology applications",
    features: [
      "Payment Gateways",
      "Digital Banking",
      "Blockchain Applications",
    ],
  },
  {
    title: "Business Solutions",
    description: "End-to-end business management systems",
    features: ["ERP Systems", "CRM Solutions", "Supply Chain Management"],
  },
];

const brands = [
  {
    title: "SRIPAY",
    description: "Custom-Designed Payment Gateway",
    details:
      "Your go-to custom payment gateway for seamless online transactions. Authorized Alipay agent with the approval of the Central Bank of Sri Lanka.",
  },
  {
    title: "MISTORE",
    description: "Official Wholesaler and Retailer of Sri Lanka",
    details:
      "Your official Xiaomi products destination, serving as the authorized wholesaler and retailer in Sri Lanka.",
  },
  {
    title: "GoGreen",
    description: "Electric Three Wheeler Conversion",
    details:
      "Upgrade your three-wheeler with the BOSWIN ECO-Electric Conversion. Go green and save with an electric twist!",
  },
  {
    title: "K'DONA",
    description: "Premium Gem and Jewellery",
    details:
      "Offering the finest high-end gem jewelry and ethical gem and jewelry range.",
  },
  {
    title: "ALIPAY",
    description: "Official Partner for Sri Lanka",
    details:
      "The official partner for Sri Lanka, simplifying payments and enhancing financial convenience.",
  },
  {
    title: "BEEZ24",
    description: "Service Platform catered to Entrepreneurs",
    details:
      "Your service platform in the heart of China Mainland, exclusively for entrepreneurs. Unlock new opportunities and support for your business ventures.",
  },
  {
    title: "FALCORRA",
    description: "Authorized Wholesaler and Retailer",
    details: "Authorized wholesaler and retailer of premium bicycles.",
  },
  {
    title: "VEIN GRAPHITE",
    description: "The World's Purest Vein Graphite",
    details:
      "Home to the world's purest vein graphite, offering unmatched quality and performance in the industry.",
  },
  {
    title: "LOOLECONDERE TEA",
    description: "Premium Ceylonese Tea",
    details: "Savor the premium taste of Ceylonese tea excellence.",
  },
  {
    title: "WECHATPAY",
    description: "Official Partner for Sri Lanka",
    details:
      "Your official partner for Sri Lanka, streamlining payments for seamless transactions.",
  },
  {
    title: "CITYMALL",
    description: "Commercial and Lifestyle Center",
    details:
      "Your ultimate destination for a blend of commercial and lifestyle delights.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Alternative Background Design Patterns */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient with red undertone */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-red-50 to-gray-50"></div>

        {/* Hexagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="text-right">
            <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-boswin-navy to-red-500">
              Our Brands & Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-boswin-blue to-red-500 mb-6 ml-auto"></div>
          </div>
          <p className="text-boswin-gray text-lg">
            Discover our comprehensive range of technology solutions and
            services designed to transform businesses across industries.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl relative"
            >
              {/* Decorative red pattern on card */}
              <div
                className="absolute right-0 top-0 w-16 h-16 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="h-2 bg-gradient-to-r from-boswin-blue to-red-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-boswin-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-boswin-gray mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CircleCheck className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-boswin-gray">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Red accent stripe */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 via-red-500 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Brands Section - Auto Slider */}
        <div className="mt-20">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white relative">
                <span
                  className="absolute inset-0 text-white opacity-50 text-8xl"
                  style={{
                    WebkitTextStroke: "5px #000", // black stroke
                    textShadow:
                      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", // black shadow
                  }}
                >
                  Brands
                </span>
                <span className="relative text-8xl">Brands</span>
              </h2>
            </div>
            <p className="text-boswin-gray text-lg">
              We're proud to represent and partner with these innovative brands
              across diverse industries.
            </p>
          </div>

          <AutoSlider brands={brands} />
        </div>

        <div className="mt-16 text-center relative">
          {/* Decorative red accent for the bottom section */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          <p className="text-boswin-gray mb-6 max-w-2xl mx-auto relative z-10">
            Looking for a customized solution for your specific business needs?
            Our team of experts is ready to help you develop the perfect
            solution.
          </p>
        </div>
      </div>
    </section>
  );
};

// Auto Slider Component
const AutoSlider = ({ brands }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = brands.length;

  // Auto advance slides
  useEffect(() => {
    if (!isPaused) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(slideInterval);
    }
  }, [isPaused, totalSlides]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div
      className="relative px-4 py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows - Positioned outside on desktop, inside on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 rounded-full shadow-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 rounded-full shadow-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Modern Card Slider */}
      <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        {/* Slider Viewport */}
        <div
          className="relative overflow-hidden rounded-xl shadow-xl"
          style={{ height: "380px" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>

          {/* Cards */}
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`absolute inset-0 z-10 transition-all duration-700 ease-in-out flex flex-col bg-white rounded-xl overflow-hidden ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{
                transform:
                  index === currentSlide
                    ? "translateX(0) scale(1)"
                    : index === (currentSlide + 1) % totalSlides
                    ? "translateX(100%) scale(0.95)"
                    : "translateX(-100%) scale(0.95)",
              }}
            >
              {/* Brand Card Header with Gradient */}
              <div className="relative h-20 bg-gradient-to-r from-red-500 to-boswin-blue flex items-center justify-center px-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {brand.title}
                </h3>

                {/* Decorative Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 flex flex-col">
                <p className="text-red-500 font-medium text-sm mb-2 uppercase tracking-wider">
                  {brand.description}
                </p>

                <div className="flex-1">
                  <p className="text-boswin-gray text-sm leading-relaxed">
                    {brand.details}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    {`${index + 1}/${totalSlides}`}
                  </span>
                  <button className="flex items-center text-sm font-medium text-boswin-navy hover:text-red-500 transition-colors group">
                    Learn more{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Indicators - More modern, pill style */}
        <div className="flex justify-center items-center mt-6 gap-1.5">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 bg-red-500"
                  : "w-1.5 bg-gray-300 hover:bg-red-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
