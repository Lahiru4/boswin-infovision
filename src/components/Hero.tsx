
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-40 w-64 h-64 bg-red-200/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col max-w-xl"
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Innovation Technology Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900">Shape The</span>
              <span className="bg-gradient-to-r from-blue-700 via-indigo-500 to-violet-500 text-transparent bg-clip-text">
                Future Technology
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mt-6 mb-8">
              Boswin delivers cutting-edge solutions that transform industries and empower businesses with next-generation technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 px-6 py-6 rounded-xl text-md shadow-lg shadow-indigo-200"
                size="lg"
                asChild
              >
                <a href="#focus-areas">
                  Explore Solutions
                  <ArrowRight size={18} />
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-6 py-6 rounded-xl text-md"
                size="lg"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">15+</h3>
                <p className="text-gray-500 text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">200+</h3>
                <p className="text-gray-500 text-sm mt-1">Projects</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">12</h3>
                <p className="text-gray-500 text-sm mt-1">Countries</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl rotate-3"></div>
            
            {/* Main graphic */}
            <div className="relative bg-white p-3 rounded-3xl shadow-xl shadow-indigo-100/30 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                alt="Technology innovation" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              
              {/* Floating elements */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 rounded-full w-3 h-3"></div>
                  <p className="font-medium text-sm">Global Network</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500 rounded-full w-3 h-3"></div>
                  <p className="font-medium text-sm">Smart Solutions</p>
                </div>
              </motion.div>
              
              {/* Wave graphics */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M39.5 71.5C49.5 61.5 81.5 26.5 113.5 55.5C145.5 84.5 159 115 179 130" 
                    stroke="url(#paint0_linear)" 
                    strokeWidth="6" 
                    strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="39.5" y1="71.5" x2="179" y2="130" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4F46E5"/>
                      <stop offset="1" stopColor="#9333EA"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
