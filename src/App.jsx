import React, { useState, useMemo } from 'react';
import { Search, Users, Star, ExternalLink, Filter } from 'lucide-react';
import { aiTools, categories } from './data/tools';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    showFeatured: false,
    showFree: false,
    minUsers: 0,
    maxUsers: 1000000000
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
        tool.company.toLowerCase().includes(searchLower) ||
        (category && category.name.toLowerCase().includes(searchLower))
      );
    });
  };

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let filtered = aiTools;

    // Apply search
    filtered = searchTools(filtered, searchTerm);

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    // Apply advanced filters
    if (filters.showFeatured) {
      filtered = filtered.filter(tool => tool.featured);
    }

    if (filters.showFree) {
      filtered = filtered.filter(tool => tool.pricing === 'مجاني' || tool.pricing === 'Free');
    }

    // Apply user count filter
    filtered = filtered.filter(tool => {
      const userCount = parseUsers(tool.users);
      return userCount >= filters.minUsers && userCount <= filters.maxUsers;
    });

    // Sort tools
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return parseUsers(b.users) - parseUsers(a.users);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'users':
          return parseUsers(b.users) - parseUsers(a.users);
        case 'company':
          return a.company.localeCompare(b.company);
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, filters]);

  // Get category stats
  const categoryStats = useMemo(() => {
    const stats = categories.map(category => ({
      ...category,
      count: aiTools.filter(tool => tool.category === category.id).length
    }));
    
    const totalTools = aiTools.length;
    const featuredTools = aiTools.filter(tool => tool.featured).length;
    
    return {
      categories: stats,
      total: totalTools,
      featured: featuredTools
    };
  }, []);

  const handleResetFilters = () => {
    setFilters({
      showFeatured: false,
      showFree: false,
      minUsers: 0,
      maxUsers: 1000000000
    });
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="header-title">أدوات الذكاء الاصطناعي</h1>
            <p className="header-subtitle">مجموعة شاملة من أفضل أدوات الذكاء الاصطناعي لعام 2025</p>
            
            {/* Developer Profile */}
            <div className="developer-profile">
              <div className="profile-content">
                <div className="profile-avatar">د</div>
                <div className="profile-info">
                  <h3 className="profile-name">د. أحمد السنوسي</h3>
                  <p className="profile-title">خبير الذكاء الاصطناعي والتكنولوجيا</p>
                  <div className="profile-links">
                    <a href="https://www.linkedin.com/in/alsenosy" className="profile-link primary" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    <a href="mailto:contact@alsenosy.com" className="profile-link secondary">
                      تواصل معي
                    </a>
                    <a href="https://alsenosy.com" className="profile-link outline" target="_blank" rel="noopener noreferrer">
                      الموقع الشخصي
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="ابحث عن الأدوات... (مثل: ChatGPT، Midjourney، Claude)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="category-filters">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
            >
              🌟 جميع الأدوات
              <span className="category-count">{categoryStats.total}</span>
            </button>
            <button
              onClick={() => setSelectedCategory('featured')}
              className={`category-button ${selectedCategory === 'featured' ? 'active' : ''}`}
            >
              الأدوات المميزة
              <span className="category-count">{categoryStats.featured}</span>
            </button>
            {categoryStats.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.icon} {category.name}
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{categoryStats.total}</div>
              <div className="stat-label">إجمالي الأدوات</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{categoryStats.featured}</div>
              <div className="stat-label">الأدوات المميزة</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{categoryStats.categories.length}</div>
              <div className="stat-label">التصنيفات</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{filteredTools.length}</div>
              <div className="stat-label">النتائج الحالية</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <main className="tools-section">
        <div className="container">
          {selectedCategory === 'all' && !searchTerm && (
            <>
              <h2 className="section-title">الأدوات المميزة</h2>
              <p className="section-subtitle">{categoryStats.featured} أداة</p>
              <div className="tools-grid">
                {aiTools.filter(tool => tool.featured).slice(0, 6).map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </>
          )}

          <h2 className="section-title">
            {selectedCategory === 'all' ? 'جميع الأدوات' : 
             selectedCategory === 'featured' ? 'الأدوات المميزة' :
             categories.find(cat => cat.id === selectedCategory)?.name || 'الأدوات'}
          </h2>
          <p className="section-subtitle">({filteredTools.length})</p>

          {filteredTools.length > 0 ? (
            <div className="tools-grid">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">
                <Filter size={48} />
              </div>
              <h3>لم يتم العثور على أدوات</h3>
              <p>جرب تغيير مصطلح البحث أو تعديل الفلاتر المطبقة</p>
              <div className="no-results-actions">
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    handleResetFilters();
                  }}
                  className="reset-button"
                >
                  إعادة تعيين جميع الفلاتر
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              اكتشف أحدث وأفضل أدوات الذكاء الاصطناعي المتاحة في 2025. من المساعدات الذكية إلى أدوات توليد المحتوى، ومن أدوات التطوير إلى حلول الأعمال - كل ما تحتاجه في مكان واحد مع تصنيف ذكي ووظيفة بحث متقدمة.
            </p>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/alsenosy" className="footer-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:contact@alsenosy.com" className="footer-link">
                تواصل معنا
              </a>
              <a href="https://alsenosy.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                الموقع الشخصي
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Tool Card Component
function ToolCard({ tool }) {
  const category = categories.find(cat => cat.id === tool.category);
  
  return (
    <div className={`tool-card ${tool.featured ? 'featured' : ''}`}>
      <div className="tool-header">
        <h3 className="tool-name">{tool.name}</h3>
        {tool.featured && (
          <div className="featured-badge">
            <Star size={12} />
            مميز
          </div>
        )}
      </div>
      
      <p className="tool-description">{tool.description}</p>
      
      <div className="tool-meta">
        <div className="meta-item">
          <Users className="meta-icon" size={16} />
          {tool.users}
        </div>
      </div>
      
      <div className="tool-category">
        {category?.name || 'غير محدد'}
      </div>
      
      <div className="tool-actions">
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="visit-button"
        >
          <ExternalLink size={16} />
          زيارة الأداة
        </a>
      </div>
    </div>
  );
}

export default App;
