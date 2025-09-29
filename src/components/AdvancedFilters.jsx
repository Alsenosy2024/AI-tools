import { useState } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Users, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const AdvancedFilters = ({ 
  sortBy, 
  setSortBy, 
  viewMode, 
  setViewMode,
  filters,
  setFilters,
  onApplyFilters,
  onResetFilters 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);

  const sortOptions = [
    { value: 'featured', label: 'الأدوات المميزة', icon: Star },
    { value: 'name', label: 'الاسم (أ-ي)', icon: ArrowUpDown },
    { value: 'users', label: 'عدد المستخدمين', icon: Users },
    { value: 'newest', label: 'الأحدث', icon: Calendar }
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...tempFilters, [key]: value };
    setTempFilters(newFilters);
  };

  const applyFilters = () => {
    setFilters(tempFilters);
    onApplyFilters(tempFilters);
    setIsExpanded(false);
  };

  const resetFilters = () => {
    const defaultFilters = {
      showFeatured: false,
      showFree: false,
      minUsers: 0,
      maxUsers: 1000000000,
      hasDescription: false
    };
    setTempFilters(defaultFilters);
    setFilters(defaultFilters);
    onResetFilters();
  };

  const activeFiltersCount = Object.values(tempFilters).filter(value => 
    typeof value === 'boolean' ? value : value !== 0 && value !== 1000000000
  ).length;

  return (
    <div className="space-y-4">
      {/* Main Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-xl">
            <Filter className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">الفلاتر والترتيب</h3>
            <p className="text-sm text-muted-foreground">تخصيص عرض الأدوات</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="ترتيب حسب..." />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    <option.icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Advanced Filters Toggle */}
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            فلاتر متقدمة
            {activeFiltersCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
              >
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {isExpanded && (
        <Card className="bg-background/60 backdrop-blur-sm border-border/50 shadow-xl animate-in slide-in-from-top-2 duration-300">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              الفلاتر المتقدمة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">عام</TabsTrigger>
                <TabsTrigger value="users">المستخدمين</TabsTrigger>
                <TabsTrigger value="features">المميزات</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="featured" className="text-sm font-medium">
                      الأدوات المميزة فقط
                    </Label>
                    <Switch
                      id="featured"
                      checked={tempFilters.showFeatured}
                      onCheckedChange={(checked) => handleFilterChange('showFeatured', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="free" className="text-sm font-medium">
                      الأدوات المجانية فقط
                    </Label>
                    <Switch
                      id="free"
                      checked={tempFilters.showFree}
                      onCheckedChange={(checked) => handleFilterChange('showFree', checked)}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="users" className="space-y-4 mt-4">
                <div className="space-y-4">
                  <Label className="text-sm font-medium">نطاق عدد المستخدمين</Label>
                  <div className="px-3">
                    <Slider
                      value={[tempFilters.minUsers, tempFilters.maxUsers]}
                      onValueChange={([min, max]) => {
                        handleFilterChange('minUsers', min);
                        handleFilterChange('maxUsers', max);
                      }}
                      max={1000000000}
                      min={0}
                      step={1000000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>{tempFilters.minUsers.toLocaleString()}</span>
                      <span>{tempFilters.maxUsers.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="description" className="text-sm font-medium">
                    لديها وصف مفصل
                  </Label>
                  <Switch
                    id="description"
                    checked={tempFilters.hasDescription}
                    onCheckedChange={(checked) => handleFilterChange('hasDescription', checked)}
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
              <Button variant="outline" onClick={resetFilters}>
                إعادة تعيين
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={() => setIsExpanded(false)}>
                  إلغاء
                </Button>
                <Button onClick={applyFilters}>
                  تطبيق الفلاتر
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="mr-2">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdvancedFilters;
