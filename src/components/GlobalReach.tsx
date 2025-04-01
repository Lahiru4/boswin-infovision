
import { Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  { name: "Sri Lanka", status: "Established", coordinates: [80.7718, 7.8731] },
  { name: "Hong Kong", status: "Established", coordinates: [114.1694, 22.3193] },
  { name: "China", status: "Established", coordinates: [104.1954, 35.8617] },
  { name: "Dubai", status: "Expanding", coordinates: [55.2708, 25.2048] },
  { name: "Netherlands", status: "Expanding", coordinates: [5.2913, 52.1326] },
  { name: "Africa", status: "Future", coordinates: [20.2742, 8.7832] },
  { name: "South America", status: "Future", coordinates: [-55.4915, -8.7832] }
];

const GlobalReach = () => {
  // Convert coordinates to position on the map
  const getPosition = (coordinates: number[]) => {
    // Simple mapping logic - longitude to x, latitude to y
    const x = ((coordinates[0] + 180) / 360) * 100; // longitude to x percentage
    const y = ((90 - coordinates[1]) / 180) * 100; // latitude to y percentage
    return { x, y };
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="global-reach" className="py-20 overflow-hidden bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-boswin-navy to-red-500">
            Our Global Reach
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-boswin-blue to-red-500 mx-auto mb-6"></div>
          <p className="text-boswin-gray text-lg">
            With established bases in <span className="font-semibold text-boswin-navy">Sri Lanka, China, and Hong Kong</span>, 
            Boswin is strategically expanding to new markets and opportunities worldwide.
          </p>
        </motion.div>

        <motion.div 
          className="relative mt-16 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <div className="aspect-[2/1] w-full relative">
              {/* World Map */}
              <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Continents as blobs */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M150,200 Q250,150 350,200 T550,200 T750,180 Q850,150 900,200"
                  stroke="#E2E8F0"
                  strokeWidth="70"
                  fill="#F8FAFC"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  d="M100,300 Q200,250 300,300 T500,300 T700,320 Q800,350 900,300"
                  stroke="#EFF6FF"
                  strokeWidth="80"
                  fill="#F1F5F9"
                />
                
                {/* Grid lines */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1 }}
                >
                  {[...Array(10)].map((_, i) => (
                    <line 
                      key={`vertical-${i}`}
                      x1={i * 100} 
                      y1="0" 
                      x2={i * 100} 
                      y2="500" 
                      stroke="#CBD5E1" 
                      strokeWidth="0.5" 
                      strokeDasharray="5,5" 
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <line 
                      key={`horizontal-${i}`}
                      x1="0" 
                      y1={i * 100} 
                      x2="1000" 
                      y2={i * 100} 
                      stroke="#CBD5E1" 
                      strokeWidth="0.5" 
                      strokeDasharray="5,5" 
                    />
                  ))}
                </motion.g>
              </svg>
              
              {/* Location Markers */}
              {locations.map((location, index) => {
                const position = getPosition(location.coordinates);
                
                return (
                  <motion.div 
                    key={index} 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${position.x}%`, top: `${position.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className={`
                      flex flex-col items-center
                    `}>
                      <div className={`
                        relative w-3 h-3 rounded-full 
                        ${location.status === 'Established' ? 'bg-red-500' : 
                          location.status === 'Expanding' ? 'bg-boswin-teal' : 'bg-boswin-gray'}
                      `}>
                        <span className={`
                          absolute -top-1 -left-1 w-5 h-5 rounded-full animate-ping opacity-75
                          ${location.status === 'Established' ? 'bg-red-500' : 
                            location.status === 'Expanding' ? 'bg-boswin-teal' : 'bg-boswin-gray'}
                        `}></span>
                      </div>
                      
                      {/* Location popup */}
                      <div className="
                        absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        bg-white rounded-lg shadow-lg p-3 z-10 min-w-[120px] text-center
                        backdrop-blur-sm border border-slate-100
                      ">
                        <p className="text-sm font-semibold text-boswin-navy">{location.name}</p>
                        <div className={`
                          inline-block px-2 py-0.5 mt-1 text-xs rounded-full
                          ${location.status === 'Established' ? 'bg-red-100 text-red-700' : 
                            location.status === 'Expanding' ? 'bg-teal-100 text-teal-700' : 
                            'bg-slate-100 text-slate-700'}
                        `}>
                          {location.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Legend */}
            <div className="flex justify-center items-center gap-8 py-6 border-t border-slate-100 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm p-1">
                  <div className="w-3 h-3 rounded-full bg-red-500 relative">
                    <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full animate-ping opacity-30 bg-red-500"></span>
                  </div>
                </div>
                <span className="text-sm font-medium text-slate-700">Established</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm p-1">
                  <div className="w-3 h-3 rounded-full bg-boswin-teal relative">
                    <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full animate-ping opacity-30 bg-boswin-teal"></span>
                  </div>
                </div>
                <span className="text-sm font-medium text-slate-700">Expanding</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm p-1">
                  <div className="w-3 h-3 rounded-full bg-boswin-gray relative">
                    <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full animate-ping opacity-30 bg-boswin-gray"></span>
                  </div>
                </div>
                <span className="text-sm font-medium text-slate-700">Future</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-boswin-blue to-red-500 rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAwSDBWMTAwSDEwMFYwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+')]"></div>
              <div className="flex flex-col md:flex-row items-center justify-between p-8">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm mr-5">
                    <Globe className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Going Global</h3>
                    <p className="text-white/90">Expanding our presence across continents</p>
                  </div>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact" 
                  className="px-6 py-3 bg-white text-red-500 font-semibold rounded-md hover:bg-opacity-95 transition-all shadow-md flex items-center group"
                >
                  <span>Partner With Us</span>
                  <MapPin className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReach;
