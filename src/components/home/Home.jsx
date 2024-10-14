import { useEffect, useRef, useState } from "react";
import { Button } from "./../ui/Button";
import Card from "./../ui/Card";
import CardContent from "./../ui/CardContent";
import { Sparkles, Share2, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OccasionCards from "./OccasionCards";

export default function HomePage() {
  const [visible, setVisible] = useState([]);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, entry.target.dataset.index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.dataset.index = index;
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <OccasionCards />
        <section className="py-12 px-4 bg-muted">
          <div className="container mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Why Choose Badhai Bazaar?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Sparkles className="h-12 w-12 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">Easy to Use</h4>
                  <p className="text-muted-foreground">
                    Intuitive tools to create stunning designs in minutes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Share2 className="h-12 w-12 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">
                    Share Instantly
                  </h4>
                  <p className="text-muted-foreground">
                    Share your creations on social media with one click
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Palette className="h-12 w-12 mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">
                    Diverse Templates
                  </h4>
                  <p className="text-muted-foreground">
                    Choose from a wide range of festival-specific templates
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Spread Some Joy?</h3>
          <p className="text-xl mb-8">
            Start creating your own festive posters and banners today!
          </p>
          <Button variant="secondary" size="lg">
            Get Started for Free
          </Button>
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
