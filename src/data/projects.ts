export type Project = {
  id?: number;
  slug?: string;
  title: string;
  summary?: string;
  category?: string;
  description?: string;
  liveUrl?: string;
  tags: string[];
  demo?: string;
  repo?: string;
  thumb?: string;
};

export const projects: Project[] = [

  {
    slug: "ai-brochure-builder",
    title: "AI Brochure Builder",
    summary: "An AI-powered full-stack web application that analyzes company websites and generates professional business brochures in real time using OpenAI streaming, web scraping, markdown rendering, caching, and PDF export.",
    category: "AI / Full Stack",
    tags: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "AI",
      "Web Scraping",
      "Streaming",
      "Tailwind CSS",
      "Markdown",
      "PDF Export",
      "Caching",
    ],
    demo: "https://ai-brochure-builder.vercel.app/",
    repo: "https://github.com/abeneer/ai-brochure-builder",
    thumb: "/thumbs/ai-brochure.png",
    
  },
  {
    slug: "to-do-list-app",
    title: "To-Do List App",
    summary: "A simple and responsive task management app built using HTML, CSS, and JavaScript.",
    category: "Web Dev",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://to-do-list-app-abeneer.vercel.app/",
    repo: "https://github.com/abeneer/To-Do-List-App",
    thumb: "/thumbs/to-do.png",
  },

  {
    slug: "weather-app",
    title: "Weather App",
    summary: "A real-time weather forecasting app built with React, using OpenWeatherMap and GeoDB APIs.",
    category: "Web Dev",
    tags: ["React", "API", "OpenWeather", "GeoDB"],
    demo: "https://weather-app-abeneer.vercel.app/",
    repo: "https://github.com/abeneer/Weather-App",
    thumb: "/thumbs/weather.png",
  },

  {
    slug: "quiz-app",
    title: "Quiz App",
    summary: "An interactive quiz game built with HTML, CSS, and JavaScript with score tracking.",
    category: "Web Dev",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://quiz-abeneer.vercel.app//",
    repo: "https://github.com/abeneer/Quiz-App",
    thumb: "/thumbs/quiz.png",
  },
]
