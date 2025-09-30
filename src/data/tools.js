// قاعدة بيانات شاملة لأدوات الذكاء الاصطناعي - أكثر من 130 أداة
// تم جمعها وتصنيفها بناءً على البحث الموسع والترتيب العالمي

export const categories = [
  {
    id: "ai-assistants",
    name: "المساعدات الذكية",
    description: "روبوتات المحادثة والمساعدين الافتراضيين",
    icon: "🤖",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "content-generation",
    name: "توليد المحتوى",
    description: "إنشاء النصوص والصور والفيديوهات والموسيقى",
    icon: "🎨",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "coding-development",
    name: "البرمجة والتطوير",
    description: "أدوات المطورين والمبرمجين",
    icon: "💻",
    color: "from-green-500 to-green-600"
  },
  {
    id: "productivity",
    name: "الإنتاجية",
    description: "تحسين الكفاءة والتنظيم",
    icon: "⚡",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "design-creative",
    name: "التصميم والإبداع",
    description: "أدوات التصميم الجرافيكي والإبداعي",
    icon: "🎭",
    color: "from-pink-500 to-pink-600"
  },
  {
    id: "business-marketing",
    name: "الأعمال والتسويق",
    description: "أدوات إدارة الأعمال والتسويق",
    icon: "📈",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: "education-research",
    name: "التعليم والبحث",
    description: "منصات التعلم والبحث العلمي",
    icon: "📚",
    color: "from-teal-500 to-teal-600"
  },
  {
    id: "health-wellness",
    name: "الصحة والعافية",
    description: "أدوات الصحة النفسية والعافية",
    icon: "🧠",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: "translation-language",
    name: "الترجمة واللغات",
    description: "أدوات الترجمة ومعالجة اللغات",
    icon: "🌐",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: "automation",
    name: "الأتمتة",
    description: "أتمتة المهام وسير العمل",
    icon: "🔧",
    color: "from-yellow-500 to-yellow-600"
  }
];

