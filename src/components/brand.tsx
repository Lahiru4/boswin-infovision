import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Image as Images } from "lucide-react";
import alipay from "../images/alipay2.png";
import beeze from "../images/Beez.png";
import citymall from "../images/citymall.png";
import falcora from "../images/falcora.png";
import kdona from "../images/Kdona.png";
import sripay from "../images/Sripay.png";
import tea from "../images/tea2.png";
import V from "../images/V2.png";
import wechat from "../images/Wechat.png";
import xiomi from "../images/Xiomi.png";

type Brand = {
    logo?: string;
    title: string;
    description: string;
    details?: string;
};

const brands: Brand[] = [
    { title: "SRIPAY", description: "Custom-Designed Payment Gateway", details: "Your go-to custom payment gateway for seamless online transactions. Authorized Alipay agent with the approval of the Central Bank of Sri Lanka.", logo: sripay },
    { title: "MISTORE", description: "Official Wholesaler and Retailer of Sri Lanka", details: "Your official Xiaomi products destination, serving as the authorized wholesaler and retailer in Sri Lanka.", logo: xiomi },
    { title: "GoGreen", description: "Electric Three Wheeler Conversion", details: "Upgrade your three-wheeler with the BOSWIN ECO-Electric Conversion. Go green and save with an electric twist!", logo: "" },
    { title: "K'DONA", description: "Premium Gem and Jewellery", details: "Offering the finest high-end gem jewelry and ethical gem and jewelry range.", logo: kdona },
    { title: "ALIPAY", description: "Official Partner for Sri Lanka", details: "The official partner for Sri Lanka, simplifying payments and enhancing financial convenience.", logo: alipay },
    { title: "BEEZ24", description: "Service Platform catered to Entrepreneurs", details: "Your service platform in the heart of China Mainland, exclusively for entrepreneurs. Unlock new opportunities and support for your business ventures.", logo: beeze },
    { title: "FALCORRA", description: "Authorized Wholesaler and Retailer", details: "Authorized wholesaler and retailer of premium bicycles.", logo: falcora },
    { title: "VEIN GRAPHITE", description: "The World's Purest Vein Graphite", details: "Home to the world's purest vein graphite, offering unmatched quality and performance in the industry.", logo: V },
    { title: "LOOLECONDERE TEA", description: "Premium Ceylonese Tea", details: "Savor the premium taste of Ceylonese tea excellence.", logo: tea },
    { title: "WECHATPAY", description: "Official Partner for Sri Lanka", details: "Your official partner for Sri Lanka, streamlining payments for seamless transactions.", logo: wechat },
    { title: "CITYMALL", description: "Commercial and Lifestyle Center", details: "Your ultimate destination for a blend of commercial and lifestyle delights.", logo: citymall },
];

const BrandSection: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-boswin-navy mb-10">
                Our Brands
            </h2>

            {/* Brand Cards - Scrollable Row */}
            <div className="relative">
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto scroll-smooth px-4 gap-6 pb-4 no-scrollbar"
                >
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] max-w-xs bg-white rounded-xl shadow-md p-6 flex-shrink-0 flex flex-col items-center text-center transition-transform duration-500 transform hover:scale-105"
                        >
                            {brand.logo ? (
                                <img
                                    src={brand.logo}
                                    alt={brand.title}
                                    className="w-20 h-20 object-contain mb-4"
                                />
                            ) : (
                                <Images className="w-20 h-20 text-gray-300 mb-4" />
                            )}
                            <h3 className="text-xl font-bold text-boswin-navy mb-2">
                                {brand.title}
                            </h3>
                            <p className="text-sm text-boswin-gray font-semibold mb-1">
                                {brand.description}
                            </p>
                            <p className="text-sm text-gray-500">{brand.details}</p>
                        </div>
                    ))}
                </div>

                {/* Arrow Controls */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                        onClick={scrollLeft}
                        className="p-2 bg-boswin-navy text-white rounded-full hover:bg-red-500 transition"
                    >
                        <ChevronLeft size={24} />
                    </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button
                        onClick={scrollRight}
                        className="p-2 bg-boswin-navy text-white rounded-full hover:bg-red-500 transition"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;
