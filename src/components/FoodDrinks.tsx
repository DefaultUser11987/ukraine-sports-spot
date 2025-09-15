import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Utensils, Beer, Pizza } from "lucide-react";
import barFoodImage from "@/assets/bar-food.jpg";

const FoodDrinks = () => {
  const offerings = [
    {
      icon: Beer,
      title: "Craft Beers",
      description: "Local Ukrainian brews and international favorites on tap",
    },
    {
      icon: Utensils,
      title: "Game Day Eats",
      description: "Wings, nachos, burgers, and Ukrainian specialties",
    },
    {
      icon: Pizza,
      title: "Sharing Platters",
      description: "Perfect for groups watching the big game together",
    },
    {
      icon: Coffee,
      title: "Non-Alcoholic",
      description: "Premium sodas, juices, and Ukrainian beverages",
    },
  ];

  return (
    <section id="food" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              FUEL YOUR
            </span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-sports-yellow mb-4">
            GAME DAY PASSION
          </h3>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            From ice-cold craft beers to mouth-watering game day favorites, 
            we've got everything you need to make every match unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={barFoodImage} 
              alt="Delicious bar food and craft beer at DYNAMO Sports Hub"
              className="w-full h-96 object-cover rounded-lg shadow-warm"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-sports-orange/20 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <div className="bg-sports-yellow text-background px-4 py-2 rounded-full font-bold text-sm">
                FRESH DAILY
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-sports-yellow">
              Taste the Victory
            </h3>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Our kitchen stays open late and our taps flow cold. Whether you're celebrating a victory 
              or drowning your sorrows, we've got the perfect food and drink pairing for every moment of the game.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {offerings.map((offering, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                        <offering.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-foreground">{offering.title}</h4>
                    </div>
                    <p className="text-sm text-foreground/70">{offering.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-warm hover:shadow-victory">
                View Full Menu
              </Button>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Game Day Specials</h3>
          <p className="text-lg mb-6 opacity-90">
            Every match day features special drink prices and food combos. Join us for the ultimate game day experience!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold">Happy Hour: 4-7 PM Daily</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold">Group Discounts Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDrinks;