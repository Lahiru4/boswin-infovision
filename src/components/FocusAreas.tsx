
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
  FileSpreadsheet 
} from "lucide-react";

const focusAreas = [
  { title: "FINTECH", icon: <BadgePercent className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Education", icon: <GraduationCap className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Healthcare", icon: <Heart className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Agriculture", icon: <Leaf className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Manufacturing", icon: <Factory className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Export", icon: <Ship className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Trading", icon: <Briefcase className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Consumer & Retail", icon: <Store className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Food Products", icon: <Utensils className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Industrial Solutions", icon: <Wrench className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Power & Energy", icon: <Zap className="w-12 h-12 text-boswin-blue mb-4" /> },
  { title: "Business Solutions", icon: <FileSpreadsheet className="w-12 h-12 text-boswin-blue mb-4" /> }
];

const FocusAreas = () => {
  return (
    <section id="focus-areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-boswin-navy mb-4">Our Focus Areas</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-boswin-blue to-boswin-teal mx-auto mb-6"></div>
          <p className="text-boswin-gray text-lg">
            Boswin constantly seeks to be the cutting edge of innovation, venturing into novel findings and exploring how we can make a technological difference in the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {focusAreas.map((area, index) => (
            <div 
              key={index} 
              className="focus-card group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-boswin-navy">{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
