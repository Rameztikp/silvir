import logoImage from "@assets/logo se_1756499310931.jpg";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2" data-testid="footer-company">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logoImage}
                alt="Silver Hand Logo"
                className="h-10 w-auto brightness-200"
              />
              <span className="text-2xl font-bold" data-testid="footer-logo-text">Silver Hand</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md" data-testid="footer-description">
              وجهتك الأولى للمعسلات الإلكترونية الفاخرة. نوفر أجود المنتجات وأحدث التقنيات 
              لتجربة استثنائية لا تُنسى.
            </p>
            
            <div className="flex gap-4" data-testid="footer-social">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" data-testid="social-twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" data-testid="social-instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" data-testid="social-facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" data-testid="social-youtube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.146-1.378l.584-2.225c.214-.814.88-3.255.88-3.255s-.199-.398-.199-.985c0-.921.538-1.608 1.209-1.608.57 0 .846.428.846.942 0 .573-.365 1.431-.553 2.227-.157.659.331 1.196.983 1.196 1.181 0 2.09-1.244 2.09-3.042 0-1.588-1.14-2.7-2.773-2.7-1.892 0-3.003 1.419-3.003 2.888 0 .571.22 1.186.494 1.518.054.065.062.122.046.188-.05.207-.161.656-.183.748-.029.118-.094.143-.217.086-.806-.375-1.31-1.551-1.31-2.497 0-2.09 1.525-4.017 4.4-4.017 2.308 0 4.108 1.643 4.108 3.838 0 2.290-1.444 4.135-3.448 4.135-.672 0-1.305-.349-1.52-.765 0 0-.332 1.265-.413 1.578-.15.573-.555 1.29-.826 1.729C10.045 23.245 10.963 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-testid="footer-links">
            <h3 className="text-lg font-semibold mb-6" data-testid="footer-links-title">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-home">الرئيسية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-products">المنتجات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-offers">العروض الخاصة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-about">من نحن</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-contact">تواصل معنا</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div data-testid="footer-service">
            <h3 className="text-lg font-semibold mb-6" data-testid="footer-service-title">خدمة العملاء</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-returns">سياسة الإرجاع</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-shipping">الشحن والتوصيل</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-faq">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-support">الدعم الفني</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-privacy">سياسة الخصوصية</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0" data-testid="footer-copyright">
              © 2024 Silver Hand. جميع الحقوق محفوظة.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400" data-testid="footer-legal">
              <a href="#" className="hover:text-white transition-colors" data-testid="link-terms">الشروط والأحكام</a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-privacy-policy">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-cookies">ملفات تعريف الارتباط</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
