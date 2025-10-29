import { Sparkles, Droplet, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            The Art of Bespoke Fragrance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Scent Me, we believe every individual deserves a fragrance as unique as their fingerprint. 
            Our master perfumers blend centuries-old techniques with modern artistry to create your perfect scent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 rounded-lg bg-background hover:shadow-xl transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl mb-4">Personalized</h3>
            <p className="text-muted-foreground">
              Every scent is crafted exclusively for you, reflecting your personality and preferences.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-background hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Droplet className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl mb-4">Premium Quality</h3>
            <p className="text-muted-foreground">
              We source the finest natural ingredients from around the world for unparalleled quality.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-background hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl mb-4">Expertly Crafted</h3>
            <p className="text-muted-foreground">
              Our perfumers bring decades of experience to create harmonious, lasting fragrances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
