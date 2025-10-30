import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import PerfumeBottle from "./PerfumeBottle";

interface FragranceSelection {
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
}

const CustomPerfumeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [selection, setSelection] = useState<FragranceSelection>({
    topNotes: [],
    middleNotes: [],
    baseNotes: []
  });
  const [showSummary, setShowSummary] = useState(false);

  const topNotesOptions = ["Bergamot", "Lemon", "Lavender", "Mint", "Ginger", "Orange", "Grapefruit"];
  const middleNotesOptions = ["Rose", "Jasmine", "Ylang-Ylang", "Geranium", "Neroli", "Lily", "Iris"];
  const baseNotesOptions = ["Sandalwood", "Vanilla", "Musk", "Amber", "Patchouli", "Cedar", "Vetiver"];

  const handleNoteToggle = (category: keyof FragranceSelection, note: string) => {
    setSelection(prev => ({
      ...prev,
      [category]: prev[category].includes(note)
        ? prev[category].filter(n => n !== note)
        : [...prev[category], note]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in your name and email");
      return;
    }

    if (!email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (selection.topNotes.length === 0 || selection.middleNotes.length === 0 || selection.baseNotes.length === 0) {
      toast.error("Please select at least one note from each category");
      return;
    }

    // Send to Formspree - REPLACE YOUR_FORM_ID with your actual Formspree form ID
    try {
      const response = await fetch("https://formspree.io/f/xwpwqzby", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          topNotes: selection.topNotes.join(", "),
          middleNotes: selection.middleNotes.join(", "),
          baseNotes: selection.baseNotes.join(", "),
          additionalNotes
        })
      });

      if (response.ok) {
        setShowSummary(true);
        toast.success("Your custom fragrance request has been submitted!");
        
        // Reset form after successful submission
        setTimeout(() => {
          setName("");
          setEmail("");
          setAdditionalNotes("");
          setSelection({ topNotes: [], middleNotes: [], baseNotes: [] });
          setShowSummary(false);
        }, 5000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit. Please check your connection.");
    }
  };

  const totalSelected = selection.topNotes.length + selection.middleNotes.length + selection.baseNotes.length;

  return (
    <section id="custom-form" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Create Your Signature Scent
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Select your preferred notes to compose a fragrance that's uniquely yours
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-2xl border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl">Fragrance Builder</CardTitle>
            <CardDescription>
              {totalSelected > 0 ? `${totalSelected} notes selected` : "Start by selecting your favorite notes"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-[1fr,auto] gap-8">
                {/* Form Fields */}
                <div className="space-y-8">
                  {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Top Notes */}
              <div className="space-y-4">
                <div>
                  <Label className="text-lg font-semibold">Top Notes (First Impression) *</Label>
                  <p className="text-sm text-muted-foreground mt-1">Fresh and light scents that create the initial impression</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {topNotesOptions.map((note) => (
                    <div key={note} className="flex items-center space-x-2">
                      <Checkbox
                        id={`top-${note}`}
                        checked={selection.topNotes.includes(note)}
                        onCheckedChange={() => handleNoteToggle('topNotes', note)}
                      />
                      <label
                        htmlFor={`top-${note}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {note}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Notes */}
              <div className="space-y-4">
                <div>
                  <Label className="text-lg font-semibold">Middle Notes (The Heart) *</Label>
                  <p className="text-sm text-muted-foreground mt-1">The core character of your fragrance</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {middleNotesOptions.map((note) => (
                    <div key={note} className="flex items-center space-x-2">
                      <Checkbox
                        id={`middle-${note}`}
                        checked={selection.middleNotes.includes(note)}
                        onCheckedChange={() => handleNoteToggle('middleNotes', note)}
                      />
                      <label
                        htmlFor={`middle-${note}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {note}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Base Notes */}
              <div className="space-y-4">
                <div>
                  <Label className="text-lg font-semibold">Base Notes (The Foundation) *</Label>
                  <p className="text-sm text-muted-foreground mt-1">Deep, lasting scents that provide longevity</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {baseNotesOptions.map((note) => (
                    <div key={note} className="flex items-center space-x-2">
                      <Checkbox
                        id={`base-${note}`}
                        checked={selection.baseNotes.includes(note)}
                        onCheckedChange={() => handleNoteToggle('baseNotes', note)}
                      />
                      <label
                        htmlFor={`base-${note}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {note}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Preferences or Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Tell us about your style, preferences, or any specific requests..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  rows={4}
                />
              </div>

              {/* Summary Preview */}
              {totalSelected > 0 && (
                <div className="p-6 bg-accent/10 rounded-lg border border-accent/20 animate-scale-in">
                  <h3 className="text-lg font-semibold mb-4">Your Fragrance Profile</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-accent mb-2">Top Notes:</p>
                      <p>{selection.topNotes.join(", ") || "None selected"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-accent mb-2">Middle Notes:</p>
                      <p>{selection.middleNotes.join(", ") || "None selected"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-accent mb-2">Base Notes:</p>
                      <p>{selection.baseNotes.join(", ") || "None selected"}</p>
                    </div>
                  </div>
                </div>
              )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="luxury"
                    className="w-full text-lg py-6"
                  >
                    Submit Your Custom Fragrance
                  </Button>

                  {showSummary && (
                    <div className="p-6 bg-accent/20 rounded-lg text-center animate-scale-in">
                      <p className="text-lg font-medium">
                        ✨ Thank you, {name}! We'll contact you at {email} to finalize your bespoke fragrance.
                      </p>
                    </div>
                  )}
                </div>

                {/* Perfume Bottle Visualization - Right Side */}
                <div className="hidden lg:block">
                  <PerfumeBottle
                    topNotes={selection.topNotes}
                    middleNotes={selection.middleNotes}
                    baseNotes={selection.baseNotes}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CustomPerfumeForm;