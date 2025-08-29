import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "خطأ في الإرسال",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "تم إرسال الرسالة بنجاح",
      description: "شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-testid="contact-header">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="contact-title">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في اختيار المنتج المناسب
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8" data-testid="contact-info">
            <Card className="bg-card p-8 border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-info-title">
                معلومات التواصل
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1" data-testid="contact-address-title">العنوان</h4>
                    <p className="text-muted-foreground" data-testid="contact-address">
                      شارع الملك فهد، الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1" data-testid="contact-phone-title">الهاتف</h4>
                    <p className="text-muted-foreground" data-testid="contact-phone">+966 50 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1" data-testid="contact-email-title">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground" data-testid="contact-email">info@silverhand.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1" data-testid="contact-hours-title">ساعات العمل</h4>
                    <p className="text-muted-foreground" data-testid="contact-hours-weekdays">السبت - الخميس: 9:00 ص - 10:00 م</p>
                    <p className="text-muted-foreground" data-testid="contact-hours-friday">الجمعة: 2:00 م - 10:00 م</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Social Media */}
            <Card className="bg-card p-8 border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="social-title">تابعنا على</h3>
              
              <div className="flex gap-4" data-testid="social-links">
                {/* Social media icons would go here */}
                <div className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-3 rounded-lg transition-colors cursor-pointer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-3 rounded-lg transition-colors cursor-pointer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-card p-8 border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-form-title">
              أرسل لنا رسالة
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                    الاسم الأول *
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="أدخل اسمك الأول"
                    className="w-full"
                    required
                    data-testid="input-firstName"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                    اسم العائلة
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="أدخل اسم العائلة"
                    className="w-full"
                    data-testid="input-lastName"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  البريد الإلكتروني *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  رقم الهاتف
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="أدخل رقم هاتفك"
                  className="w-full"
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                  الموضوع
                </label>
                <Select value={formData.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full" data-testid="select-subject">
                    <SelectValue placeholder="اختر موضوع الرسالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product-inquiry">استفسار عن منتج</SelectItem>
                    <SelectItem value="order-status">حالة الطلب</SelectItem>
                    <SelectItem value="technical-support">دعم فني</SelectItem>
                    <SelectItem value="general">عام</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  الرسالة *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="أكتب رسالتك هنا..."
                  className="w-full resize-none"
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg font-semibold transition-colors"
                data-testid="button-submit"
              >
                إرسال الرسالة
              </Button>
            </form>
          </Card>
          
        </div>
      </div>
    </section>
  );
}
