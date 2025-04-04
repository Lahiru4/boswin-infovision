import {
  BadgePercent,
  Briefcase,
  GraduationCap,
  Heart,
  Leaf,
  Factory,
  Ship,
  Store,
  Utensils,
  Wrench,
  Zap,
  FileSpreadsheet,
} from "lucide-react";
import { useState } from "react";

const focusAreas = [
  {
    title: "FINTECH",
    icon: <BadgePercent className="w-12 h-12 text-red-500 mb-4" />,
  },
  {
    title: "Education",
    icon: <GraduationCap className="w-12 h-12 text-boswin-blue mb-4" />,
  },
  {
    title: "Healthcare",
    icon: <Heart className="w-12 h-12 text-red-500 mb-4" />,
  },
  {
    title: "Agriculture",
    icon: <Leaf className="w-12 h-12 text-boswin-blue mb-4" />,
  },
  {
    title: "Manufacturing",
    icon: <Factory className="w-12 h-12 text-red-500 mb-4" />,
  },
  {
    title: "Export",
    icon: <Ship className="w-12 h-12 text-boswin-blue mb-4" />,
  },
  {
    title: "Trading",
    icon: <Briefcase className="w-12 h-12 text-red-500 mb-4" />,
  },
  {
    title: "Consumer & Retail",
    icon: <Store className="w-12 h-12 text-boswin-blue mb-4" />,
  },
  {
    title: "Food Products",
    icon: <Utensils className="w-12 h-12 text-red-500 mb-4" />,
  },
  {
    title: "Industrial Solutions",
    icon: <Wrench className="w-12 h-12 text-boswin-blue mb-4" />,
  },
  {
    title: "Power & Energy",
    icon: <Zap className="w-12 h-12 text-red-500 mb-4" />,
  },
  {
    title: "Business Solutions",
    icon: <FileSpreadsheet className="w-12 h-12 text-boswin-blue mb-4" />,
  },
];

const FocusAreas = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section id="focus-areas" className="relative py-20 overflow-hidden">
      {/* Modern background pattern with red emphasis */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        {/* Geometric shapes with darker red emphasis */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-300 rounded-full opacity-40 -mr-20 -mt-20"></div>
        <div className="absolute top-40 left-0 w-40 h-40 bg-red-200 rounded-full opacity-30 -ml-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-100 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-200 rounded-full opacity-20"></div>
        
        {/* Darker red diagonal stripes */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(135deg, transparent, transparent 49%, #b91c1c 49%, #b91c1c 51%, transparent 51%, transparent)",
            backgroundSize: "40px 40px"
          }}>
        </div>
        
        {/* Grid pattern overlay with darker red */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(185, 28, 28, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}>
        </div>
        
        {/* Accent lines with darker red */}
        <div className="absolute top-1/3 right-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-red-500 via-transparent to-red-500 opacity-20"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-boswin-blue to-transparent opacity-30"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="text-left">
            <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-boswin-navy to-red-500">
              Our Focus Areas
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-boswin-blue to-red-500 mb-6"></div>
          </div>
          <p className="text-boswin-gray text-lg">
            Boswin constantly seeks to be the cutting edge of innovation,
            venturing into novel findings and exploring how we can make a
            technological difference in the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="focus-card group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-l-4 hover:border-red-300 relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background accent for cards */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full"></div>
              
              {/* Darker red corner accent */}
              <div className="absolute top-0 left-0 w-3 h-3">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-6 border-l-6 border-red-500"></div>
              </div>
              
              {/* Animated highlight on hover with darker red */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-boswin-blue to-red-600 opacity-10"></div>
              )}
              
              <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="relative z-10 text-xl font-semibold text-boswin-navy">
                {area.title}
              </h3>
              
              {/* Accent corner with darker red */}
              <div className="absolute bottom-0 right-0 w-8 h-8">
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-8 border-r-8 border-red-600"></div>
              </div>
              
              {/* Subtle darker red underline on hover */}
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 origin-left transition-transform duration-300 ${hoveredIndex === index ? 'scale-x-100' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;