
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FocusAreas from "../components/FocusAreas";
import GlobalReach from "../components/GlobalReach";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FocusAreas />
      <GlobalReach />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
