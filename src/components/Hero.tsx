import { Button } from "@/components/ui/button";
import { Play, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-sports-bar.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="DYNAMO Sports Hub interior with TVs and celebrating crowd"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-stadium opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-pulse-glow">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              DYNAMO
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-sports-yellow mb-6">
            SPORTS HUB
          </h2>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ukraine's Ultimate Sports Experience • Wall-to-Wall TVs • Craft Drinks • 
            Electrifying Atmosphere • Every Game, Every Victory, Every Moment
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-hero hover:shadow-glow text-lg px-8 py-6 animate-pulse-glow">
              <Play className="mr-2 h-5 w-5" />
              Watch Live Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-sports-yellow text-sports-yellow hover:bg-sports-yellow/10">
              <MapPin className="mr-2 h-5 w-5" />
              Find Us
            </Button>
          </div>
          
          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-foreground/80">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-sports-yellow" />
              <span>Open Daily 11AM - 2AM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sports-yellow rounded-full animate-pulse"></div>
              <span>Live Sports 24/7</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sports-yellow/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sports-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;