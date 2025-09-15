const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                DYNAMO
              </h3>
              <span className="text-muted-foreground">Sports Hub</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Ukraine's ultimate sports bar experience. Where every game matters and every fan is family.
            </p>
            <div className="w-2 h-2 bg-sports-yellow rounded-full animate-pulse inline-block mr-2"></div>
            <span className="text-sports-yellow font-semibold">Live Sports 24/7</span>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 text-foreground/70">
              <a href="#home" className="block hover:text-primary transition-colors">Home</a>
              <a href="#about" className="block hover:text-primary transition-colors">About</a>
              <a href="#experience" className="block hover:text-primary transition-colors">Experience</a>
              <a href="#food" className="block hover:text-primary transition-colors">Food & Drinks</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Game Day Info</h4>
            <div className="space-y-2 text-foreground/70">
              <p>📍 123 Sports Boulevard, Kyiv</p>
              <p>📞 +380 44 123 4567</p>
              <p>🕐 Open Daily 11AM - 2AM</p>
              <p>🏈 All Major Sports Covered</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-foreground/60">
            © 2024 DYNAMO Sports Hub. All rights reserved. | Built for the fans, by the fans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;