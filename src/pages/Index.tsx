
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TokenSection from "@/components/TokenSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Features />
        <HowItWorks />
        <TokenSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
