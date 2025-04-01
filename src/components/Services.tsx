
import { 
  CircleCheck, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    title: "Technology Development",
    description: "Custom software solutions for diverse industries",
    features: ["Web Applications", "Mobile Solutions", "Enterprise Software"]
  },
  {
    title: "Digital Transformation",
    description: "Helping businesses evolve in the digital landscape",
    features: ["Business Process Automation", "Cloud Migration", "Digital Strategy"]
  },
  {
    title: "FinTech Solutions",
    description: "Innovative financial technology applications",
    features: ["Payment Gateways", "Digital Banking", "Blockchain Applications"]
  },
  {
    title: "Business Solutions",
    description: "End-to-end business management systems",
    features: ["ERP Systems", "CRM Solutions", "Supply Chain Management"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-boswin-navy mb-4">Our Brands & Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-boswin-blue to-boswin-teal mx-auto mb-6"></div>
          <p className="text-boswin-gray text-lg">
            Discover our comprehensive range of technology solutions and services designed to transform businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-boswin-blue to-boswin-teal"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-boswin-navy mb-3">{service.title}</h3>
                <p className="text-boswin-gray mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CircleCheck className="w-5 h-5 text-boswin-teal mr-2 flex-shrink-0" />
                      <span className="text-sm text-boswin-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="text-boswin-blue font-medium flex items-center hover:text-boswin-navy transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-boswin-gray mb-6 max-w-2xl mx-auto">
            Looking for a customized solution for your specific business needs? Our team of experts is ready to help you develop the perfect solution.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-boswin-blue hover:bg-boswin-navy text-white px-8 py-3 rounded-md transition-colors duration-300"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
