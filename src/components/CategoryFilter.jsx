import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Sparkles, TrendingUp } from 'lucide-react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, toolCounts, featuredCount = 0 }) => {
  const totalTools = Object.values(toolCounts).reduce((sum, count) => sum + count, 0);

  return (
    <Card className="bg-background/60 backdrop-blur-sm border-border/50 shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-xl">
            <Filter className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground" dir="rtl">
            التصنيفات والفلاتر
          </h3>
        </div>
        
        <ScrollArea className="w-full max-h-96">
          <div className="space-y-2">
            {/* All Tools Button */}
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => onCategoryChange('all')}
              className={`w-full justify-between rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                selectedCategory === 'all' 
                  ? 'bg-gradient-to-r from-primary to-primary/80 shadow-lg' 
                  : 'hover:bg-muted/50'
              }`}
              size="lg"
            >
              <div className="flex items-center gap-3">
                <div className="text-xl">🌟</div>
                <span className="font-medium">جميع الأدوات</span>
              </div>
              <Badge 
                variant="secondary" 
                className={`${
                  selectedCategory === 'all' 
                    ? 'bg-primary-foreground/20 text-primary-foreground' 
                    : 'bg-primary/10 text-primary'
                }`}
              >
                {totalTools}
              </Badge>
            </Button>

            {/* Featured Tools */}
            {featuredCount > 0 && (
              <Button
                variant={selectedCategory === 'featured' ? 'default' : 'outline'}
                onClick={() => onCategoryChange('featured')}
                className={`w-full justify-between rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                  selectedCategory === 'featured' 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg' 
                    : 'hover:bg-muted/50'
                }`}
                size="lg"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">الأدوات المميزة</span>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${
                    selectedCategory === 'featured' 
                      ? 'bg-primary-foreground/20 text-primary-foreground' 
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                  }`}
                >
                  {featuredCount}
                </Badge>
              </Button>
            )}

            {/* Divider */}
            <div className="border-t border-border/50 my-4" />
            
            {/* Category Buttons */}
            {categories.map((category) => {
              const isSelected = selectedCategory === category.id;
              const count = toolCounts[category.id] || 0;
              
              return (
                <Button
                  key={category.id}
                  variant={isSelected ? 'default' : 'outline'}
                  onClick={() => onCategoryChange(category.id)}
                  className={`w-full justify-between rounded-xl transition-all duration-300 hover:scale-[1.02] group ${
                    isSelected 
                      ? `bg-gradient-to-r ${category.color} shadow-lg` 
                      : 'hover:bg-muted/50'
                  }`}
                  size="lg"
                  disabled={count === 0}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl group-hover:scale-110 transition-transform duration-200">
                      {category.icon}
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{category.name}</div>
                      <div className={`text-xs ${
                        isSelected 
                          ? 'text-primary-foreground/70' 
                          : 'text-muted-foreground'
                      }`}>
                        {category.description}
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      isSelected 
                        ? 'bg-primary-foreground/20 text-primary-foreground' 
                        : count > 0 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </ScrollArea>

        {/* Quick Stats */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>إحصائيات سريعة</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-foreground">{totalTools}</div>
              <div className="text-xs text-muted-foreground">إجمالي الأدوات</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-foreground">{categories.length}</div>
              <div className="text-xs text-muted-foreground">التصنيفات</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryFilter;