export const aiTools = [
  // المساعدات الذكية والمحادثة - الأدوات الرائدة عالمياً
  {
    id: 1,
    name: "ChatGPT",
    description: "مساعد ذكي توليدي للمحادثة والكتابة والإنتاجية، الأكثر شعبية عالمياً",
    url: "https://chat.openai.com",
    users: "700-800M أسبوعياً",
    category: "ai-assistants",
    featured: true,
    color: "from-green-500 to-blue-500",
    company: "OpenAI",
    pricing: "Freemium",
    rating: "4.8/5"
  },
  {
    id: 2,
    name: "Gemini",
    description: "مساعد Google متعدد الوسائط (نص، صور، صوت، فيديو) مع قدرات متقدمة",
    url: "https://gemini.google.com",
    users: "400M+ شهرياً",
    category: "ai-assistants",
    featured: true,
    color: "from-blue-500 to-purple-500",
    company: "Google",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 3,
    name: "Claude",
    description: "مساعد ذكي متخصص في الأمان والدقة مع قدرات تحليل متقدمة",
    url: "https://claude.ai",
    users: "18.9M شهرياً",
    category: "ai-assistants",
    featured: true,
    color: "from-purple-500 to-pink-500",
    company: "Anthropic",
    pricing: "Freemium",
    rating: "4.7/5"
  },
  {
    id: 4,
    name: "Microsoft Copilot",
    description: "مساعد مدمج في منتجات Microsoft 365 لتعزيز الإنتاجية",
    url: "https://copilot.microsoft.com",
    users: "20-36M",
    category: "ai-assistants",
    featured: true,
    color: "from-blue-600 to-blue-700",
    company: "Microsoft",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 5,
    name: "Perplexity AI",
    description: "محرك بحث ذكي يقدم إجابات مع مصادر مباشرة ومراجع",
    url: "https://perplexity.ai",
    users: "22M",
    category: "ai-assistants",
    featured: true,
    color: "from-cyan-500 to-blue-500",
    company: "Perplexity",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 6,
    name: "Character.ai",
    description: "منصة محادثة مع شخصيات AI قابلة للتخصيص والتفاعل",
    url: "https://character.ai",
    users: "20M+ شهرياً",
    category: "ai-assistants",
    featured: false,
    color: "from-pink-500 to-red-500",
    company: "Character.AI",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 7,
    name: "Poe",
    description: "منصة تجمع عدة نماذج AI في واجهة واحدة من Quora",
    url: "https://poe.com",
    users: "1.22M شهرياً",
    category: "ai-assistants",
    featured: false,
    color: "from-gray-500 to-gray-600",
    company: "Quora",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 8,
    name: "You.com",
    description: "محرك بحث ومساعد AI للمؤسسات مع قدرات بحث متقدمة",
    url: "https://you.com",
    users: "2.57M شهرياً",
    category: "ai-assistants",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "You.com",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 9,
    name: "Manus",
    description: "وكيل AI عام للمهام المعقدة مع قدرات تنفيذ مستقلة",
    url: "https://manus.chat",
    users: "16.9M",
    category: "ai-assistants",
    featured: true,
    color: "from-red-500 to-red-600",
    company: "Monica",
    pricing: "تجريبي",
    rating: "4.9/5"
  },
  {
    id: 10,
    name: "DeepSeek",
    description: "نموذج AI صيني متقدم مع نمو سريع (+88.6%)",
    url: "https://deepseek.com",
    users: "نمو 88.6%",
    category: "ai-assistants",
    featured: true,
    color: "from-purple-600 to-red-500",
    company: "DeepSeek",
    pricing: "مجاني",
    rating: "4.5/5"
  },

  // توليد الصور والفنون
  {
    id: 11,
    name: "Canva",
    description: "منصة تصميم شاملة مع أدوات AI متقدمة للتصميم والإبداع",
    url: "https://canva.com",
    users: "278.2M زيارة شهرية",
    category: "design-creative",
    featured: true,
    color: "from-blue-400 to-purple-500",
    company: "Canva",
    pricing: "Freemium",
    rating: "4.7/5"
  },
  {
    id: 12,
    name: "Midjourney",
    description: "أداة توليد صور فنية عالية الجودة مع أنماط إبداعية متنوعة",
    url: "https://midjourney.com",
    users: "19.26M مسجل",
    category: "content-generation",
    featured: true,
    color: "from-purple-500 to-pink-500",
    company: "Midjourney",
    pricing: "مدفوع",
    rating: "4.8/5"
  },
  {
    id: 13,
    name: "DALL-E 3",
    description: "مولد صور OpenAI المتقدم لتحويل النصوص إلى صور واقعية",
    url: "https://openai.com/dall-e-3",
    users: "1.5M+ نشط",
    category: "content-generation",
    featured: true,
    color: "from-pink-500 to-purple-500",
    company: "OpenAI",
    pricing: "مدفوع",
    rating: "4.6/5"
  },
  {
    id: 14,
    name: "Stable Diffusion",
    description: "نموذج مفتوح المصدر لتوليد الصور مع إمكانيات تخصيص واسعة",
    url: "https://stability.ai",
    users: "330M تنزيل",
    category: "content-generation",
    featured: true,
    color: "from-green-500 to-blue-500",
    company: "Stability AI",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 15,
    name: "Remove.bg",
    description: "أداة متخصصة في إزالة خلفيات الصور بدقة عالية",
    url: "https://remove.bg",
    users: "42.4M زيارة شهرية",
    category: "design-creative",
    featured: false,
    color: "from-red-500 to-orange-500",
    company: "Remove.bg",
    pricing: "Freemium",
    rating: "4.4/5"
  },

  // توليد الفيديو
  {
    id: 16,
    name: "Synthesia",
    description: "منصة رائدة لإنشاء فيديوهات احترافية بـ AI avatars",
    url: "https://synthesia.io",
    users: "60K+ أعمال",
    category: "content-generation",
    featured: true,
    color: "from-blue-500 to-purple-500",
    company: "Synthesia",
    pricing: "Freemium",
    rating: "4.7/5"
  },
  {
    id: 17,
    name: "Runway",
    description: "منصة متقدمة لتوليد وتحرير الفيديو بالذكاء الاصطناعي",
    url: "https://runwayml.com",
    users: "غير محدد",
    category: "content-generation",
    featured: true,
    color: "from-green-500 to-blue-500",
    company: "Runway AI",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 18,
    name: "Luma AI",
    description: "توليد فيديو ثلاثي الأبعاد متقدم مع تقنيات Ray3",
    url: "https://lumalabs.ai",
    users: "25M+",
    category: "content-generation",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    company: "Luma AI",
    pricing: "Freemium",
    rating: "4.5/5"
  },

  // توليد الموسيقى والصوت
  {
    id: 19,
    name: "ElevenLabs",
    description: "أداة رائدة لتوليد الأصوات الواقعية واستنساخ الأصوات",
    url: "https://elevenlabs.io",
    users: "1M+ مسجل",
    category: "content-generation",
    featured: true,
    color: "from-orange-500 to-red-500",
    company: "ElevenLabs",
    pricing: "Freemium",
    rating: "4.8/5"
  },
  {
    id: 20,
    name: "Suno",
    description: "توليد أغاني كاملة مع كلمات وموسيقى من النصوص",
    url: "https://suno.ai",
    users: "25M أنشأوا أغنية",
    category: "content-generation",
    featured: true,
    color: "from-purple-500 to-pink-500",
    company: "Suno Inc.",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 21,
    name: "Udio",
    description: "منصة توليد موسيقى احترافية مع إمكانيات تحرير متقدمة",
    url: "https://udio.com",
    users: "600K+",
    category: "content-generation",
    featured: false,
    color: "from-indigo-500 to-purple-500",
    company: "Udio",
    pricing: "Freemium",
    rating: "4.5/5"
  },

  // البرمجة والتطوير
  {
    id: 22,
    name: "GitHub Copilot",
    description: "مساعد برمجة ذكي يقدم اقتراحات كود في الوقت الفعلي",
    url: "https://github.com/features/copilot",
    users: "20M+",
    category: "coding-development",
    featured: true,
    color: "from-gray-700 to-gray-800",
    company: "GitHub/OpenAI",
    pricing: "Freemium",
    rating: "4.7/5"
  },
  {
    id: 23,
    name: "Cursor",
    description: "محرر أكواد متقدم مدعوم بالذكاء الاصطناعي",
    url: "https://cursor.sh",
    users: "1M+",
    category: "coding-development",
    featured: true,
    color: "from-blue-500 to-purple-500",
    company: "Cursor",
    pricing: "Freemium",
    rating: "4.8/5"
  },
  {
    id: 24,
    name: "Replit",
    description: "بيئة تطوير تعاونية مع مساعد AI للبرمجة",
    url: "https://replit.com",
    users: "20M+",
    category: "coding-development",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "Replit",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 25,
    name: "Google AI Studio",
    description: "منصة تطوير نماذج AI من Google مع نمو سريع",
    url: "https://aistudio.google.com",
    users: "1.6M زيارة (+80%)",
    category: "coding-development",
    featured: true,
    color: "from-blue-500 to-blue-600",
    company: "Google",
    pricing: "مجاني",
    rating: "4.4/5"
  },

  // الكتابة والمحتوى
  {
    id: 26,
    name: "QuillBot",
    description: "أداة متقدمة لإعادة الصياغة والتحرير والكتابة",
    url: "https://quillbot.com",
    users: "90.2M زيارة شهرية",
    category: "content-generation",
    featured: true,
    color: "from-green-500 to-blue-500",
    company: "QuillBot",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 27,
    name: "Grammarly",
    description: "مساعد كتابة ذكي للتصحيح النحوي واللغوي",
    url: "https://grammarly.com",
    users: "40M زيارة شهرية",
    category: "productivity",
    featured: true,
    color: "from-green-500 to-green-600",
    company: "Grammarly",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 28,
    name: "Jasper",
    description: "منصة كتابة تسويقية متقدمة للمحتوى الاحترافي",
    url: "https://jasper.ai",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-purple-500 to-purple-600",
    company: "Jasper",
    pricing: "مدفوع",
    rating: "4.4/5"
  },

  // الترجمة واللغات
  {
    id: 29,
    name: "DeepL",
    description: "أداة ترجمة عالية الجودة مع دقة متقدمة",
    url: "https://deepl.com",
    users: "137.1M زيارة شهرية",
    category: "translation-language",
    featured: true,
    color: "from-blue-500 to-cyan-500",
    company: "DeepL",
    pricing: "Freemium",
    rating: "4.7/5"
  },
  {
    id: 30,
    name: "Google Translate",
    description: "خدمة ترجمة شاملة تدعم أكثر من 100 لغة",
    url: "https://translate.google.com",
    users: "مليارات",
    category: "translation-language",
    featured: false,
    color: "from-blue-400 to-blue-500",
    company: "Google",
    pricing: "مجاني",
    rating: "4.3/5"
  },

  // الإنتاجية والأتمتة
  {
    id: 31,
    name: "Zapier",
    description: "منصة أتمتة سير العمل بين التطبيقات المختلفة",
    url: "https://zapier.com",
    users: "3.8M زيارة شهرية",
    category: "automation",
    featured: true,
    color: "from-orange-500 to-red-500",
    company: "Zapier",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 32,
    name: "ClickUp",
    description: "منصة إدارة مشاريع مع مساعد AI متكامل",
    url: "https://clickup.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-purple-500 to-pink-500",
    company: "ClickUp",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 33,
    name: "Notion AI",
    description: "مساحة عمل ذكية مع قدرات AI للكتابة والتنظيم",
    url: "https://notion.so",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-gray-600 to-gray-700",
    company: "Notion",
    pricing: "مدفوع",
    rating: "4.6/5"
  },

  // الصحة النفسية والعافية
  {
    id: 34,
    name: "Replika",
    description: "رفيق AI للدعم النفسي والمحادثة العاطفية",
    url: "https://replika.ai",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-pink-500 to-red-500",
    company: "Luka Inc.",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 35,
    name: "Calm",
    description: "تطبيق تأمل واسترخاء مع مساعد AI",
    url: "https://calm.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-blue-400 to-blue-500",
    company: "Calm",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 36,
    name: "Headspace",
    description: "منصة تأمل وصحة نفسية مع تقنيات AI",
    url: "https://headspace.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-orange-400 to-orange-500",
    company: "Headspace",
    pricing: "Freemium",
    rating: "4.4/5"
  },

  // التعليم والبحث
  {
    id: 37,
    name: "NotebookLM",
    description: "مساعد بحث ذكي من Google للتحليل والتلخيص",
    url: "https://notebooklm.google.com",
    users: "نمو 57%",
    category: "education-research",
    featured: true,
    color: "from-blue-500 to-green-500",
    company: "Google",
    pricing: "مجاني",
    rating: "4.6/5"
  },
  {
    id: 38,
    name: "Consensus",
    description: "محرك بحث للأوراق العلمية مع تحليل AI",
    url: "https://consensus.app",
    users: "غير محدد",
    category: "education-research",
    featured: false,
    color: "from-purple-500 to-blue-500",
    company: "Consensus",
    pricing: "Freemium",
    rating: "4.3/5"
  },

  // أدوات متخصصة إضافية
  {
    id: 39,
    name: "Leonardo AI",
    description: "منصة توليد صور متقدمة للألعاب والفنون",
    url: "https://leonardo.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-600 to-pink-600",
    company: "Leonardo.AI",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 40,
    name: "Artbreeder",
    description: "منصة مزج وتطوير الصور بالذكاء الاصطناعي",
    url: "https://artbreeder.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-green-500 to-teal-500",
    company: "Artbreeder",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 41,
    name: "Mubert",
    description: "توليد موسيقى خلفية AI للمحتوى والتطبيقات",
    url: "https://mubert.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-500 to-indigo-500",
    company: "Mubert",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 42,
    name: "Tabnine",
    description: "مساعد إكمال أكواد ذكي للمطورين",
    url: "https://tabnine.com",
    users: "غير محدد",
    category: "coding-development",
    featured: false,
    color: "from-blue-600 to-purple-600",
    company: "Tabnine",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 43,
    name: "Copy.ai",
    description: "مولد نسخ إعلانية ومحتوى تسويقي",
    url: "https://copy.ai",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-green-500 to-blue-500",
    company: "Copy.ai",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 44,
    name: "Make",
    description: "منصة أتمتة بصرية لربط التطبيقات",
    url: "https://make.com",
    users: "غير محدد",
    category: "automation",
    featured: false,
    color: "from-purple-500 to-blue-500",
    company: "Make",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 45,
    name: "n8n",
    description: "منصة أتمتة مفتوحة المصدر للمطورين",
    url: "https://n8n.io",
    users: "غير محدد",
    category: "automation",
    featured: false,
    color: "from-red-500 to-pink-500",
    company: "n8n",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 46,
    name: "Figma",
    description: "أداة تصميم تعاونية مع ميزات AI متقدمة",
    url: "https://figma.com",
    users: "غير محدد",
    category: "design-creative",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "Figma",
    pricing: "Freemium",
    rating: "4.7/5"
  },
  {
    id: 47,
    name: "Adobe Firefly",
    description: "مجموعة أدوات AI من Adobe للتصميم والإبداع",
    url: "https://firefly.adobe.com",
    users: "غير محدد",
    category: "design-creative",
    featured: false,
    color: "from-red-500 to-orange-500",
    company: "Adobe",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 48,
    name: "Loom",
    description: "تسجيل وتحرير الفيديوهات مع ميزات AI",
    url: "https://loom.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-500 to-pink-500",
    company: "Loom",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 49,
    name: "Otter.ai",
    description: "تحويل الكلام إلى نص مع تلخيص ذكي",
    url: "https://otter.ai",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-blue-500 to-blue-600",
    company: "Otter.ai",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 50,
    name: "Descript",
    description: "تحرير صوت وفيديو متقدم بالذكاء الاصطناعي",
    url: "https://descript.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-green-500 to-teal-500",
    company: "Descript",
    pricing: "Freemium",
    rating: "4.6/5"
  },

  // أدوات ناشئة ومتقدمة (51-100)
  {
    id: 51,
    name: "Reka",
    description: "منصة AI متعددة الوسائط مع نماذج متقدمة للفهم والتحليل",
    url: "https://reka.ai",
    users: "967K",
    category: "ai-assistants",
    featured: false,
    color: "from-indigo-500 to-purple-500",
    company: "Reka AI",
    pricing: "مدفوع",
    rating: "4.6/5"
  },
  {
    id: 52,
    name: "MISTRAL",
    description: "نماذج لغوية فرنسية عالية الأداء والكفاءة",
    url: "https://mistral.ai",
    users: "غير محدد",
    category: "ai-assistants",
    featured: false,
    color: "from-blue-600 to-indigo-600",
    company: "Mistral AI",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 53,
    name: "DEVV",
    description: "مساعد AI متخصص في البرمجة والتطوير",
    url: "https://devv.ai",
    users: "555 متابع",
    category: "coding-development",
    featured: false,
    color: "from-green-600 to-blue-600",
    company: "Devv.AI",
    pricing: "Freemium",
    rating: "5.0/5"
  },
  {
    id: 54,
    name: "Deep AI",
    description: "منصة AI إبداعية شاملة للصور والفيديو والموسيقى",
    url: "https://deepai.org",
    users: "20.82M زيارة شهرية",
    category: "content-generation",
    featured: false,
    color: "from-purple-600 to-pink-600",
    company: "Deep AI Inc.",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 55,
    name: "Cohere",
    description: "منصة معالجة اللغات الطبيعية للمؤسسات",
    url: "https://cohere.ai",
    users: "440K",
    category: "coding-development",
    featured: false,
    color: "from-yellow-600 to-orange-600",
    company: "Cohere",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 56,
    name: "Hugging Face",
    description: "منصة نماذج AI مفتوحة المصدر والتعاون",
    url: "https://huggingface.co",
    users: "غير محدد",
    category: "coding-development",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    company: "Hugging Face",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 57,
    name: "Replicate",
    description: "منصة تشغيل نماذج AI في السحابة",
    url: "https://replicate.com",
    users: "غير محدد",
    category: "coding-development",
    featured: false,
    color: "from-green-500 to-blue-500",
    company: "Replicate",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 58,
    name: "Pika Labs",
    description: "توليد فيديوهات قصيرة بالذكاء الاصطناعي",
    url: "https://pika.art",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-pink-500 to-red-500",
    company: "Pika Labs",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 59,
    name: "NightCafe",
    description: "مجتمع فنانين AI لتوليد الصور الفنية",
    url: "https://nightcafe.studio",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-600 to-indigo-600",
    company: "NightCafe",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 60,
    name: "Fliki",
    description: "تحويل النص إلى فيديو مع أصوات AI",
    url: "https://fliki.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-blue-500 to-purple-500",
    company: "Fliki",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 61,
    name: "Pictory",
    description: "إنشاء فيديوهات من المقالات والنصوص",
    url: "https://pictory.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-green-500 to-blue-500",
    company: "Pictory",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 62,
    name: "AIVA",
    description: "تأليف موسيقى كلاسيكية بالذكاء الاصطناعي",
    url: "https://aiva.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-500 to-pink-500",
    company: "AIVA",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 63,
    name: "Boomy",
    description: "إنشاء أغاني سريع للمبتدئين",
    url: "https://boomy.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "Boomy",
    pricing: "Freemium",
    rating: "4.0/5"
  },
  {
    id: 64,
    name: "Codeium",
    description: "مساعد برمجة مجاني مع إكمال أكواد ذكي",
    url: "https://codeium.com",
    users: "غير محدد",
    category: "coding-development",
    featured: false,
    color: "from-blue-600 to-purple-600",
    company: "Codeium",
    pricing: "مجاني",
    rating: "4.5/5"
  },
  {
    id: 65,
    name: "Writesonic",
    description: "منصة كتابة AI متعددة الأغراض",
    url: "https://writesonic.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-green-500 to-teal-500",
    company: "Writesonic",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 66,
    name: "AdCreative.ai",
    description: "إنشاء إعلانات تسويقية بالذكاء الاصطناعي",
    url: "https://adcreative.ai",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-red-500 to-pink-500",
    company: "AdCreative.ai",
    pricing: "مدفوع",
    rating: "4.4/5"
  },
  {
    id: 67,
    name: "Wysa",
    description: "مساعد صحة نفسية AI للدعم العاطفي",
    url: "https://wysa.io",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-teal-500 to-blue-500",
    company: "Wysa",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 68,
    name: "Youper",
    description: "تتبع المزاج والعلاج النفسي بالذكاء الاصطناعي",
    url: "https://youper.ai",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    company: "Youper",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 69,
    name: "Insight Timer",
    description: "تأمل وتطوير شخصي مع مساعد AI",
    url: "https://insighttimer.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-purple-500 to-indigo-500",
    company: "Insight Timer",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 70,
    name: "Riverside",
    description: "تسجيل بودكاست وفيديو عالي الجودة مع AI",
    url: "https://riverside.fm",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-blue-500 to-green-500",
    company: "Riverside",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 71,
    name: "Kapwing",
    description: "محرر فيديو تعاوني مع أدوات AI",
    url: "https://kapwing.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-pink-500 to-purple-500",
    company: "Kapwing",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 72,
    name: "Clipchamp",
    description: "محرر فيديو من Microsoft مع ميزات AI",
    url: "https://clipchamp.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-blue-600 to-blue-700",
    company: "Microsoft",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 73,
    name: "Soundraw",
    description: "توليد موسيقى قابلة للتخصيص للمحتوى",
    url: "https://soundraw.io",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-500 to-pink-500",
    company: "Soundraw",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 74,
    name: "Beatoven",
    description: "موسيقى خلفية AI للفيديوهات والمحتوى",
    url: "https://beatoven.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "Beatoven",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 75,
    name: "Endel",
    description: "موسيقى تكيفية للتركيز والاسترخاء",
    url: "https://endel.io",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-blue-400 to-teal-500",
    company: "Endel",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 76,
    name: "Brain.fm",
    description: "موسيقى علمية لتحسين التركيز والإنتاجية",
    url: "https://brain.fm",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-purple-500 to-blue-500",
    company: "Brain.fm",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 77,
    name: "Lexica",
    description: "محرك بحث للصور المولدة بالذكاء الاصطناعي",
    url: "https://lexica.art",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-pink-500 to-red-500",
    company: "Lexica",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 78,
    name: "Playground AI",
    description: "توليد صور تفاعلي مع واجهة سهلة",
    url: "https://playgroundai.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-green-500 to-blue-500",
    company: "Playground AI",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 79,
    name: "DreamStudio",
    description: "واجهة Stable Diffusion الرسمية لتوليد الصور",
    url: "https://dreamstudio.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-600 to-pink-600",
    company: "Stability AI",
    pricing: "مدفوع",
    rating: "4.4/5"
  },
  {
    id: 80,
    name: "Craiyon",
    description: "مولد صور مجاني وسهل الاستخدام",
    url: "https://craiyon.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    company: "Craiyon",
    pricing: "Freemium",
    rating: "4.0/5"
  },
  {
    id: 81,
    name: "InVideo",
    description: "منصة إنشاء فيديو شاملة للتسويق",
    url: "https://invideo.io",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-red-500 to-pink-500",
    company: "InVideo",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 82,
    name: "Lumen5",
    description: "تحويل المحتوى إلى فيديوهات تسويقية",
    url: "https://lumen5.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-blue-500 to-purple-500",
    company: "Lumen5",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 83,
    name: "Animoto",
    description: "إنشاء فيديوهات تسويقية احترافية",
    url: "https://animoto.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-green-500 to-teal-500",
    company: "Animoto",
    pricing: "Freemium",
    rating: "4.1/5"
  },
  {
    id: 84,
    name: "Podcastle",
    description: "استوديو بودكاست AI للتسجيل والتحرير",
    url: "https://podcastle.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-500 to-indigo-500",
    company: "Podcastle",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 85,
    name: "Amper Music",
    description: "تأليف موسيقى AI للمحتوى التجاري",
    url: "https://ampermusic.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "Amper",
    pricing: "مدفوع",
    rating: "4.2/5"
  },
  {
    id: 86,
    name: "Airtable",
    description: "قاعدة بيانات تعاونية مع ميزات AI",
    url: "https://airtable.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    company: "Airtable",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 87,
    name: "Monday.com",
    description: "منصة إدارة عمل مع أتمتة AI",
    url: "https://monday.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-blue-500 to-purple-500",
    company: "Monday.com",
    pricing: "مدفوع",
    rating: "4.4/5"
  },
  {
    id: 88,
    name: "Asana",
    description: "إدارة مشاريع مع مساعد AI للتخطيط",
    url: "https://asana.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-pink-500 to-red-500",
    company: "Asana",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 89,
    name: "Trello",
    description: "إدارة مهام بصرية مع أتمتة ذكية",
    url: "https://trello.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-blue-500 to-blue-600",
    company: "Atlassian",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 90,
    name: "Slack",
    description: "منصة تواصل فريق مع مساعد AI",
    url: "https://slack.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-purple-500 to-pink-500",
    company: "Slack",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 91,
    name: "Discord",
    description: "منصة تواصل مع بوتات AI متقدمة",
    url: "https://discord.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-indigo-500 to-purple-500",
    company: "Discord",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 92,
    name: "Zoom",
    description: "مؤتمرات فيديو مع ميزات AI للتلخيص",
    url: "https://zoom.us",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-blue-500 to-cyan-500",
    company: "Zoom",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 93,
    name: "Microsoft Teams",
    description: "تعاون فريق مع Copilot AI مدمج",
    url: "https://teams.microsoft.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-blue-600 to-blue-700",
    company: "Microsoft",
    pricing: "Freemium",
    rating: "4.1/5"
  },
  {
    id: 94,
    name: "Google Meet",
    description: "مؤتمرات فيديو مع ترجمة AI فورية",
    url: "https://meet.google.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-green-500 to-blue-500",
    company: "Google",
    pricing: "مجاني",
    rating: "4.0/5"
  },
  {
    id: 95,
    name: "Calendly",
    description: "جدولة ذكية للاجتماعات مع مساعد AI",
    url: "https://calendly.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "Calendly",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 96,
    name: "Doodle",
    description: "جدولة اجتماعات ذكية مع AI",
    url: "https://doodle.com",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    company: "Doodle",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 97,
    name: "Typeform",
    description: "إنشاء استطلاعات تفاعلية مع AI",
    url: "https://typeform.com",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-pink-500 to-purple-500",
    company: "Typeform",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 98,
    name: "SurveyMonkey",
    description: "منصة استطلاعات مع تحليل AI",
    url: "https://surveymonkey.com",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    company: "SurveyMonkey",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 99,
    name: "Rev",
    description: "خدمات نسخ وترجمة احترافية مع AI",
    url: "https://rev.com",
    users: "غير محدد",
    category: "translation-language",
    featured: false,
    color: "from-blue-500 to-purple-500",
    company: "Rev",
    pricing: "مدفوع",
    rating: "4.5/5"
  },
  {
    id: 100,
    name: "Krisp",
    description: "إلغاء ضوضاء الخلفية بالذكاء الاصطناعي",
    url: "https://krisp.ai",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-green-500 to-teal-500",
    company: "Krisp",
    pricing: "Freemium",
    rating: "4.6/5"
  },

  // أدوات إضافية (101-130)
  {
    id: 101,
    name: "Murf",
    description: "تحويل النص إلى كلام بأصوات طبيعية",
    url: "https://murf.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-500 to-pink-500",
    company: "Murf",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 102,
    name: "Waking Up",
    description: "تأمل وفلسفة مع مساعد AI للتطوير الشخصي",
    url: "https://wakingup.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-orange-400 to-yellow-500",
    company: "Waking Up",
    pricing: "مدفوع",
    rating: "4.7/5"
  },
  {
    id: 103,
    name: "Ten Percent Happier",
    description: "تأمل وصحة نفسية مع توجيه AI",
    url: "https://tenpercent.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-blue-400 to-teal-500",
    company: "Ten Percent Happier",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 104,
    name: "Simple Habit",
    description: "تأمل يومي مع برامج AI مخصصة",
    url: "https://simplehabit.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-green-400 to-teal-500",
    company: "Simple Habit",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 105,
    name: "Breethe",
    description: "تأمل واسترخاء مع مساعد AI للعافية",
    url: "https://breethe.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-cyan-400 to-blue-500",
    company: "Breethe",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 106,
    name: "Sanvello",
    description: "صحة نفسية وإدارة القلق مع AI",
    url: "https://sanvello.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-purple-400 to-pink-500",
    company: "Sanvello",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 107,
    name: "Chai",
    description: "منصة محادثة AI مع شخصيات متنوعة",
    url: "https://chai.ml",
    users: "غير محدد",
    category: "ai-assistants",
    featured: false,
    color: "from-brown-500 to-orange-500",
    company: "Chai",
    pricing: "Freemium",
    rating: "4.1/5"
  },
  {
    id: 108,
    name: "Focus@Will",
    description: "موسيقى علمية لتحسين التركيز والإنتاجية",
    url: "https://focusatwill.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-blue-500 to-indigo-500",
    company: "Focus@Will",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 109,
    name: "Noisli",
    description: "أصوات خلفية وضوضاء بيضاء للتركيز",
    url: "https://noisli.com",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-teal-400 to-blue-500",
    company: "Noisli",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 110,
    name: "MyNoise",
    description: "مولد ضوضاء مخصصة للاسترخاء والتركيز",
    url: "https://mynoise.net",
    users: "غير محدد",
    category: "health-wellness",
    featured: false,
    color: "from-gray-500 to-blue-500",
    company: "MyNoise",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 111,
    name: "Kaiber",
    description: "توليد فيديو فني وموسيقي بالذكاء الاصطناعي",
    url: "https://kaiber.ai",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-600 to-pink-600",
    company: "Kaiber",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 112,
    name: "Spotify Ad Studio",
    description: "إنشاء إعلانات صوتية مع AI",
    url: "https://adstudio.spotify.com",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-green-500 to-green-600",
    company: "Spotify",
    pricing: "مدفوع",
    rating: "4.2/5"
  },
  {
    id: 113,
    name: "Luminar NEO",
    description: "محرر صور متقدم مع AI للتحسين التلقائي",
    url: "https://skylum.com/luminar",
    users: "غير محدد",
    category: "design-creative",
    featured: false,
    color: "from-blue-500 to-purple-500",
    company: "Skylum",
    pricing: "مدفوع",
    rating: "4.5/5"
  },
  {
    id: 114,
    name: "10Web",
    description: "بناء مواقع WordPress مع AI",
    url: "https://10web.io",
    users: "غير محدد",
    category: "coding-development",
    featured: false,
    color: "from-blue-600 to-indigo-600",
    company: "10Web",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 115,
    name: "Merlin",
    description: "مساعد AI متعدد الوظائف كإضافة متصفح",
    url: "https://merlin.foyer.work",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-purple-600 to-indigo-600",
    company: "Merlin",
    pricing: "مدفوع",
    rating: "4.4/5"
  },
  {
    id: 116,
    name: "Dropmagic",
    description: "بناء متاجر Shopify مع AI",
    url: "https://dropmagic.com",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-green-500 to-blue-500",
    company: "Dropmagic",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 117,
    name: "Vidnoz",
    description: "إنشاء فيديوهات AI مع avatars متعددة اللغات",
    url: "https://vidnoz.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-red-500 to-pink-500",
    company: "Vidnoz",
    pricing: "Freemium",
    rating: "4.1/5"
  },
  {
    id: 118,
    name: "Talkio",
    description: "تعلم اللغات مع محادثة AI تفاعلية",
    url: "https://talkio.ai",
    users: "غير محدد",
    category: "education-research",
    featured: false,
    color: "from-blue-500 to-green-500",
    company: "Talkio",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 119,
    name: "Dume AI",
    description: "منصة إنتاجية شاملة مع أتمتة AI",
    url: "https://dume.ai",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-purple-500 to-blue-500",
    company: "Dume AI",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 120,
    name: "MeetGeek",
    description: "مساعد اجتماعات AI للتسجيل والتلخيص",
    url: "https://meetgeek.ai",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "MeetGeek",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 121,
    name: "Lovable",
    description: "بناء مواقع ويب بالذكاء الاصطناعي من الوصف",
    url: "https://lovable.dev",
    users: "غير محدد",
    category: "coding-development",
    featured: false,
    color: "from-pink-500 to-red-500",
    company: "Lovable",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 122,
    name: "Artlist",
    description: "مكتبة محتوى مع توليد AI للصور والفيديو",
    url: "https://artlist.io",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-purple-500 to-indigo-500",
    company: "Artlist",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 123,
    name: "Blaze",
    description: "أتمتة التسويق وإنشاء المحتوى للشركات الصغيرة",
    url: "https://blaze.ai",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "Blaze",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 124,
    name: "Anybiz",
    description: "وكلاء مبيعات AI للأتمتة التجارية",
    url: "https://anybiz.ai",
    users: "غير محدد",
    category: "business-marketing",
    featured: false,
    color: "from-blue-600 to-indigo-600",
    company: "Anybiz",
    pricing: "مدفوع",
    rating: "4.2/5"
  },
  {
    id: 125,
    name: "OpusClip",
    description: "تحويل الفيديوهات الطويلة إلى مقاطع قصيرة",
    url: "https://opus.pro",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-green-500 to-teal-500",
    company: "OpusClip",
    pricing: "مدفوع",
    rating: "4.4/5"
  },
  {
    id: 126,
    name: "Monica",
    description: "مساعد AI متعدد الوظائف كإضافة متصفح",
    url: "https://monica.im",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-pink-500 to-purple-500",
    company: "Monica",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 127,
    name: "Galaxy AI",
    description: "منصة شاملة تجمع أكثر من 1500 أداة AI",
    url: "https://galaxy.ai",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-indigo-500 to-purple-500",
    company: "Galaxy AI",
    pricing: "مدفوع",
    rating: "4.2/5"
  },
  {
    id: 128,
    name: "Klap",
    description: "تحويل محتوى YouTube إلى مقاطع قصيرة",
    url: "https://klap.app",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    company: "Klap",
    pricing: "مدفوع",
    rating: "4.3/5"
  },
  {
    id: 129,
    name: "HeyGen",
    description: "إنشاء فيديوهات تجارية متعددة اللغات",
    url: "https://heygen.com",
    users: "غير محدد",
    category: "content-generation",
    featured: false,
    color: "from-blue-500 to-purple-500",
    company: "HeyGen",
    pricing: "مدفوع",
    rating: "4.5/5"
  },
  {
    id: 130,
    name: "Presenti",
    description: "تحويل الملفات إلى عروض تقديمية بالذكاء الاصطناعي",
    url: "https://presenti.ai",
    users: "غير محدد",
    category: "productivity",
    featured: false,
    color: "from-green-500 to-blue-500",
    company: "Presenti",
    pricing: "Freemium",
    rating: "4.2/5"
  },

  // أدوات إضافية مهمة من القائمة المقدمة
  {
    id: 131,
    name: "Grok",
    description: "مساعد ذكي من xAI مع قدرات بحث فورية وتحليل الاتجاهات",
    url: "https://grok.com",
    users: "مليونين+",
    category: "ai-assistants",
    featured: true,
    color: "from-gray-800 to-black",
    company: "xAI (Elon Musk)",
    pricing: "مدفوع",
    rating: "4.6/5"
  },
  {
    id: 132,
    name: "Qwen Chat",
    description: "مساعد AI شامل من Alibaba مع فهم متعدد الوسائط",
    url: "https://chat.qwen.ai",
    users: "10M+",
    category: "ai-assistants",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "Alibaba",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 133,
    name: "Genspark",
    description: "مساحة عمل AI شاملة مع أدوات متعددة في منصة واحدة",
    url: "https://genspark.ai",
    users: "500K+",
    category: "productivity",
    featured: false,
    color: "from-purple-600 to-indigo-600",
    company: "Genspark",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 134,
    name: "Goblin Tools",
    description: "مجموعة أدوات بسيطة للمهام المعقدة، مصممة للأشخاص ذوي الاحتياجات الخاصة",
    url: "https://goblin.tools",
    users: "100K+",
    category: "productivity",
    featured: false,
    color: "from-green-600 to-teal-600",
    company: "Goblin Tools",
    pricing: "مجاني",
    rating: "4.7/5"
  },
  {
    id: 135,
    name: "Julius AI",
    description: "محلل بيانات ذكي لتحليل وتصور البيانات من Excel وCSV",
    url: "https://julius.ai",
    users: "200K+",
    category: "productivity",
    featured: false,
    color: "from-blue-600 to-purple-600",
    company: "Julius AI",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 136,
    name: "Lucid",
    description: "منصة التعاون البصري للرسوم التخطيطية والعصف الذهني",
    url: "https://lucid.app",
    users: "15M+",
    category: "productivity",
    featured: false,
    color: "from-orange-500 to-yellow-500",
    company: "Lucid Software",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 137,
    name: "Mapify",
    description: "أداة خرائط ذهنية بالذكاء الاصطناعي لتحويل المحتوى إلى خرائط",
    url: "https://mapify.so",
    users: "50K+",
    category: "productivity",
    featured: false,
    color: "from-teal-500 to-cyan-500",
    company: "Mapify",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 138,
    name: "Bricks",
    description: "محلل بيانات AI لإنشاء لوحات معلومات من ملفات CSV وExcel",
    url: "https://thebricks.com",
    users: "30K+",
    category: "productivity",
    featured: false,
    color: "from-red-500 to-pink-500",
    company: "Bricks",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 139,
    name: "Bolt",
    description: "منشئ مواقع وتطبيقات بالذكاء الاصطناعي من خلال المحادثة",
    url: "https://bolt.new",
    users: "100K+",
    category: "coding-development",
    featured: true,
    color: "from-yellow-500 to-orange-500",
    company: "StackBlitz",
    pricing: "Freemium",
    rating: "4.7/5"
  },
  {
    id: 140,
    name: "Lovable",
    description: "منشئ مواقع ويب بالذكاء الاصطناعي من الوصف النصي",
    url: "https://lovable.dev",
    users: "25K+",
    category: "coding-development",
    featured: false,
    color: "from-pink-500 to-red-500",
    company: "Lovable",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 141,
    name: "Napkin AI",
    description: "إنشاء عروض تقديمية ومرئيات من النصوص بالذكاء الاصطناعي",
    url: "https://napkin.ai",
    users: "40K+",
    category: "content-generation",
    featured: false,
    color: "from-indigo-500 to-purple-500",
    company: "Napkin",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 142,
    name: "Presentations AI",
    description: "إنشاء عروض تقديمية احترافية بالذكاء الاصطناعي",
    url: "https://presentations.ai",
    users: "60K+",
    category: "content-generation",
    featured: false,
    color: "from-blue-500 to-indigo-500",
    company: "Presentations AI",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 143,
    name: "AIPPT",
    description: "إنشاء عروض PowerPoint بالذكاء الاصطناعي بسرعة وسهولة",
    url: "https://aippt.com",
    users: "80K+",
    category: "content-generation",
    featured: false,
    color: "from-orange-500 to-red-500",
    company: "AIPPT",
    pricing: "Freemium",
    rating: "4.1/5"
  },
  {
    id: 144,
    name: "Quizizz",
    description: "منصة اختبارات تفاعلية مع إنشاء أسئلة بالذكاء الاصطناعي",
    url: "https://quizizz.com",
    users: "50M+",
    category: "education-research",
    featured: false,
    color: "from-purple-500 to-pink-500",
    company: "Quizizz",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 145,
    name: "QuestGen AI",
    description: "مولد أسئلة واختبارات بالذكاء الاصطناعي للتعليم",
    url: "https://questgen.ai",
    users: "20K+",
    category: "education-research",
    featured: false,
    color: "from-green-500 to-teal-500",
    company: "QuestGen",
    pricing: "Freemium",
    rating: "4.2/5"
  },
  {
    id: 146,
    name: "Jenni AI",
    description: "مساعد كتابة أكاديمية متقدم للأبحاث والمقالات العلمية",
    url: "https://jenni.ai",
    users: "500K+",
    category: "education-research",
    featured: false,
    color: "from-blue-600 to-indigo-600",
    company: "Jenni AI",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 147,
    name: "Samwell AI",
    description: "مساعد كتابة أكاديمية للطلاب والباحثين",
    url: "https://samwell.ai",
    users: "100K+",
    category: "education-research",
    featured: false,
    color: "from-teal-500 to-blue-500",
    company: "Samwell",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 148,
    name: "Scholarcy",
    description: "تلخيص الأوراق البحثية والمقالات الأكاديمية بالذكاء الاصطناعي",
    url: "https://scholarcy.com",
    users: "150K+",
    category: "education-research",
    featured: false,
    color: "from-indigo-500 to-purple-500",
    company: "Scholarcy",
    pricing: "Freemium",
    rating: "4.4/5"
  },
  {
    id: 149,
    name: "Research Rabbit",
    description: "أداة اكتشاف الأبحاث والأوراق العلمية ذات الصلة",
    url: "https://researchrabbit.ai",
    users: "80K+",
    category: "education-research",
    featured: false,
    color: "from-orange-500 to-yellow-500",
    company: "Research Rabbit",
    pricing: "مجاني",
    rating: "4.5/5"
  },
  {
    id: 150,
    name: "Kling AI",
    description: "مولد فيديو متقدم بالذكاء الاصطناعي من Kuaishou",
    url: "https://kling.kuaishou.com",
    users: "1M+",
    category: "content-generation",
    featured: true,
    color: "from-red-600 to-pink-600",
    company: "Kuaishou",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 151,
    name: "Sora",
    description: "مولد فيديو ثوري من OpenAI لإنشاء فيديوهات واقعية",
    url: "https://openai.com/sora",
    users: "محدود",
    category: "content-generation",
    featured: true,
    color: "from-green-600 to-blue-600",
    company: "OpenAI",
    pricing: "تجريبي",
    rating: "4.8/5"
  },
  {
    id: 152,
    name: "Ideogram",
    description: "مولد صور متقدم مع قدرات ممتازة لإنشاء النصوص في الصور",
    url: "https://ideogram.ai",
    users: "2M+",
    category: "content-generation",
    featured: false,
    color: "from-purple-600 to-pink-600",
    company: "Ideogram",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 153,
    name: "Leonardo AI",
    description: "منصة توليد صور متقدمة للألعاب والفنون الرقمية",
    url: "https://leonardo.ai",
    users: "5M+",
    category: "content-generation",
    featured: false,
    color: "from-orange-600 to-red-600",
    company: "Leonardo.AI",
    pricing: "Freemium",
    rating: "4.5/5"
  },
  {
    id: 154,
    name: "n8n",
    description: "منصة أتمتة مفتوحة المصدر للمطورين والشركات",
    url: "https://n8n.io",
    users: "100K+",
    category: "automation",
    featured: false,
    color: "from-red-500 to-pink-500",
    company: "n8n",
    pricing: "Freemium",
    rating: "4.6/5"
  },
  {
    id: 155,
    name: "Read AI",
    description: "تحليل الاجتماعات وتلخيص المحادثات بالذكاء الاصطناعي",
    url: "https://read.ai",
    users: "50K+",
    category: "productivity",
    featured: false,
    color: "from-blue-500 to-cyan-500",
    company: "Read AI",
    pricing: "Freemium",
    rating: "4.3/5"
  },
  {
    id: 156,
    name: "Undetectable AI",
    description: "كشف وتحسين المحتوى المولد بالذكاء الاصطناعي",
    url: "https://undetectable.ai",
    users: "200K+",
    category: "productivity",
    featured: false,
    color: "from-gray-600 to-gray-700",
    company: "Undetectable AI",
    pricing: "Freemium",
    rating: "4.2/5"
  }
];

