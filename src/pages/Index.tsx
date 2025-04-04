
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FocusAreas from "../components/FocusAreas";
import GlobalReach from "../components/GlobalReach";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";
import ContactUs from "@/components/ContactUs";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <GlobalReach />
      <Services />
      <ContactUs />   
      <Footer />
      <LiveChat />

    </div>
  );
};

export default Index;
