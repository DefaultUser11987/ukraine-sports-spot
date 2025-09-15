import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Car, Train, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-stadium">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              JOIN THE
            </span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-sports-yellow mb-4">
            CHAMPIONSHIP EXPERIENCE
          </h3>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to experience Ukraine's ultimate sports bar? Find us, call us, or just show up – 
            we're always ready for the next big game!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Location */}
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Location</h4>
              <p className="text-foreground/80 mb-2">123 Sports Boulevard</p>
              <p className="text-foreground/80 mb-2">Central District, Kyiv</p>
              <p className="text-foreground/80 mb-4">Ukraine 01001</p>
              <div className="space-y-2 text-sm text-foreground/70">
                <div className="flex items-center justify-center gap-2">
                  <Train className="h-4 w-4" />
                  <span>2 min from Maidan Station</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Car className="h-4 w-4" />
                  <span>Free parking available</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Hours</h4>
              <div className="space-y-2 text-foreground/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>11AM - 2AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10AM - 3AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10AM - 2AM</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-sports-yellow/20 rounded-lg">
                <p className="text-sm text-sports-yellow font-semibold">
                  Extended hours during major tournaments!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Contact</h4>
              <div className="space-y-3 text-foreground/80">
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+380 44 123 4567</p>
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p>+380 99 123 4567</p>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@dynamosportshub.ua</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Ready for Game Day?</h3>
            <p className="text-lg text-white/90 mb-6">
              Reserve your table for the next big match or just drop by – 
              the game is always better at DYNAMO Sports Hub!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Calendar className="mr-2 h-5 w-5" />
                Reserve Table
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-foreground/60">
            <div className="w-2 h-2 bg-sports-yellow rounded-full animate-pulse"></div>
            <span>Follow us on social media for live game updates and special events</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;