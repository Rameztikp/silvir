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

const products: Product[] = [
  {
    id: 1,
    name: "معسل إلكتروني فاخر",
    description: "معسل إلكتروني عالي الجودة بتقنية حديثة",
    price: "1,299 ريال",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    name: "جهاز تدخين حديث",
    description: "تصميم عصري مع إضاءة LED زرقاء",
    price: "899 ريال",
    image: "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    name: "طقم إكسسوارات فاخر",
    description: "مجموعة كاملة من الإكسسوارات الفضية",
    price: "549 ريال",
    image: "https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    name: "معسل احترافي متطور",
    description: "مع شاشة رقمية وتحكم ذكي",
    price: "1,899 ريال",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    name: "جهاز محمول صغير",
    description: "تصميم مدمج وسهل الحمل",
    price: "399 ريال",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    name: "قطع زجاجية فاخرة",
    description: "زجاج عالي الجودة بتصميم أنيق",
    price: "249 ريال",
    image: "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 7,
    name: "معسل RGB متطور",
    description: "إضاءة متعددة الألوان وتحكم ذكي",
    price: "1,599 ريال",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 8,
    name: "طقم البداية",
    description: "كل ما تحتاجه للبدء",
    price: "699 ريال",
    image: "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
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
