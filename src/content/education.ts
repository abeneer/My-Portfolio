export type Edu = {
    period: string;
    title: string;
    school: string;
    location?: string;
    details?: string;
    logo?: string; 
  };
  
  export const education: Edu[] = [
    {
      period: "2024 – 2025",
      title: "Msc in Computer Science",
      school: "University of Hertfordshire",
      location: "Hatfield, United Kingdom",
      details: "Dissertation: Design2Code — GenAI for automated UI prototyping, Focus: Full-Stack, Generative AI",
      logo: "logos/uh_logo.jpeg"
      
    },
    {
        period: "2019 — 2022",
        title: "BSc in Information Technology (2:1)",
        school: "University of Mumbai",
        location: "Mumbai, India",
        details:  "Projects: MERN Chat App, Weather App, To-Do App, Core: DBMS, OOP, OS, Networks",
        logo: "logos/um.jpeg",
          
    },
    
  ];
  