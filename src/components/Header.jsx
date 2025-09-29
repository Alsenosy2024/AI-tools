import { Brain, Linkedin, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl border-b border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-4 rounded-2xl shadow-2xl">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                أدوات الذكاء الاصطناعي
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                مجموعة شاملة من أفضل أدوات الذكاء الاصطناعي لعام 2025
              </p>
            </div>
          </div>
          
          {/* Author Info */}
          <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">د</span>
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-bold text-foreground">د. أحمد السنوسي</h2>
                <p className="text-muted-foreground">خبير الذكاء الاصطناعي والتكنولوجيا</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/alsenosy', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                تواصل معي
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Globe className="w-4 h-4 mr-2" />
                الموقع الشخصي
              </Button>
            </div>
          </div>
          
          {/* Description */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed" dir="rtl">
              اكتشف أحدث وأفضل أدوات الذكاء الاصطناعي المتاحة في 2025. من المساعدات الذكية إلى أدوات توليد المحتوى، 
              ومن أدوات التطوير إلى حلول الأعمال - كل ما تحتاجه في مكان واحد مع تصنيف ذكي ووظيفة بحث متقدمة.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float-delayed" />
    </header>
  );
};

export default Header;
