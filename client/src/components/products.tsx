import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

import product1 from "@assets/1 (2)_1756500782507.png";
import product2 from "@assets/2_1756500782510.png";
import product3 from "@assets/3_1756500782511.png";
import product4 from "@assets/4_1756500782511.png";

const products: Product[] = [
  {
    id: 1,
    name: "RAZ TN9000 أزرق",
    description: "معسل إلكتروني بشاشة رقمية وتقنية BOOST المتطورة",
    price: "1,299 ريال",
    image: product1
  },
  {
    id: 2,
    name: "RAZ TN9000 بنفسجي",
    description: "تصميم أنيق باللون البنفسجي مع شاشة تفاعلية",
    price: "1,299 ريال",
    image: product2
  },
  {
    id: 3,
    name: "RAZ TN9000 وردي",
    description: "لون وردي مميز مع تقنيات حديثة للاستخدام الطويل",
    price: "1,299 ريال",
    image: product3
  },
  {
    id: 4,
    name: "RAZ TN9000 أخضر",
    description: "باللون الأخضر الليموني مع واجهة تحكم متقدمة",
    price: "1,299 ريال",
    image: product4
  },
  {
    id: 5,
    name: "RAZ TN9000 أزرق كلاسيكي",
    description: "النسخة الكلاسيكية بالأزرق الفاتح",
    price: "1,199 ريال",
    image: product1
  },
  {
    id: 6,
    name: "RAZ TN9000 بنفسجي مطور",
    description: "إصدار محدود باللون البنفسجي",
    price: "1,399 ريال",
    image: product2
  },
  {
    id: 7,
    name: "RAZ TN9000 وردي فاخر",
    description: "تصميم فاخر بالوردي مع إضافات حصرية",
    price: "1,499 ريال",
    image: product3
  },
  {
    id: 8,
    name: "RAZ TN9000 أخضر برو",
    description: "الإصدار الاحترافي بالأخضر مع ميزات إضافية",
    price: "1,599 ريال",
    image: product4
  }
];

export default function Products() {
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    toast({
      title: "تم إضافة المنتج",
      description: `تم إضافة "${product.name}" إلى السلة`,
    });
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-testid="products-header">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="products-title">
            منتجاتنا المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="products-description">
            مجموعة مختارة بعناية من أفضل المعسلات الإلكترونية والإكسسوارات الحديثة
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-testid="products-grid">
          {products.map((product) => (
            <Card key={product.id} className="card-hover bg-card shadow-lg overflow-hidden border border-border" data-testid={`card-product-${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
                data-testid={`img-product-${product.id}`}
              />
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid={`text-name-${product.id}`}>
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-description-${product.id}`}>
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
                    {product.price}
                  </span>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors"
                    data-testid={`button-add-cart-${product.id}`}
                  >
                    إضافة للسلة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Products Button */}
        <div className="text-center mt-12" data-testid="view-all-section">
          <Button
            variant="secondary"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            data-testid="button-view-all"
          >
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
}
