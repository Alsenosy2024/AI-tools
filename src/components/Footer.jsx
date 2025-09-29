import { Heart, Code, Linkedin, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border-t border-border/50 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-foreground mb-4">عن المشروع</h3>
            <p className="text-muted-foreground leading-relaxed" dir="rtl">
              دليل شامل لأفضل أدوات الذكاء الاصطناعي المتاحة في 2025، 
              مُصمم بعناية لمساعدتك في اكتشاف الأدوات المناسبة لاحتياجاتك.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">روابط سريعة</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full">
                جميع الأدوات
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                الأدوات المميزة
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                أحدث الإضافات
              </Button>
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">تواصل معي</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start hover:bg-primary/10"
                onClick={() => window.open('https://www.linkedin.com/in/alsenosy', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start hover:bg-primary/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                البريد الإلكتروني
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start hover:bg-primary/10"
              >
                <Globe className="w-4 h-4 mr-2" />
                الموقع الشخصي
              </Button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} د. أحمد السنوسي. جميع الحقوق محفوظة.</span>
            </div>
            
            {/* Made with love */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>صُنع بـ</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>و</span>
              <Code className="w-4 h-4 text-primary" />
              <span>باستخدام React و Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float-delayed" />
    </footer>
  );
};

export default Footer;
