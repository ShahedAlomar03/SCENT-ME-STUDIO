const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Understanding the Fragrance Pyramid
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A well-crafted perfume unfolds in three distinct layers, each revealing itself over time
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Pyramid visualization */}
            <div className="flex flex-col items-center gap-0 mb-12">
              <div className="w-full max-w-xs bg-gradient-to-b from-accent/20 to-accent/10 p-8 text-center rounded-t-full border-2 border-accent/30 animate-fade-in">
                <h3 className="text-2xl mb-3 text-accent-foreground">Top Notes</h3>
                <p className="text-sm text-muted-foreground">First impression • 5-15 minutes</p>
                <p className="text-sm mt-2">Light, fresh, and volatile</p>
              </div>
              
              <div className="w-full max-w-md bg-gradient-to-b from-accent/30 to-accent/20 p-8 text-center border-x-2 border-accent/30 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl mb-3 text-accent-foreground">Middle Notes</h3>
                <p className="text-sm text-muted-foreground">The heart • 2-4 hours</p>
                <p className="text-sm mt-2">Full-bodied and smooth</p>
              </div>
              
              <div className="w-full max-w-lg bg-gradient-to-b from-accent/40 to-accent/30 p-8 text-center rounded-b-3xl border-2 border-t-0 border-accent/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl mb-3 text-accent-foreground">Base Notes</h3>
                <p className="text-sm text-muted-foreground">The foundation • 5-8 hours</p>
                <p className="text-sm mt-2">Rich, deep, and long-lasting</p>
              </div>
            </div>

            {/* Detailed explanation */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 animate-fade-in">
                <div className="text-6xl mb-4">🍋</div>
                <h4 className="text-xl mb-3 font-semibold">Top Notes</h4>
                <p className="text-sm text-muted-foreground">
                  The initial scent that greets you. Citrus, herbs, and light florals create an inviting first impression that evaporates quickly.
                </p>
              </div>

              <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-6xl mb-4">🌹</div>
                <h4 className="text-xl mb-3 font-semibold">Middle Notes</h4>
                <p className="text-sm text-muted-foreground">
                  The soul of your fragrance. Floral and fruity notes develop gradually, creating the perfume's character and identity.
                </p>
              </div>

              <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-6xl mb-4">🌲</div>
                <h4 className="text-xl mb-3 font-semibold">Base Notes</h4>
                <p className="text-sm text-muted-foreground">
                  The lasting impression. Woody, musky, and warm notes provide depth and longevity, lingering on your skin for hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
