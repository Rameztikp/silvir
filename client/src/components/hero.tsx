import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-bg opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 lg:px-8 max-w-6xl mx-auto" data-testid="hero-content">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
          <span className="block">تجربة استثنائية</span>
          <span className="block gradient-text">للمعسلات الإلكترونية</span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
          اكتشف مجموعتنا الفاخرة من المعسلات الإلكترونية عالية الجودة والإكسسوارات الحديثة
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-testid="hero-actions">
          <Button
            onClick={scrollToProducts}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            data-testid="button-shop-now"
          >
            تسوق الآن
          </Button>
          <Button
            variant="outline"
            onClick={scrollToAbout}
            className="border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            data-testid="button-learn-more"
          >
            المزيد من المعلومات
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" data-testid="scroll-indicator">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
