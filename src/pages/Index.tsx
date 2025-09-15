import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FoodDrinks from "@/components/FoodDrinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Experience />
      <FoodDrinks />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;