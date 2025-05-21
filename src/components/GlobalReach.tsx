
import { Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const locations = [
  { name: "Sri Lanka", status: "Established", coordinates: [7.8731, 80.7718] },
  { name: "Hong Kong", status: "Established", coordinates: [22.3193, 114.1694] },
  { name: "China", status: "Established", coordinates: [35.8617, 104.1954] },
  { name: "Dubai", status: "Expanding", coordinates: [25.2048, 55.2708] },
  { name: "Netherlands", status: "Expanding", coordinates: [52.1326, 5.2913] },
  { name: "Africa", status: "Future", coordinates: [8.7832, 20.2742] },
  { name: "South America", status: "Future", coordinates: [-8.7832, -55.4915] }
];

const GlobalReach = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Dynamic import for Leaflet (it requires window to be available)
    const loadLeaflet = async () => {
      // Add Leaflet CSS
      const linkEl = document.createElement('link');
      linkEl.rel = 'stylesheet';
      linkEl.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(linkEl);

      // Add Leaflet JS
      const scriptEl = document.createElement('script');
      scriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      document.body.appendChild(scriptEl);

      // Wait for script to load
      scriptEl.onload = () => {
        initMap();
        setIsMounted(true);
      };
    };

    loadLeaflet();

    return () => {
      // Clean up map when component unmounts
      if (window.map) {
        window.map.remove();
      }
    };
  }, []);

  const initMap = () => {
    if (!window.L) return;

    // Create map
    const map = window.L.map('map', {
      center: [20, 20], // Center the map view
      zoom: 2,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: true,
      tap: false
    });

    // Add tile layer (world map)
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Store map in window for cleanup
    window.map = map;

    // Add markers for each location
    locations.forEach(location => {
      const { coordinates, name, status } = location;

      // Create custom marker icon based on status
      const markerColor = status === 'Established' ? '#ef4444' :
        status === 'Expanding' ? '#14b8a6' : '#6b7280';

      const customIcon = window.L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div style="position: relative;">
            <div style="width: 12px; height: 12px; background-color: ${markerColor}; border-radius: 50%; position: relative; z-index: 2;"></div>
            <div style="width: 20px; height: 20px; background-color: ${markerColor}; border-radius: 50%; position: absolute; top: -4px; left: -4px; z-index: 1; opacity: 0.3; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          </div>
        `,
        iconSize: [12, 12],
        iconAnchor: [6, 6]
      });

      // Add marker to map
      const marker = window.L.marker(coordinates, { icon: customIcon }).addTo(map);

      // Add popup with location info
      marker.bindPopup(`
        <div style="min-width: 120px; text-align: center;">
          <p style="font-weight: 600; color: #0f172a; margin: 0 0 5px 0;">${name}</p>
          <div style="
            display: inline-block;
            padding: 2px 8px;
            font-size: 12px;
            border-radius: 9999px;
            background-color: ${status === 'Established' ? '#fee2e2' : status === 'Expanding' ? '#ccfbf1' : '#f1f5f9'};
            color: ${status === 'Established' ? '#b91c1c' : status === 'Expanding' ? '#0f766e' : '#334155'};
          ">
            ${status}
          </div>
        </div>
      `);

      // Add permanent location name label
      const tooltipAnchor = status === 'Established' ? [0, -30] :
        status === 'Expanding' ? [0, -30] : [0, -30];

      // Create a permanent tooltip for each location
      const tooltipOptions = {
        permanent: true,
        direction: 'top',
        className: `location-label ${status.toLowerCase()}-label`,
        offset: [0, -20]
      };

      const tooltip = window.L.tooltip(tooltipOptions)
        .setLatLng(coordinates)
        .setContent(`
          <div style="
            font-size: 11px; 
            font-weight: 600; 
            padding: 1px 6px; 
            white-space: nowrap;
            border-radius: 4px;
            background-color: ${status === 'Established' ? 'rgba(239, 68, 68, 0.8)' :
            status === 'Expanding' ? 'rgba(20, 184, 166, 0.8)' :
              'rgba(107, 114, 128, 0.8)'};
            color: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
          ">
            ${name}
          </div>
        `)
        .addTo(map);
    });

    // Add custom CSS animation for the ping effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ping {
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      }
      
      /* Custom styles for the location labels */
      .location-label {
        background: none;
        border: none;
        box-shadow: none;
      }
      
      .location-label::before {
        border: none;
      }
      
      .location-label .leaflet-tooltip-content {
        background: none;
        border: none;
        box-shadow: none;
      }
    `;
    document.head.appendChild(style);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="global-reach" className="py-20 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
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
          <p className="text-boswin-gray text-3xl">
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
          <div className="bg-gradient-to-br from-slate-50 to-white/80 rounded-2xl overflow-hidden shadow-lg border border-slate-100 backdrop-blur-sm">
            {/* Interactive Leaflet Map */}
            <div className="aspect-[2/1] w-full relative">
              <div id="map" className="w-full h-full z-10"></div>
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