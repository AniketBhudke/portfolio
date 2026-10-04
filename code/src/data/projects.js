import project2 from '../assets/project2.jpeg';
import project5 from '../assets/project5.jpeg';

import messLanding from '../assets/mess-hub/landing.png';
import rajHero from '../assets/mess-hub/raj-mess-hero.png';
import messAd from '../assets/mess-hub/mess-ad.png';
import messFooter from '../assets/mess-hub/mess-footer.png';
import messCard from '../assets/mess-hub/mess-card.png';
import noticesPayments from '../assets/mess-hub/notices-payments.png';
import adminDashboardNew from '../assets/mess-hub/admin-dashboard-new.png';
import quickActions from '../assets/mess-hub/quick-actions-prices.png';
import adminMenuNew from '../assets/mess-hub/admin-menu-new.png';
import studentMenuRatings from '../assets/mess-hub/student-menu-ratings.png';

import uberHome from '../assets/uber-fleet/home.png';
import uberOps from '../assets/uber-fleet/operations.png';
import uberRoutes from '../assets/uber-fleet/routes.png';
import uberRider from '../assets/uber-fleet/rider.png';

import mentoraHero from '../assets/mentora/hero.jpeg';
import mentoraDashboard from '../assets/mentora/dashboard.png';
import mentoraDashboardDetail from '../assets/mentora/dashboard-detail.png';
import mentoraCertificate from '../assets/mentora/WhatsApp Image 2026-09-11 at 7.21.03 PM.jpeg';

