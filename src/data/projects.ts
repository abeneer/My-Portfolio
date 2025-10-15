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
