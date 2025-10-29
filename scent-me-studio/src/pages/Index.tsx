import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import CustomPerfumeForm from "@/components/CustomPerfumeForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <HowItWorks />
      <CustomPerfumeForm />
      <Footer />
    </main>
  );
};

export default Index;
