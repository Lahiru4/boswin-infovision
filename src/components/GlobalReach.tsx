
import { Globe } from "lucide-react";

const locations = [
  { name: "Sri Lanka", status: "Established", class: "top-1/2 left-[70%]" },
  { name: "Hong Kong", status: "Established", class: "top-[40%] left-[78%]" },
  { name: "China", status: "Established", class: "top-[35%] left-[75%]" },
  { name: "Dubai", status: "Expanding", class: "top-[45%] left-[65%]" },
  { name: "Netherlands", status: "Expanding", class: "top-[30%] left-[50%]" },
  { name: "Africa", status: "Future", class: "top-[60%] left-[55%]" },
  { name: "South America", status: "Future", class: "top-[65%] left-[30%]" }
];

const GlobalReach = () => {
  return (
    <section id="global-reach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-boswin-navy mb-4">Our Global Reach</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-boswin-blue to-red-500 mx-auto mb-6"></div>
          <p className="text-boswin-gray text-lg">
            With its current bases established in Sri Lanka, China, and Hong Kong, Boswin is expanding to newer demographics, opportunities, and challenges.
          </p>
        </div>

        <div className="relative mt-16">
          {/* World Map Background */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md p-4 relative">
            <div className="aspect-[2/1] w-full relative">
              {/* Simplified World Map SVG */}
              <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M100,200 Q150,150 200,200 T300,200 T400,200 T500,200 T600,200 T700,200 T800,200 T900,200" 
                  stroke="#E2E8F0" 
                  strokeWidth="50" 
                  fill="none"
                />
                <path 
                  d="M100,300 Q150,250 200,300 T300,300 T400,300 T500,300 T600,300 T700,300 T800,300 T900,300" 
                  stroke="#E2E8F0" 
                  strokeWidth="60" 
                  fill="none"
                />
              </svg>
              
              {/* Location Markers */}
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className={`absolute ${location.class} transform -translate-x-1/2 -translate-y-1/2 group`}
                >
                  <div className={`
                    w-4 h-4 rounded-full animate-pulse
                    ${location.status === 'Established' ? 'bg-red-500' : 
                      location.status === 'Expanding' ? 'bg-boswin-teal' : 'bg-boswin-gray'}
                  `}></div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-md shadow-lg p-2 hidden group-hover:block z-10 min-w-[100px] text-center">
                    <p className="text-sm font-semibold text-boswin-navy">{location.name}</p>
                    <p className="text-xs text-boswin-gray">{location.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center mt-6 gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-boswin-gray">Established</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-boswin-teal"></div>
              <span className="text-sm text-boswin-gray">Expanding</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-boswin-gray"></div>
              <span className="text-sm text-boswin-gray">Future</span>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-boswin-blue to-red-500 rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <Globe className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-2xl font-bold mb-1">Going Global</h3>
                <p>Expanding to Dubai, the Netherlands, Africa, and South America</p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-red-500 font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
