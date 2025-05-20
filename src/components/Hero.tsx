// import { Button } from "@/components/ui/button";
// import React, { useState, useEffect } from "react";
// import Background3D from "./Background3D";
// import Kdno from "../images/kdona2.png"
// import sripay from "../images/Sripay.png"
// const Hero = () => {
//   const sliderImages = [
//     {
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2FMI_Store_Cover_1x.png?alt=media&token=72b3be5d-b41e-4763-b2b6-87392ca4a1c6",
//       label: "MI Store",
//     },
//     {
//       image: Kdno,
//       label: "Kdona",
//     },
//     {
//       image: sripay,
//       label: "SRI Pay",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [sliderImages.length]);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white text-slate-900 justify-center flex items-center"
//     >
//       <Background3D />
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,128,0.05),transparent_40%)]"></div>
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(64,93,230,0.08),transparent_50%)]"></div>
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
//       </div>
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBINjBWNjBIMHoiLz48L2c+PC9zdmc+')] opacity-30"></div>

//       <div className="container max-w-6xl mx-auto px-4 pt-32 pb-24 relative z-10 flex flex-col lg:flex-col items-center gap-16">
//         {/* Left side - Logo */}
//         <div className="w-full lg:w-1/2 space-y-8 flex justify-center">
//           <img
//             src="https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2Fblack%20logo%20eith%20boswin.png?alt=media&token=17bebd6c-bb39-4aa2-9559-96cb8b7aafc1"
//             alt="Boswin Group Logo"
//             className="max-w-xs"
//           />
//         </div>

//         {/* Right side - Image Slider */}
//         <div className="w-full lg:w-2/2 max-w-4xl relative">
//           <div className="absolute inset-0 bg-gradient-to-tr from-red-200/40 to-blue-200/40 rounded-3xl transform rotate-3 scale-105 blur-sm"></div>

//           <div className="relative bg-white border border-gray-100 rounded-2xl p-2 overflow-hidden shadow-xl">
//             <div className="relative overflow-hidden rounded-xl">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {sliderImages.map((item, index) => (
//                   <div key={index} className="w-full flex-shrink-0 relative">
//                     <img
//                       src={item.image}
//                       alt={item.label}
//                       className="w-full h-[400px] sm:h-[600px] object-cover rounded-xl"
//                     />
//                     <div className="absolute bottom-6 left-6 bg-white/80 px-4 py-2 rounded text-lg font-semibold text-slate-900 shadow">
//                       {item.label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Slide indicators */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//               {sliderImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-red-500" : "bg-yellow-500"
//                     }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 ></button>
//               ))}
//             </div>

//             {/* Floating decorative circles */}
//             <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-r from-red-200 to-red-300 rounded-full blur-xl opacity-50"></div>
//             <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-blue-200 rounded-full blur-lg opacity-50"></div>
//           </div>

//           {/* Pattern overlay */}
//           <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full blur-xl"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Background3D from "./Background3D";
import Kdno from "../images/kdona2.png";
import sripay from "../images/Sripay.png";

const Hero = () => {
  const sliderImages = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2FMI_Store_Cover_1x.png?alt=media&token=72b3be5d-b41e-4763-b2b6-87392ca4a1c6",
      label: "MI Store",
      description: "Your one-stop shop for the latest MI electronics and gadgets.",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2FKdona.png?alt=media&token=9776ee89-8c6f-4e3a-8c4e-c0c12f4a44d6",

      label: "Kdona",
      description: "Experience the taste of excellence with Kdona's premium products.",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2Fsripay.png?alt=media&token=519e6fb7-c975-4671-8456-a50aaa6587b1",
      label: "Sri Pay",
      description: "Secure and smart digital transactions for everyone.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white text-slate-900 flex items-center justify-center"
    >
      <Background3D />
      {/* Decorative background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,128,0.05),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(64,93,230,0.08),transparent_50%)]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4 pt-32 pb-24 relative z-10 flex flex-col gap-16 items-center">
        {/* Company Logo */}
        <div className="w-full flex justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/boswin-group.firebasestorage.app/o/info%20web%20image%2Fblack%20logo%20eith%20boswin.png?alt=media&token=17bebd6c-bb39-4aa2-9559-96cb8b7aafc1"
            alt="Boswin Group Logo"
            className="max-w-xs"
          />
        </div>

        {/* Image Slider */}
        <div className="w-800 max-w-8xl relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-200/40 to-blue-200/40 rounded-3xl transform rotate-3 scale-105 blur-sm"></div>

          <div className="relative  border-gray-100 rounded-2xl p-4 overflow-hidden shadow-xl">
            <div className="relative overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {sliderImages.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4 relative flex justify-center items-center"
                  >
                    {/* Image Container */}
                    <div className="relative w-full max-w-5xl h-[500px] sm:h-[450px] overflow-hidden rounded-2xl shadow-xl group">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 sm:px-12">
                        <h2 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg">
                          {item.label}
                        </h2>
                        <p className="mt-4 text-white/90 text-base sm:text-lg max-w-xl drop-shadow-md">
                          {item.description}
                        </p>
                        <Button className="mt-6 bg-white text-slate-900 hover:bg-slate-200 font-semibold px-6 py-2 rounded-full shadow-md transition duration-300">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index
                    ? "bg-red-500"
                    : "bg-gray-300 hover:bg-red-300"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
