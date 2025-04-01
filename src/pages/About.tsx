
import { ArrowRight, Building, Compass, Clock, Phone, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const milestones = [
    { year: "2006", description: "Embarking from Canada, our voyage commenced with a dedicated team of visionary entrepreneurs, united by the pursuit of global innovation." },
    { year: "2007", description: "Expanding our horizons, we planted the seed of Boswin's presence in Hong Kong, marking the inception of our global journey." },
    { year: "2008", description: "With a commitment to innovation, we ventured into Sri Lanka, establishing our presence across three branches, focusing on IT solutions and fintech services." },
    { year: "2010", description: "Enriching our trajectory, we forged a strategic partnership with Xiaomi, fortifying our position as a dynamic player in the industry." },
    { year: "2012", description: "Infusing innovation, we introduced Alipay to Sri Lanka, bridging technology and finance for our ever-growing audience." },
    { year: "2014", description: "China became a canvas for our aspirations as we unfurled the Zhejiang Boswin branch, solidifying our commitment to excellence." },
    { year: "2016", description: "In sync with China's digital landscape, we partnered with WeChat, an embodiment of connectivity and interaction." },
    { year: "2018", description: "Further enriching our service spectrum, Hainan Boswin emerged as a distinct entity, devoted to business counseling and guidance." },
  ];

  const services = [
    {
      title: "SRIPAY",
      description: "Custom-Designed Payment Gateway",
      details: "Your go-to custom payment gateway for seamless online transactions. Authorized Alipay agent with the approval of the Central Bank of Sri Lanka."
    },
    {
      title: "MISTORE",
      description: "Official Wholesaler and Retailer of Sri Lanka",
      details: "Your official Xiaomi products destination, serving as the authorized wholesaler and retailer in Sri Lanka."
    },
    {
      title: "GoGreen",
      description: "Electric Three Wheeler Conversion",
      details: "Upgrade your three-wheeler with the BOSWIN ECO-Electric Conversion. Go green and save with an electric twist!"
    },
    {
      title: "K'DONA",
      description: "Premium Gem and Jewellery",
      details: "Offering the finest high-end gem jewelry and ethical gem and jewelry range."
    },
    {
      title: "ALIPAY",
      description: "Official Partner for Sri Lanka",
      details: "The official partner for Sri Lanka, simplifying payments and enhancing financial convenience."
    },
    {
      title: "BEEZ24",
      description: "Service Platform catered to Entrepreneurs",
      details: "Your service platform in the heart of China Mainland, exclusively for entrepreneurs. Unlock new opportunities and support for your business ventures."
    },
    {
      title: "FALCORRA",
      description: "Authorized Wholesaler and Retailer",
      details: "Authorized wholesaler and retailer of premium bicycles."
    },
    {
      title: "VEIN GRAPHITE",
      description: "The World's Purest Vein Graphite",
      details: "Home to the world's purest vein graphite, offering unmatched quality and performance in the industry."
    },
    {
      title: "LOOLECONDERE TEA",
      description: "Premium Ceylonese Tea",
      details: "Savor the premium taste of Ceylonese tea excellence."
    },
    {
      title: "WECHATPAY",
      description: "Official Partner for Sri Lanka",
      details: "Your official partner for Sri Lanka, streamlining payments for seamless transactions."
    },
    {
      title: "CITYMALL",
      description: "Commercial and Lifestyle Center",
      details: "Your ultimate destination for a blend of commercial and lifestyle delights."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white via-red-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-boswin-navy mb-6">About Boswin</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-boswin-gray mb-6">
              Boswin Group (Pvt) Ltd
            </p>
            <p className="text-lg text-boswin-gray">
              Established Since 2006
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Introduction */}
      <section className="py-16 bg-white bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-boswin-navy mb-8 text-center">COMPANY INTRODUCTION</h2>
            <div className="prose prose-lg mx-auto text-boswin-gray">
              <p className="mb-6">
                Boswin is an innovative technology development company, where the Boswin Group is a fast-paced limited liability conglomerate of companies based in Sri Lanka which has its present networks in Sri Lanka, Hong Kong and China. Boswin constantly seeks to be the cutting edge of innovation, diving into the novel findings of the globe and exploring on how the company as a multi-faceted entity can make a technological difference in the world.
              </p>
              <p>
                At present, the Boswin Group has ventured into Fintech, Agriculture, Education, Industrial Solutions, Manufacturing, Exports, Business Solutions and Trading. Boswin focuses on deploying innovative technologies and prudent trading practices in its operations. Further, Boswin is indulged in International Investments, Consultancy and Logistics.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-boswin-teal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 border border-white/20 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6">Vision</h2>
              <p className="text-lg">
                To become the leading Sri Lankan-based global corporate that unites the world under one roof.
              </p>
            </div>
            <div className="text-center p-8 border border-white/20 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6">Mission</h2>
              <p className="text-lg">
                To achieve innovative excellence and reinvent the digital lifestyle of people across the globe with the sheer determination and self-motivation of our community.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Journey Timeline */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-boswin-navy mb-4 text-center">The Journey of Boswin</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mb-8"></div>
            <p className="text-lg text-boswin-gray text-center mb-12">
              In the annals of Boswin's remarkable journey, every moment is a testament to our relentless pursuit of innovation, global expansion, and unwavering commitment.
            </p>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-300 to-red-500"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:border-l-2 hover:border-red-300">
                        <h3 className="text-xl font-bold text-red-500 mb-2">{milestone.year}</h3>
                        <p className="text-boswin-gray">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-4">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-red-400"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services & Brands */}
      <section className="py-16 bg-white bg-opacity-90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-boswin-navy mb-4 text-center">Services & Brands</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <div key={index} className="bg-red-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-2 bg-gradient-to-r from-red-300 to-red-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-boswin-navy mb-2 group-hover:text-red-500 transition-colors">{service.title}</h3>
                  <p className="text-red-500 font-medium mb-3">{service.description}</p>
                  <p className="text-boswin-gray">{service.details}</p>
                  <a href="#" className="inline-flex items-center text-red-500 mt-4 font-medium hover:text-boswin-navy transition-colors">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-boswin-navy mb-4 text-center">Contact Us</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* China Office */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-red-300">
              <h3 className="text-2xl font-bold text-boswin-navy mb-4">Head Office</h3>
              <h4 className="text-lg font-semibold text-red-500 mb-4">Zhejiang Boswin Technology Co. Ltd</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-red-500 mt-1 mr-3" />
                  <p className="text-boswin-gray">
                    Zhonghao International Business Center, No. 672, Xintang Road, Jianggan District, Hangzhou, Zhejiang, China
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-500 mr-3" />
                  <p className="text-boswin-gray">+8618626859893</p>
                </div>
              </div>
            </div>
            
            {/* Sri Lanka Office */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-red-300">
              <h3 className="text-2xl font-bold text-boswin-navy mb-4">Sri Lanka Office</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-red-500 mt-1 mr-3" />
                  <p className="text-boswin-gray">
                    12, Second Lane, Beddagana Road, Pita Kotte, Sri Lanka
                  </p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-500 mr-3" />
                  <p className="text-boswin-gray">Mon-Sat: 08:00 - 18:00</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-500 mr-3" />
                  <p className="text-boswin-gray">+94 76 300 6555</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