// إحصائيات سريعة
export const getToolsStats = () => {
  const totalTools = aiTools.length;
  const featuredTools = aiTools.filter(tool => tool.featured).length;
  const freeTools = aiTools.filter(tool => tool.pricing === "مجاني").length;
  const freemiumTools = aiTools.filter(tool => tool.pricing === "Freemium").length;
  const paidTools = aiTools.filter(tool => tool.pricing === "مدفوع").length;
  
  const categoryStats = categories.map(category => ({
    ...category,
    count: aiTools.filter(tool => tool.category === category.id).length
  }));

  return {
    totalTools,
    featuredTools,
    freeTools,
    freemiumTools,
    paidTools,
    categoryStats
  };
};

// البحث والفلترة
export const searchTools = (query, selectedCategory = null, filters = {}) => {
  let filteredTools = aiTools;

  // فلترة حسب التصنيف
  if (selectedCategory) {
    filteredTools = filteredTools.filter(tool => tool.category === selectedCategory);
  }

  // فلترة حسب النص
  if (query) {
    const searchQuery = query.toLowerCase();
    filteredTools = filteredTools.filter(tool =>
      tool.name.toLowerCase().includes(searchQuery) ||
      tool.description.toLowerCase().includes(searchQuery) ||
      tool.company.toLowerCase().includes(searchQuery)
    );
  }

  // فلترة حسب المميز
  if (filters.featured) {
    filteredTools = filteredTools.filter(tool => tool.featured);
  }

  // فلترة حسب المجاني
  if (filters.free) {
    filteredTools = filteredTools.filter(tool => 
      tool.pricing === "مجاني" || tool.pricing === "Freemium"
    );
  }

  // ترتيب النتائج
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'featured':
        filteredTools.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'name':
        filteredTools.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'company':
        filteredTools.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case 'newest':
        // ترتيب حسب ID (الأحدث أولاً)
        filteredTools.sort((a, b) => b.id - a.id);
        break;
      default:
        // ترتيب افتراضي: المميز أولاً ثم حسب الشعبية
        filteredTools.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.id - b.id;
        });
    }
  }

  return filteredTools;
};

export default { categories, aiTools, getToolsStats, searchTools };
