import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HersSection";
import OurSection from "./components/OurSection/OurSection";
import OurPlans from "./components/OurPlans/OurPlans";
import Ourfitness from "./components/Our fitness/Our fitness";
import FitmakerBlog from "./components/FitmakerBlog/FitmakerBlog";
import JoinOur from "./components/JoinOur/JoinOur";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurSection />
      <OurPlans />
      <Ourfitness />
      <FitmakerBlog />
      <JoinOur />
        <Footer />
    </>
  );
}

export default App;
