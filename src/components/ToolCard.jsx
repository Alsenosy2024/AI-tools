import { ExternalLink, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ToolCard = ({ tool, category }) => {
  const handleClick = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer">
      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <CardContent className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {tool.name}
              </h3>
              {tool.featured && (
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  مميز
                </Badge>
              )}
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4" dir="rtl">
              {tool.description}
            </p>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{tool.users}</span>
              </div>
              
              {category && (
                <Badge variant="outline" className="text-xs">
                  {category.name}
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleClick}
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          variant="outline"
        >
          <span>زيارة الأداة</span>
          <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardContent>
      
      {/* Glassmorphism effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
           style={{
             background: `linear-gradient(45deg, transparent 30%, ${tool.color.split(' ')[1]?.replace('to-', '') || 'rgb(59 130 246)'}/20 50%, transparent 70%)`
           }} />
    </Card>
  );
};

export default ToolCard;
