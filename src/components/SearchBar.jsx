import { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SearchBar = ({ onSearch, searchTerm, onClear, popularSearches = [], recentSearches = [] }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Popular and trending searches
  const defaultSuggestions = [
    { term: 'ChatGPT', type: 'popular', count: '2.5B مستخدم' },
    { term: 'Midjourney', type: 'popular', count: '15M+ مستخدم' },
    { term: 'تصميم', type: 'category', count: '3 أدوات' },
    { term: 'برمجة', type: 'category', count: '7 أدوات' },
    { term: 'كتابة', type: 'trending', count: 'رائج' },
    { term: 'فيديو', type: 'trending', count: 'رائج' },
    { term: 'صور', type: 'category', count: '6 أدوات' },
    { term: 'مجاني', type: 'filter', count: 'فلتر' }
  ];

  // Generate smart suggestions based on search term
  useEffect(() => {
    if (localSearchTerm.length > 0) {
      const filtered = defaultSuggestions.filter(suggestion =>
        suggestion.term.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
        suggestion.term.includes(localSearchTerm)
      );
      setSuggestions(filtered.slice(0, 6));
    } else {
      setSuggestions(defaultSuggestions.slice(0, 8));
    }
  }, [localSearchTerm]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value) => {
    setLocalSearchTerm(value);
    onSearch(value);
    if (value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleClear = () => {
    setLocalSearchTerm('');
    setShowSuggestions(false);
    onClear();
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion) => {
    setLocalSearchTerm(suggestion.term);
    onSearch(suggestion.term);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  };

  const getSuggestionIcon = (type) => {
    switch (type) {
      case 'popular':
        return <TrendingUp className="w-4 h-4 text-blue-500" />;
      case 'trending':
        return <Sparkles className="w-4 h-4 text-orange-500" />;
      case 'category':
        return <Search className="w-4 h-4 text-green-500" />;
      default:
        return <Search className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getSuggestionBadgeColor = (type) => {
    switch (type) {
      case 'popular':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'trending':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'category':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 z-10" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="ابحث عن الأدوات... (مثل: ChatGPT، تصميم، برمجة)"
          value={localSearchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          className="pl-12 pr-12 py-6 text-lg rounded-2xl border-2 border-border/50 focus:border-primary/50 bg-background/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-primary/20"
          dir="rtl"
        />
        {localSearchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted/50 rounded-full z-10"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Smart Suggestions Dropdown */}
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200"
        >
          <div className="p-3">
            <div className="flex items-center gap-2 px-3 py-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {localSearchTerm ? 'اقتراحات ذكية' : 'البحث الشائع والرائج'}
              </span>
            </div>
            
            <div className="space-y-1">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm hover:bg-muted/50 rounded-lg transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    {getSuggestionIcon(suggestion.type)}
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {suggestion.term}
                    </span>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getSuggestionBadgeColor(suggestion.type)}`}
                  >
                    {suggestion.count}
                  </Badge>
                </button>
              ))}
            </div>
            
            {localSearchTerm && (
              <div className="border-t border-border/50 mt-3 pt-3">
                <div className="text-xs text-muted-foreground px-3">
                  اضغط Enter للبحث أو Escape للإغلاق
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
