import { Building, Clock, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-boswin-navy mb-4 text-center">
            Contact Us
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* China Office */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-red-300">
              <h3 className="text-2xl font-bold text-boswin-navy mb-4">
                Head Office
              </h3>
              <h4 className="text-lg font-semibold text-red-500 mb-4">
                Zhejiang Boswin Technology Co. Ltd
              </h4>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-red-500 mt-1 mr-3" />
                  <p className="text-boswin-gray">
                    Zhonghao International Business Center, No. 672, Xintang
                    Road, Jianggan District, Hangzhou, Zhejiang, China
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
              <h3 className="text-2xl font-bold text-boswin-navy mb-4">
                Sri Lanka Office
              </h3>

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
    </section>
  );
};

export default ContactUs;
