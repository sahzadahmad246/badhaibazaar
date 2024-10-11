import { useEffect, useRef, useState } from "react";
import { Button } from "./../ui/Button";
import Card from "./../ui/Card";
import CardContent from "./../ui/CardContent";
import { Sparkles, Share2, Palette } from "lucide-react";

// Array of random images for featured designs
const featuredImages = [
  "https://media.istockphoto.com/id/1351592257/photo/traditional-diya-lamps-lit-during-diwali-celebration.jpg?s=1024x1024&w=is&k=20&c=T74jmM1q1CDKfZea2sPNxIR7VUVfkF_dwZ2SBlT5FoE=",
  "https://media.istockphoto.com/id/2018101881/photo/ramadan-kareem-photography-lantern-with-crescent-moon-shape-on-the-beach.jpg?s=1024x1024&w=is&k=20&c=lDFeA_QFFi0vNXj3aDayIf8Q2pbfpChNliISyiy_YFk=",
  "https://media.istockphoto.com/id/490136776/photo/holi-festival-in-india.jpg?s=1024x1024&w=is&k=20&c=Y5ybd60PsWo1x1k8jCsIQLYLwSziANVkXXqC95KeO4w=",
];

export default function HomePage() {
  const [visible, setVisible] = useState(Array(featuredImages.length).fill(false));
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [cardsRef]);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-12 px-4 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4">Create and Share Festive Joy</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Design beautiful posters and banners for any occasion or festival
          </p>
          <Button size="lg">Start Creating</Button>
        </section>

        <section className="py-12 px-4 bg-muted">
          <div className="container mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">Why Choose Badhai Bazaar?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center text-center">
                  <Sparkles className="h-12 w-12 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">Easy to Use</h4>
                  <p className="text-muted-foreground">Intuitive tools to create stunning designs in minutes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center">
                  <Share2 className="h-12 w-12 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">Share Instantly</h4>
                  <p className="text-muted-foreground">Share your creations on social media with one click</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center">
                  <Palette className="h-12 w-12 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">Diverse Templates</h4>
                  <p className="text-muted-foreground">Choose from a wide range of festival-specific templates</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Designs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredImages.map((image, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`h-60 overflow-hidden rounded-lg shadow-md ${visible[index] ? "fade-in" : "opacity-0"}`}
                >
                  <img
                    src={image}
                    alt={`Featured Design ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Spread Some Joy?</h3>
          <p className="text-xl mb-8">Start creating your own festive posters and banners today!</p>
          <Button variant="secondary" size="lg">Get Started for Free</Button>
        </section>
      </main>

      <footer className="py-6 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          &copy; 2023 Badhai Bazaar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
