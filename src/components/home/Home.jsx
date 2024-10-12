import { useEffect, useRef, useState } from "react";
import { Button } from "./../ui/Button";
import Card from "./../ui/Card";
import CardContent from "./../ui/CardContent";
import { Sparkles, Share2, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";

const occasions = [
  {
    label: "Festivals",
    items: [
      {
        label: "Diwali",
        path: "/festivals/diwali",
        description: "Get a variety of posters and banners for Diwali wishes",
        images: ["https://t.ly/jgOiu", "https://t.ly/jgOiu", "https://t.ly/jgOiu"],
      },
      {
        label: "Eid",
        path: "/festivals/eid",
        description: "Celebrate Eid with beautiful posters and banners",
        images: ["https://t.ly/32Zz1", "https://t.ly/32Zz1", "https://t.ly/32Zz1"],
      },
      {
        label: "Holi",
        path: "/festivals/holi",
        description: "Spread colorful Holi wishes with our designs",
        images: ["https://t.ly/C-Ebn", "https://t.ly/C-Ebn", "https://t.ly/C-Ebn"],
      },
    ],
  },
  {
    label: "Special Days",
    items: [
      {
        label: "Mother's Day",
        path: "/special-days/mothers-day",
        description: "Show your love with Mother's Day designs",
        images: ["https://t.ly/Ld1DR", "https://t.ly/Ld1DR", "https://t.ly/Ld1DR"],
      },
      {
        label: "Valentine's Day",
        path: "/special-days/valentines-day",
        description: "Express your love with Valentine's Day cards",
        images: ["https://t.ly/VPVcD", "https://t.ly/VPVcD", "https://t.ly/VPVcD"],
      },
    ],
  },
  {
    label: "Anniversaries",
    items: [
      {
        label: "Wedding Anniversary",
        path: "/anniversaries/wedding",
        description: "Celebrate love with anniversary designs",
        images: ["https://t.ly/VPVcD", "https://t.ly/VPVcD", "https://t.ly/VPVcD"],
      },
    ],
  },
];

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
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Create and Share Festive Joy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {occasions.flatMap((category) =>
                category.items.map((item, index) => (
                  <div
                    key={item.label}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className={`transition-opacity duration-500 ${
                      visible.includes(index.toString())
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {item.images.map((image, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={image}
                              alt={`${item.label} ${imgIndex + 1}`}
                              className="w-full h-24 object-cover rounded"
                            />
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.label}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        <Button onClick={() => navigate(item.path)}>
                          Create Now
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

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