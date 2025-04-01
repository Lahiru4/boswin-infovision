
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-16 bg-white"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 z-10 max-w-4xl text-center">
        {/* Logo or icon at the top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Innovation Technology
          </div>
        </motion.div>
        
        {/* Main headline - center aligned */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          <span className="text-gray-900">Shaping the </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Future of Technology
          </span>
        </motion.h1>
        
        {/* Subheading - center aligned */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-600 mb-8 mx-auto"
        >
          We deliver cutting-edge solutions that transform industries and empower businesses through innovation.
        </motion.p>
        
        {/* Buttons - center aligned */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-lg shadow-md"
            size="lg"
            asChild
          >
            <a href="#focus-areas">
              Explore Solutions
              <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>
          
          <Button
            variant="outline"
            className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-6 rounded-lg"
            size="lg"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
        
        {/* Stats Row - center aligned */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-3 gap-6 max-w-md mx-auto border-t border-gray-100 pt-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-blue-600">15+</h3>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">200+</h3>
            <p className="text-gray-500 text-sm">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-violet-600">12</h3>
            <p className="text-gray-500 text-sm">Countries</p>
          </div>
        </motion.div>
        
        {/* Image displayed below the content for mobile and centered for larger screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 mx-auto max-w-2xl"
        >
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt="Technology innovation" 
              className="w-full h-auto rounded-xl"
            />
            
            {/* Accent elements */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-1/3"></div>
            
            {/* Feature highlights */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-full w-2 h-2"></div>
                <p className="font-medium text-sm">Smart Solutions</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                <p className="font-medium text-sm">Global Network</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
