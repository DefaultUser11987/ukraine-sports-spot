import { Card, CardContent } from "@/components/ui/card";
import { Tv, Users, Volume2, Trophy } from "lucide-react";
import tvWallImage from "@/assets/tv-wall.jpg";
import happyCrowdImage from "@/assets/happy-crowd.jpg";

const Experience = () => {
  const features = [
    {
      icon: Tv,
      title: "50+ HD Screens",
      description: "Wall-to-wall TVs broadcasting every major sport, league, and championship",
    },
    {
      icon: Users,
      title: "Electric Atmosphere",
      description: "Join hundreds of passionate fans creating an unforgettable game day experience",
    },
    {
      icon: Volume2,
      title: "Premium Sound",
      description: "State-of-the-art audio system puts you right in the stadium action",
    },
    {
      icon: Trophy,
      title: "All Sports Covered",
      description: "Football, basketball, hockey, soccer, and every sport that matters to you",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-stadium">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              THE ULTIMATE
            </span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-sports-yellow mb-4">
            SPORTS EXPERIENCE
          </h3>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Immerse yourself in the most exciting sports viewing experience in Ukraine. 
            Every seat is the best seat in the house.
          </p>
        </div>

        {/* TV Wall Showcase */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-sports-blue/20">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={tvWallImage} 
                  alt="Wall of TV screens showing various sports"
                  className="w-full h-96 object-cover animate-tv-flicker"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-sports-yellow text-background px-4 py-2 rounded-full font-bold text-sm">
                    LIVE NOW
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full group-hover:animate-pulse-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h4>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Crowd Experience */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-sports-yellow">
              Feel the Energy
            </h3>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              When your team scores, the entire bar erupts in celebration. When the game gets intense, 
              you can feel the electricity in the air. This isn't just watching sports – this is living them.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sports-yellow rounded-full"></div>
                <span className="text-foreground/80">Passionate fan community from all over Ukraine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sports-yellow rounded-full"></div>
                <span className="text-foreground/80">Game day celebrations and watch parties</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-sports-yellow rounded-full"></div>
                <span className="text-foreground/80">VIP viewing areas for special matches</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={happyCrowdImage} 
              alt="Happy crowd celebrating at DYNAMO Sports Hub"
              className="w-full h-80 object-cover rounded-lg shadow-warm animate-crowd-cheer"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-sports-blue/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;