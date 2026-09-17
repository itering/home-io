'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'zh-HK' | 'zh-CN';

export const languages: Array<{ code: Language; label: string; shortLabel: string }> = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'zh-HK', label: '繁體中文', shortLabel: '繁中' },
  { code: 'zh-CN', label: '简体中文', shortLabel: '简中' }
];

export const siteCopy = {
  en: {
    nav: {
      products: 'Products & Services',
      team: 'Team',
      contact: 'Contact Us',
      language: 'Language selection'
    },
    hero: {
      eyebrow: 'RESEARCH. BUILD. DEPLOY.',
      titleLines: ['THE AI NATIVE', 'FUTURE'],
      studio: 'AI NATIVE STUDIO · SINGAPORE',
      imageAlt: 'Itering AI Native studio hero'
    },
    products: {
      headingDesktop: "WE'RE BUILDING",
      headingMobile: ["WE'RE", 'BUILDING'],
      learnMore: 'Learn more ↗',
      items: [
        {
          title: 'Hast AIP',
          imageAlt: 'Data',
          href: 'https://hast.so/en',
          body: 'An enterprise AI platform and workbench that connects private data, internal systems, and expert processes into manageable AI workflows. Built from hands-on FDE projects, AIP helps teams develop and run AI applications for their business.'
        },
        {
          title: 'Hast FDE',
          imageAlt: 'AI',
          href: 'https://hast.so/en/fde',
          body: 'On-site engineering that works alongside your team. From defining requirements and integrating systems to testing and deployment, we use AIP to bring AI applications into your existing workflows and daily operations.'
        },
        {
          title: 'Hast Agent',
          imageAlt: 'Data',
          href: 'https://hast.so/en/agent',
          body: 'An AI workspace for tasks that need sustained execution. Describe your goal in plain language; the agent plans the steps, uses coding and browser tools, and delivers usable results with files and a record of its work.'
        }
      ]
    },
    culture: {
      headingDesktop: 'About the Team',
      headingMobile: ['About', 'the Team'],
      items: [
        {
          number: '01',
          title: 'Human + Agent team',
          body: 'Humans and agent colleagues work at roughly a 1:1 ratio. People provide judgment and make decisions; agents help execute daily tasks.',
          imageAlt: 'Human + Agent team'
        },
        {
          number: '02',
          title: 'Delivery & Optimization',
          body: 'Our work spans technical research, product development, and system deployment. After launch, we maintain and improve systems as business needs evolve.',
          imageAlt: 'Delivery & Optimization'
        },
        {
          number: '03',
          title: 'Experience across industries',
          body: 'We bring product development and operating experience from traditional industries and Web3. We start with business workflows and system requirements to apply AI across sectors.',
          imageAlt: 'Experience across industries'
        },
        {
          number: '04',
          title: 'Rooted in Asia',
          body: 'Headquartered in Singapore, with team members across Asia. We collaborate across locations to develop and deliver projects for clients throughout the region.',
          imageAlt: 'Rooted in Asia'
        }
      ]
    },
    beliefs: {
      heading: 'WE BELIEVE',
      imageAlt: 'belief',
      statements: [
        'AI Native is not a feature. It changes how organizations bring together talent, knowledge, and execution.',
        'The next generation of companies will be built by hybrid teams of humans and agents.',
        'Embrace the AI future. Build the next generation of companies, products, and systems.'
      ]
    },
    contact: {
      cta: 'Contact us'
    },
    footer: {
      brandKit: 'Brand Kit'
    }
  },
  'zh-CN': {
    nav: {
      products: '产品与服务',
      team: '团队',
      contact: '联络我们',
      language: '选择语言'
    },
    hero: {
      eyebrow: '研究、构建、落地',
      titleLines: ['AI NATIVE 的未来'],
      studio: 'AI NATIVE 工作室 · 新加坡',
      imageAlt: 'Itering AI Native 工作室首页图像'
    },
    products: {
      headingDesktop: '核心业务',
      headingMobile: ['核心', '业务'],
      learnMore: '了解更多 ↗',
      items: [
        {
          title: 'Hast AIP',
          imageAlt: '数据',
          href: 'https://hast.so/zh-CN',
          body: '企业 AI 平台与工作台，将私有数据、内部系统及专家流程整合为可管理的 AI 工作流程。源自 FDE 项目实践，支持团队建立及运行贴合业务的 AI 应用。'
        },
        {
          title: 'Hast FDE',
          imageAlt: 'AI',
          href: 'https://hast.so/zh-CN/fde',
          body: '与企业团队并肩工作的驻场工程服务。从梳理需求、系统整合到测试部署，结合 AIP 平台，将 AI 应用接入现有流程，投入日常运营。'
        },
        {
          title: 'Hast Agent',
          imageAlt: '数据',
          href: 'https://hast.so/zh-CN/agent',
          body: '可持续执行任务的 AI 工作空间。用自然语言交代目标，Agent 便会规划步骤、使用代码及浏览器等工具，交付可用成果，并保留执行过程与文件供你跟进。'
        }
      ]
    },
    culture: {
      headingDesktop: '关于团队',
      headingMobile: ['关于', '团队'],
      items: [
        {
          number: '01',
          title: '人类 + Agent 团队',
          body: '人类与 Agent 同事的比例约为 1:1。人类负责判断与决策，Agent 参与日常执行。',
          imageAlt: '人类 + Agent 团队'
        },
        {
          number: '02',
          title: '交付与优化',
          body: '团队涵盖技术研究、产品开发及系统部署，并在上线后持续维护与迭代，让系统随业务需求改进。',
          imageAlt: '交付与优化'
        },
        {
          number: '03',
          title: '跨行业实战经验',
          body: '兼具传统行业及 Web3 产品开发与运营经验。我们从业务流程和系统需求出发，将 AI 应用于不同的行业场景。',
          imageAlt: '跨行业实战经验'
        },
        {
          number: '04',
          title: '立足亚洲',
          body: '总部设于新加坡，团队成员分布亚洲多地，通过跨地区协作，支持区内客户的开发与交付。',
          imageAlt: '立足亚洲'
        }
      ]
    },
    beliefs: {
      heading: '我们相信',
      imageAlt: '愿景',
      statements: [
        'AI Native 不只是一项功能，更是组织人才、知识与执行方式的一次改变。',
        '下一代公司，将由人类与 Agent 组成的混合团队共同构建。',
        '拥抱 AI 未来，共建下一代公司、产品与系统。'
      ]
    },
    contact: {
      cta: '联络我们'
    },
    footer: {
      brandKit: '品牌资源'
    }
  },
  'zh-HK': {
    nav: {
      products: '產品與服務',
      team: '團隊',
      contact: '聯絡我們',
      language: '選擇語言'
    },
    hero: {
      eyebrow: '研究、構建、落地',
      titleLines: ['AI NATIVE 的未來'],
      studio: 'AI NATIVE 工作室 · 新加坡',
      imageAlt: 'Itering AI Native 工作室首頁圖像'
    },
    products: {
      headingDesktop: '核心業務',
      headingMobile: ['核心', '業務'],
      learnMore: '了解更多 ↗',
      items: [
        {
          title: 'Hast AIP',
          imageAlt: '數據',
          href: 'https://hast.so/zh-CN',
          body: '企業 AI 平台與工作台，將私有數據、內部系統及專家流程整合為可管理的 AI 工作流程。源自 FDE 項目實踐，支援團隊建立及運行貼合業務的 AI 應用。'
        },
        {
          title: 'Hast FDE',
          imageAlt: 'AI',
          href: 'https://hast.so/zh-CN/fde',
          body: '與企業團隊並肩工作的駐場工程服務。從梳理需求、系統整合到測試部署，結合 AIP 平台，將 AI 應用接入現有流程，投入日常營運。'
        },
        {
          title: 'Hast Agent',
          imageAlt: '數據',
          href: 'https://hast.so/zh-CN/agent',
          body: '可持續執行任務的 AI 工作空間。用自然語言交代目標，Agent 便會規劃步驟、使用程式碼及瀏覽器等工具，交付可用成果，並保留執行過程與檔案供你跟進。'
        }
      ]
    },
    culture: {
      headingDesktop: '關於團隊',
      headingMobile: ['關於', '團隊'],
      items: [
        {
          number: '01',
          title: '人類 + Agent 團隊',
          body: '人類與 Agent 同事的比例約為 1:1。人類負責判斷與決策，Agent 參與日常執行。',
          imageAlt: '人類 + Agent 團隊'
        },
        {
          number: '02',
          title: '交付與優化',
          body: '團隊涵蓋技術研究、產品開發及系統部署，並在上線後持續維護與迭代，讓系統隨業務需求改進。',
          imageAlt: '交付與優化'
        },
        {
          number: '03',
          title: '跨行業實戰經驗',
          body: '兼具傳統行業及 Web3 產品開發與營運經驗。我們從業務流程和系統需求出發，將 AI 應用於不同的行業場景。',
          imageAlt: '跨行業實戰經驗'
        },
        {
          number: '04',
          title: '立足亞洲',
          body: '總部設於新加坡，團隊成員分佈亞洲多地，透過跨地區協作，支援區內客戶的開發與交付。',
          imageAlt: '立足亞洲'
        }
      ]
    },
    beliefs: {
      heading: '我們相信',
      imageAlt: '願景',
      statements: [
        'AI Native 不只是一項功能，更是組織人才、知識與執行方式的一次改變。',
        '下一代公司，將由人類與 Agent 組成的混合團隊共同構建。',
        '擁抱 AI 未來，共建下一代公司、產品與系統。'
      ]
    },
    contact: {
      cta: '聯絡我們'
    },
    footer: {
      brandKit: '品牌資源'
    }
  }
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: (typeof siteCopy)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = 'itering.language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language | null>(null);
  const language = currentLanguage ?? 'en';

  useEffect(() => {
    let restoredLanguage: Language = 'en';
    try {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      const supportedLanguage = languages.find((item) => item.code === savedLanguage);
      if (supportedLanguage) {
        restoredLanguage = supportedLanguage.code;
      }
    } catch {
      // Keep the default language when browser storage is unavailable.
    }
    // Restore browser-only preferences after hydration to match the static HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentLanguage(restoredLanguage);
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setCurrentLanguage(nextLanguage);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Language switching still works for this visit if storage is blocked.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      language === 'zh-HK' ? 'zh-Hant-HK' : language === 'zh-CN' ? 'zh-Hans-CN' : 'en';
    if (currentLanguage !== null) {
      document.documentElement.removeAttribute('data-language-pending');
    }
  }, [language, currentLanguage]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: siteCopy[language]
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div className="contents" data-language-ready={currentLanguage !== null}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
