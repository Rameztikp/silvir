import { CheckCircle, Clock, Headphones, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1" data-testid="about-content">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
              من نحن
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed" data-testid="about-description">
              <p>
                <strong className="text-foreground">Silver Hand</strong> هو متجرك المتخصص في عالم المعسلات الإلكترونية الفاخرة. 
                نحن نؤمن بأن التجربة المثالية تبدأ بالجودة العالية والتصميم الأنيق.
              </p>
              
              <p>
                منذ تأسيسنا، نسعى لتقديم أفضل المنتجات المختارة بعناية من أرقى العلامات التجارية العالمية، 
                مع الحرص على توفير تجربة تسوق استثنائية وخدمة عملاء متميزة.
              </p>
              
              <p>
                نتطلع إلى أن نكون الوجهة الأولى لعشاق المعسلات الإلكترونية في المنطقة، 
                ونواصل الابتكار في تقديم أحدث التقنيات والتصاميم الأنيقة.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10" data-testid="about-features">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground" data-testid="feature-quality-title">جودة مضمونة</h3>
                  <p className="text-sm text-muted-foreground" data-testid="feature-quality-desc">منتجات أصلية 100%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground" data-testid="feature-delivery-title">توصيل سريع</h3>
                  <p className="text-sm text-muted-foreground" data-testid="feature-delivery-desc">خدمة توصيل موثوقة</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground" data-testid="feature-support-title">دعم فني متميز</h3>
                  <p className="text-sm text-muted-foreground" data-testid="feature-support-desc">فريق خبراء جاهز للمساعدة</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground" data-testid="feature-payment-title">دفع آمن</h3>
                  <p className="text-sm text-muted-foreground" data-testid="feature-payment-desc">حماية كاملة للمعاملات</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2" data-testid="about-image">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800"
              alt="Modern Hookah Store Interior"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
