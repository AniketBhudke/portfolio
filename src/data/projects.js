import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project5 from '../assets/project5.jpeg';

import messLanding from '../assets/mess-hub/landing.png';
import messLogin from '../assets/mess-hub/login-dropdown.png';
import messSignup from '../assets/mess-hub/signup.png';
import rajHero from '../assets/mess-hub/raj-mess-hero.png';
import rajMenu from '../assets/mess-hub/raj-mess-menu.png';
import rajActions from '../assets/mess-hub/raj-mess-actions.png';
import adminDashboard from '../assets/mess-hub/admin-dashboard.png';
import adminOverview from '../assets/mess-hub/admin-overview.png';
import adminMenu from '../assets/mess-hub/admin-menu.png';

export const projects = [
  {
    id: 1,
    slug: 'mit-adt-mess-hub',
    title: 'MIT ADT Mess Hub',
    subtitle: 'Centralized Mess Management System · FastAPI',
    category: 'backend',
    mentor: 'prof.Satyakam Rahul',
    teamSize: '1',
    description:
      'Developed the MIT ADT Mess Hub, a web-based mess management system for students and canteen administrators. The platform enables users to access digital menus, manage mess-related services, and improve communication between students and mess management.',
    imgSrc: messLanding,
    impactMetrics: ['⚡ Sub-200ms Latency', '🔒 Role-Based Auth', '📱 QR Digital Scan'],
    tags: ['FastAPI', 'Python', 'HTML', 'CSS', 'JavaScript', 'REST API', 'Database Management', 'Authentication System'],
    highlights: [
      'Built a centralized, responsive web platform using Python and FastAPI framework.',
      'Designed responsive student and admin interfaces using HTML, CSS, and JavaScript.',
      'Integrated secure authentication, menu management, and database tables for mess transactions.'
    ],
    repoUrl: 'https://github.com/AniketBhudke/mitadt-mess-api',
    screenshotSections: [
      {
        title: 'Campus mess hub',
        description:
          'Single entry point for all mess facilities on campus. Students pick MANET Mess, Design Mess, or Raj Mess and continue into that unit’s portal.',
        images: [
          { src: messLanding, caption: 'All mess facilities — MANET, Design, and Raj Mess cards' },
        ],
      },
      {
        title: 'User authentication',
        description:
          'Login / Register supports separate User and Admin paths so students and canteen managers each reach the right experience.',
        images: [
          { src: messLogin, caption: 'User vs Admin login selection' },
          { src: messSignup, caption: 'Student account registration' },
        ],
      },
      {
        title: 'Student portal (Raj Mess)',
        description:
          'Each mess has its own branded student portal. Raj Mess shown here — MANET Mess and Design Mess follow the same user flow.',
        images: [
          { src: rajHero, caption: 'Raj Canteen — stats, branding, and weekly menu explorer' },
          { src: rajMenu, caption: 'Day & meal selection with menu exploration' },
          { src: rajActions, caption: 'UPI payments, feedback, suggestions, and complaints' },
        ],
      },
      {
        title: 'Admin dashboard (Raj Mess)',
        description:
          'Per-mess admin panels for menu management, revenue, feedback, complaints, notices, and analytics — replicated for MANET and Design Mess.',
        images: [
          { src: adminDashboard, caption: 'Dashboard overview with KPIs and charts' },
          { src: adminOverview, caption: 'Recent menu items, notices, and quick actions' },
          { src: adminMenu, caption: 'Menu management — add items, images, and schedules' },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'event-decoration-booking',
    title: 'Event Decoration System',
    subtitle: 'Service Booking Platform · FastAPI',
    category: 'backend',
    teamSize: '1',
    description:
      'Built a web-based event decoration booking platform using FastAPI, HTML, CSS, and JavaScript. Developed secure authentication and booking management modules along with high-performance backend REST APIs.',
    imgSrc: project2,
    impactMetrics: ['⚡ Modular REST APIs', '🛡️ Booking Validator', '🔄 FastAPI Service'],
    tags: ['Python', 'FastAPI', 'HTML', 'CSS', 'JavaScript', 'REST API', 'Authentication System'],
    highlights: [
      'Developed modular event decoration booking services with clean REST API architectures.',
      'Implemented secure user authentication and booking validation systems.',
      'Designed responsive frontend interfaces allowing smooth service discovery.'
    ],
    repoUrl: 'https://github.com/AniketBhudke/Event-Decoration',
    screenshotSections: [
      {
        title: 'Project overview',
        description: 'Service browsing and booking workflow for weddings, birthdays, and corporate events.',
        images: [{ src: project2, caption: 'Event decoration booking platform' }],
      },
    ],
  },
  {
    id: 3,
    slug: 'restaurant-qr-menu',
    title: 'Restaurant Management System',
    subtitle: 'QR-Based Contactless Menu System · FastAPI',
    category: 'backend',
    description:
      'Full-stack restaurant menu management system built with FastAPI. Scan a QR code to access a live digital menu instantly on any smartphone. Built authentication systems for menu edits and protected admin routes.',
    imgSrc: project3,
    impactMetrics: ['⚡ Sub-2s Instant Load', '🔑 JWT Auth Protected', '📱 Mobile-First UI'],
    tags: ['FastAPI', 'Python', 'JWT', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    highlights: [
      'Instant contactless digital menu loading under 2 seconds via QR scan.',
      'JWT-secured API authentication for canteen managers to edit prices and categories.',
      'Responsive, mobile-first design leveraging clean HTML5 and custom CSS layouts.'
    ],
    repoUrl: 'https://github.com/AniketBhudke',
    screenshotSections: [
      {
        title: 'Project overview',
        description: 'QR-based contactless menu with JWT-secured APIs and mobile-first UI.',
        images: [{ src: project3, caption: 'Restaurant QR menu system' }],
      },
    ],
  },
  {
    id: 4,
    slug: 'ai-traffic-management',
    title: 'AI-Based Intelligent Traffic Management Framework',
    subtitle: 'Smart Traffic Control in Pune City · Research Paper',
    category: 'research',
    mentor: 'prof.Satyakam Rahul',
    authorsCount: 1,
    description:
      'Conducted extensive field research and surveys to design an Intelligent Traffic Management Framework (ITMF). The proposed system integrates Artificial Intelligence (AI), Internet of Things (IoT), and drone surveillance for real-time traffic monitoring in Pune City.',
    imgSrc: project5,
    impactMetrics: ['🏆 1st Prize Paper', '🤖 AI & IoT Integrated', '📡 Drone Surveillance'],
    tags: ['Artificial Intelligence', 'IoT', 'Traffic Management', 'Smart City', 'Surveillance'],
    highlights: [
      'Proposes mixed-method data collection involving surveys with traffic police officers and camera observations.',
      'Addresses major congestion causes: rule violations, wrong-side driving, poor road conditions, and potholes.',
      'Presented at the 8th International Symposium on Innovation in Global Technology, winning 1st Prize.'
    ],
    repoUrl: 'https://github.com/AniketBhudke',
    screenshotSections: [
      {
        title: 'Research and framework overview',
        description: 'Traffic congestion prediction models and drone surveillance design maps for Pune city intersections.',
        images: [{ src: project5, caption: 'AI-Based Intelligent Traffic Management Framework' }],
      },
    ],
  },
  {
    id: 5,
    slug: 'ecommerce-sales-churn-analytics',
    title: 'E-Commerce Sales, Customer Analytics & Churn Prediction',
    subtitle: 'Sales Analytics · RFM Customer Segmentation · ML Churn Model',
    category: 'analytics',
    description:
      'End-to-end data analytics and machine learning solution for an e-commerce platform. Performed EDA, RFM customer segmentation, and SQL KPI extraction. Built ML models (Random Forest & Logistic Regression) to predict customer churn paired with a 5-page Power BI dashboard.',
    imgSrc: project3,
    impactMetrics: ['⚡ RFM Segmentation', '🤖 ML Churn Prediction', '📊 5-Page Power BI'],
    tags: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Scikit-Learn', 'RFM Analysis', 'DAX'],
    highlights: [
      'Executed complete end-to-end data cleaning, EDA, and statistical preprocessing using Pandas and NumPy.',
      'Performed RFM (Recency, Frequency, Monetary) analysis to segment customer base into high-value and at-risk cohorts.',
      'Developed machine learning churn prediction models (Logistic Regression & Random Forest) evaluated using Precision & F1-Score.'
    ],
    repoUrl: 'https://github.com/AniketBhudke/Database-Project',
    screenshotSections: [
      {
        title: 'Executive Sales & Profit Overview',
        description: 'Comprehensive analysis of revenue, profit margins, regional performance, and yearly growth trends.',
        images: [{ src: project3, caption: 'E-Commerce Executive Sales & Profit Analytics Dashboard' }],
      },
      {
        title: 'Customer RFM & ML Churn Prediction',
        description: 'Customer segmentation breakdown using RFM scoring and machine learning churn risk classification.',
        images: [{ src: project3, caption: 'Customer Segmentation & ML Churn Risk Analysis' }],
      },
    ],
  },
  {
    id: 6,
    slug: 'employee-analytics-attrition-prediction',
    title: 'Employee Analytics, Attrition Insights & ML Prediction',
    subtitle: 'HR Workforce Analytics · Attrition Factor Analysis · ML Risk Prediction',
    category: 'analytics',
    description:
      'Comprehensive workforce analytics and employee attrition prediction system. Analyzed key drivers of employee turnover including compensation, job satisfaction, overtime hours, and tenure. Built classification ML models alongside a 5-page Power BI HR dashboard.',
    imgSrc: project5,
    impactMetrics: ['🎯 Attrition Risk ML', '📊 5-Page HR Dashboard', '💡 Retention Insights'],
    tags: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Scikit-Learn', 'HR Analytics', 'DAX'],
    highlights: [
      'Analyzed key workplace drivers of employee turnover across demographics, compensation, job satisfaction, and overtime.',
      'Built Machine Learning classification models (Logistic Regression & Random Forest) to predict individual attrition risk scores.',
      'Constructed an interactive 5-Page Power BI HR Dashboard (HR Overview, Demographics, Attrition Analysis, Risk Prediction).'
    ],
    repoUrl: 'https://github.com/AniketBhudke/Database-Project',
    screenshotSections: [
      {
        title: 'HR Overview & Workforce Demographics',
        description: 'Departmental headcount distribution, compensation breakdown, and experience vs. salary analysis.',
        images: [{ src: project5, caption: 'HR Overview & Workforce Analytics Dashboard' }],
      },
      {
        title: 'Attrition Risk Prediction & Performance Insights',
        description: 'Machine learning attrition predictions evaluating satisfaction, overtime, and tenure risk factors.',
        images: [{ src: project5, caption: 'Employee Attrition Risk ML & Performance Analytics' }],
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
