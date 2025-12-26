import Footer from "../components/common/LangindPage/Footer";
import Hero from "../components/common/LangindPage/Hero";
import HowItWorks from "../components/common/LangindPage/HowItWorks";

const Landing = () => {
  return (
    <div className="landingPage">
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Landing;