export const projects = [
  {
    id: 0,
    slug: 'uber-fleet-command-center',
    title: 'Uber Fleet & Revenue Command Center',
    subtitle: 'Real-Time Analytics Dashboard · Streamlit · Plotly',
    category: 'analytics',
    teamSize: '1',
    description:
      'Engineered a real-time Fleet Analytics Command Center using Streamlit and Python, processing 50,000+ booking records to deliver insights across 6 operational dimensions. Designed custom CSS-driven UI components and interactive visualizations to monitor fleet operations, track revenue streams, and analyze geographical demand patterns.',
    imgSrc: uberHome,
    impactMetrics: ['📊 50k+ Booking Records', '⚡ Dynamic Fleet Filters', '🗺️ Route Analytics'],
    tags: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'Data Analytics', 'CSS'],
    highlights: [
      'Built a bespoke CSS design system inside Streamlit to override default light theme elements, ensuring high-contrast visibility.',
      'Implemented Plotly visualizations with optimized theme templates to track multi-channel payment split, hourly demand spikes, and wait-time variances.',
      'Optimized data pipeline performance using @st.cache_data and vectorized operations to handle dynamic filtering across 6 vehicle classes seamlessly.'
    ],
    repoUrl: 'https://github.com/AniketBhudke/uber-fleet-dashboard',
    liveUrl: 'https://uber-dashboard-frontend.onrender.com',
    screenshotSections: [
      {
        title: 'Executive Home Dashboard',
        description: 'Top-level metric cards displaying real-time aggregated metrics with hourly demand distribution and distance vs. fare scatter plots.',
        images: [{ src: uberHome, caption: 'Executive Dashboard with hourly demand and dynamic filtering' }],
      },
      {
        title: 'Operations Overview',
        description: 'Fleet market share split and monthly status trends tracking completed, cancelled, and incomplete booking percentages.',
        images: [{ src: uberOps, caption: 'Operations Overview with trip health gauges' }],
      },
      {
        title: 'Geographical & Route Analytics',
        description: 'Route breakdown tracking top pickup/drop-off hotspots and most frequent origin-destination pairs.',
        images: [{ src: uberRoutes, caption: 'Top pickup/drop-off locations and route segments' }],
      },
      {
        title: 'Rider & Demand Behavior',
        description: 'Rider demand volume, payment channel distribution, and customer cancellation reasons breakdown.',
        images: [{ src: uberRider, caption: 'Rider behavior, revenue breakdown, and customer account ledgers' }],
      },
    ],
  },
  {
    id: 1,
    slug: 'mit-adt-mess-hub',
    title: 'MIT ADT Mess Hub',
    subtitle: 'Centralized Mess Management System · FastAPI',
    category: 'backend',
    teamSize: '1',
    description:
      'Developed the MIT ADT Mess Hub, a web-based mess management system for students and canteen administrators. The platform enables users to access digital menus, manage mess-related services, and improve communication between students and mess management.',
    imgSrc: messCard,
    impactMetrics: ['⚡ Sub-200ms Latency', '🔒 Role-Based Auth', '📱 QR Digital Scan'],
    tags: ['FastAPI', 'Python', 'HTML', 'CSS', 'JavaScript', 'REST API', 'Database Management', 'Authentication System'],
    highlights: [
      'Built a centralized, responsive web platform using Python and FastAPI framework.',
      'Designed responsive student and admin interfaces using HTML, CSS, and JavaScript.',
      'Integrated secure authentication, menu management, and database tables for mess transactions.'
    ],
    repoUrl: 'https://github.com/AniketBhudke/mitadt-mess-api',
    liveUrl: 'https://mitadt-mess-api.onrender.com',
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
        title: 'Student portal details',
        description:
          'Comprehensive menus, pricing, quick actions, and notices for students.',
        images: [
          { src: rajHero, caption: 'Canteen stats, branding, and weekly menu explorer' },
          { src: studentMenuRatings, caption: 'Detailed day-wise menu with student ratings' },
          { src: quickActions, caption: 'Quick actions and meal pricing breakdown' },
          { src: noticesPayments, caption: 'Latest notices and accepted payment methods' },
        ],
      },
      {
        title: 'Admin Dashboard',
        description:
          'Dedicated management interface for administrators to track revenue, feedback, and edit menus.',
        images: [
          { src: adminDashboardNew, caption: 'Admin overview with KPIs, revenue, and feedback distribution' },
          { src: adminMenuNew, caption: 'Menu management system to update items and prices' },
        ],
      },
      {
        title: 'Advertisements & Offers',
        description:
          'Displaying ongoing student discounts, new menu items, and feature announcements directly on the platform.',
        images: [
          { src: messAd, caption: 'Advertisement section highlighting student discounts and new features' },
        ],
      },
      {
        title: 'Information & Footer',
        description:
          'Quick access to services, mess locations, and administrative links structured cleanly at the bottom.',
        images: [
          { src: messFooter, caption: 'Structured footer with locations, services, and quick access' },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'ai-traffic-management',
    title: 'AI-Based Intelligent Traffic Management Framework',
    subtitle: 'Smart Traffic Control in Pune City · Research Paper',
    category: 'research',
    mentor: 'Prof. Hanifkha Pathan',
    status: 'In Progress',
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
  {
    id: 7,
    slug: 'mentora-career-educational-advisor',
    title: 'Mentora - Personalized Career & Educational Advisor',
    subtitle: 'AI-Assisted Learning Path Recommender · Smart India Hackathon 2025',
    category: 'research',
    mentor: 'Prof. Satyakam Rahul',
    teamSize: 'Team Code Crafters',
    description:
      'Our team, Code Crafters, built Mentora for the Smart Education theme at Smart India Hackathon 2025. The platform helps students discover personalized learning routes, identify the right career direction, and explore curated educational resources without the confusion of scattered information. The project was recognised as a Top 20 finalist at the MIT ADT Hackathon, where it stood out among 1,200+ competing teams.',
    imgSrc: mentoraHero,
    impactMetrics: ['🎓 Personalized Guidance', '🤖 AI-Assisted Recommendations', '🏆 MIT ADT Top 20 Finalist'],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'NLP', 'CSV Dataset', 'Career Guidance'],
    highlights: [
      'Mentora addresses the challenge of scattered learning resources by combining career guidance, skill discovery, and structured educational roadmaps in one student-focused dashboard.',
      'The platform uses a lightweight NLP-based flow to understand career interests, skill gaps, and educational preferences before suggesting the most relevant learning paths.',
      'After presenting the hackathon prototype to judges, the team advanced to the Top 20 finalist round, validating the concept and its practical value for student counseling and early career planning.'
    ],
    storyParagraphs: [
      'Mentora began as a student problem-solution idea to reduce confusion around choosing the right graduation path, skillset, and learning roadmap.',
      'We designed the app around a simple workflow: users describe their interests and goals, the system interprets their intent, and it recommends the most relevant learning resources and career direction.',
      'The MIT ADT Hackathon was a defining moment for the project because it gave us a platform to validate the problem, showcase the live product demo, and receive industry-level feedback from mentors and evaluators.'
    ],
    repoUrl: 'https://github.com/AniketBhudke/Mentora',
    screenshotSections: [
      {
        title: 'Hackathon certificate & project story',
        description: 'Mentora was presented as a practical Smart Education solution with a user-centered student workflow and measurable impact on guidance and learning clarity.',
        images: [
          { src: mentoraCertificate, caption: 'Internal Smart India Hackathon 2025 certificate for Team Code Crafters' },
          { src: mentoraHero, caption: 'Mentora product demo presented during the Smart Education hackathon showcase' },
          { src: mentoraDashboard, caption: 'Mentora dashboard demonstrating personalized student guidance and career planning' },
          { src: mentoraDashboardDetail, caption: 'Detailed view of the Mentora recommendation flow and student action journey' },
        ],
      },
      {
        title: 'Student dashboard',
        description: 'The dashboard brings recommendations, skill tracking, educational courses, and profile preferences together for the next step.',
        images: [
          { src: mentoraDashboard, caption: 'Mentora personalized student dashboard' },
          { src: mentoraDashboardDetail, caption: 'Mentora dashboard workflow and student actions' },
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
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
