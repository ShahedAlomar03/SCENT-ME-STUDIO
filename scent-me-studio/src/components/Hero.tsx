import { Button } from "@/components/ui/button";
import logo from "@/assets/scent-me-logo.png";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('custom-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      <div className="container relative z-10 mx-auto px-4 text-center animate-fade-in">
        <div className="mb-8 flex justify-center animate-float">
          <img 
            src={logo} 
            alt="Scent Me Logo" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          Scent Me
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light max-w-3xl mx-auto">
          Your Signature. Your Story. Your Scent.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Craft a bespoke fragrance that captures your essence. Each bottle tells a unique story—yours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="luxury"
            onClick={scrollToForm}
            className="text-base md:text-lg px-8 py-6"
          >
            Create Your Scent
          </Button>
          
          <Button 
            size="lg" 
            variant="luxuryOutline"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-base md:text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
