import type { Certification } from '../types/portfolio';

export const certifications: Certification[] = [
  {
    id: 'iti-web-development-dotnet',
    title: 'Web Development Using .NET',
    issuer: 'Information Technology Institute (ITI)',
    type: 'Summer Training',
    hours: '144 Hours',
    period: 'Aug 8 – Sep 2, 2026',
    grade: '96%',
    description:
      'Achieved a 96% evaluation, covering C#, SQL Server, Entity Framework Core, ASP.NET MVC, Generative AI, AI Agents, and Workflow Automation.',
    topics: [
      'C#',
      'SQL Server',
      'Entity Framework Core',
      'ASP.NET MVC',
      'Generative AI',
      'AI Agents',
      'Workflow Automation',
    ],
    certificateUrl: 'https://drive.google.com/file/d/1QTvx4f0SUpYDGQ444cKlgzjDfw2CVXL0/view',
  },
  {
    id: 'depi-fullstack-dotnet',
    title: 'Full Stack .NET Web Development',
    issuer: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Remote, Cairo',
    period: 'Nov 30, 2024 – May 15, 2025',
    grade: '98%',
    description:
      'Covered C#, OOP, ASP.NET Core MVC & Web API, Entity Framework, SQL Server, JavaScript, HTML/CSS, Bootstrap, Git/GitHub, System Design Basics.',
    topics: [
      'C#',
      'OOP',
      'ASP.NET Core MVC & Web API',
      'Entity Framework',
      'SQL Server',
      'JavaScript',
      'HTML/CSS',
      'Bootstrap',
      'Git/GitHub',
      'System Design Basics',
    ],
    certificateUrl: 'https://drive.google.com/file/d/1A1OI2stQGi1BBGQrh5eCqvhUP6yZHl6k/view',
  },
  {
    id: 'depi-business-english',
    title: 'Business English',
    issuer: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Remote, Cairo',
    period: 'Nov 30, 2024 – May 15, 2025',
    description:
      'Professional communication training focused on workplace collaboration, technical reporting, and client presentation.',
    topics: [
      'Workplace English',
      'Technical Reporting',
      'Business Communication',
      'Presentation Skills',
    ],
    certificateUrl: 'https://drive.google.com/file/d/1GYUC7J1CPt6Q5B3T1X_1n4Xs2nQCi3rM/view',
  },
];
