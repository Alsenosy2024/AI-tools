import { useState, useMemo, useEffect } from 'react';
import { Sparkles, TrendingUp, Filter, Grid3X3, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import AdvancedFilters from './components/AdvancedFilters';
import ToolCard from './components/ToolCard';
import { aiTools, categories } from './data/tools';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    showFeatured: false,
    showFree: false,
    minUsers: 0,
    maxUsers: 1000000000,
    hasDescription: false
  });

  // Parse user count for sorting and filtering
  const parseUsers = (users) => {
    if (typeof users !== 'string') return 0;
    if (users.includes('Get instant access')) return 0;
    
    const num = parseFloat(users);
    if (users.includes('B')) return num * 1000000000;
    if (users.includes('M')) return num * 1000000;
    if (users.includes('K')) return num * 1000;
    return num;
  };

  // Advanced search function
  const searchTools = (tools, term) => {
    if (!term) return tools;
    
    const searchLower = term.toLowerCase();
    return tools.filter(tool => {
      const category = categories.find(cat => cat.id === tool.category);
      
      return (
        tool.name.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        category?.name.toLowerCase().includes(searchLower) ||
        category?.description.toLowerCase().includes(searchLower) ||
        // Search in Arabic and English
        tool.name.includes(term) ||
        tool.description.includes(term) ||
        category?.name.includes(term)
      );
    });
  };

  // Apply advanced filters
  const applyAdvancedFilters = (tools, currentFilters) => {
    return tools.filter(tool => {
      // Featured filter
      if (currentFilters.showFeatured && !tool.featured) return false;
      
      // Free filter (tools with "Get instant access" or specific free indicators)
      if (currentFilters.showFree) {
        const isFree = tool.users.includes('Get instant access') || 
                      tool.name.toLowerCase().includes('free') ||
                      tool.description.toLowerCase().includes('مجان');
        if (!isFree) return false;
      }
      
      // User count range filter
      const userCount = parseUsers(tool.users);
      if (userCount < currentFilters.minUsers || userCount > currentFilters.maxUsers) {
        return false;
      }
      
      // Description filter
      if (currentFilters.hasDescription && (!tool.description || tool.description.length < 20)) {
        return false;
      }
      
      return true;
    });
  };

  // Filter and search tools
  const filteredTools = useMemo(() => {
    let filtered = aiTools;

    // Apply category filter
    if (selectedCategory === 'featured') {
      filtered = filtered.filter(tool => tool.featured);
    } else if (selectedCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    // Apply search
    filtered = searchTools(filtered, searchTerm);

    // Apply advanced filters
    filtered = applyAdvancedFilters(filtered, filters);

    // Sort tools
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'users':
          const aUsers = parseUsers(a.users);
          const bUsers = parseUsers(b.users);
          return bUsers - aUsers;
        case 'newest':
          // For demo purposes, sort by ID (assuming higher ID = newer)
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, filters]);

  // Count tools by category
  const toolCounts = useMemo(() => {
    const counts = {};
    categories.forEach(category => {
      counts[category.id] = aiTools.filter(tool => tool.category === category.id).length;
    });
    return counts;
  }, []);

  // Featured tools
  const featuredTools = useMemo(() => {
    return aiTools.filter(tool => tool.featured).slice(0, 6);
  }, []);

  // Popular searches (could be dynamic in real app)
  const popularSearches = [
    'ChatGPT', 'Midjourney', 'تصميم', 'برمجة', 'كتابة', 'فيديو'
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      showFeatured: false,
      showFree: false,
      minUsers: 0,
      maxUsers: 1000000000,
      hasDescription: false
    });
  };

  // Get current section title
  const getSectionTitle = () => {
    if (searchTerm) {
      return `نتائج البحث عن "${searchTerm}" (${filteredTools.length})`;
    }
    if (selectedCategory === 'all') {
      return `جميع الأدوات (${filteredTools.length})`;
    }
    if (selectedCategory === 'featured') {
      return `الأدوات المميزة (${filteredTools.length})`;
    }
    const category = categories.find(cat => cat.id === selectedCategory);
    return `${category?.name} (${filteredTools.length})`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/98 to-background/95">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="mb-12">
          <SearchBar 
            onSearch={handleSearch}
            searchTerm={searchTerm}
            onClear={handleClearSearch}
            popularSearches={popularSearches}
          />
        </div>

        {/* Featured Tools Section - Only show when no search/filter is active */}
        {!searchTerm && selectedCategory === 'all' && Object.values(filters).every(v => !v || v === 0 || v === 1000000000) && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">الأدوات المميزة</h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {featuredTools.length} أداة
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  category={categories.find(cat => cat.id === tool.category)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Main Content */}
        <section>
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Sidebar - Categories and Stats */}
            <aside className="xl:w-80 space-y-6">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                toolCounts={toolCounts}
                featuredCount={featuredTools.length}
              />
              
              {/* Quick Stats Card */}
              <Card className="bg-background/60 backdrop-blur-sm border-border/50 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    إحصائيات سريعة
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">إجمالي الأدوات</span>
                      <Badge variant="secondary">{aiTools.length}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">الأدوات المميزة</span>
                      <Badge variant="secondary">{featuredTools.length}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">التصنيفات</span>
                      <Badge variant="secondary">{categories.length}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">النتائج الحالية</span>
                      <Badge variant="outline">{filteredTools.length}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Advanced Filters */}
              <div className="mb-8">
                <AdvancedFilters
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  filters={filters}
                  setFilters={setFilters}
                  onApplyFilters={handleApplyFilters}
                  onResetFilters={handleResetFilters}
                />
              </div>

              {/* Section Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-xl">
                    <Search className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {getSectionTitle()}
                  </h2>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* View Mode Toggle */}
                  <div className="flex items-center border border-border/50 rounded-lg p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="h-8 w-8 p-0"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="h-8 w-8 p-0"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tools Grid/List */}
              {filteredTools.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      tool={tool}
                      category={categories.find(cat => cat.id === tool.category)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="bg-muted/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <Filter className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    لم يتم العثور على أدوات
                  </h3>
                  <p className="text-muted-foreground mb-6" dir="rtl">
                    جرب تغيير مصطلح البحث أو تعديل الفلاتر المطبقة
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <Button onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      handleResetFilters();
                    }}>
                      إعادة تعيين جميع الفلاتر
                    </Button>
                    <Button variant="outline" onClick={() => setSearchTerm('')}>
                      مسح البحث
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
