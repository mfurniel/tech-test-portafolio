export interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Eskuad",
    position: "Desarrollador de Software Junior @ Eskuad",
    duration: "Abril 2024 - Junio 2024",
    responsibilities: [
      "Desarrollo de nuevas funcionalidades para la plataforma web de diseño y gestión de formularios.",
      "Colaboración dentro del marco de trabajo Scrum, participando activamente en las ceremonias y reuniones correspondientes.",
    ],
    technologies: ["Vue", "Tailwind CSS", "Git", "Github", "Node"],
  },
  {
    company: "AVA Montajes",
    position: "Desarrollador Mobile Practicante @ AVA Montajes",
    duration: "Enero 2023 - Marzo 2023",
    responsibilities: [
      "Aplicación móvil para la gestión de formularios y visualización de documentos en entornos sin conectividad.",
      "Implementación de sincronización de datos.",
      "Diseño de la base de datos.",
      "Desarrollo de widgets personalizados para mejorar la experiencia del usuario.",
    ],
    technologies: ["Flutter", "Git", "Bitbucket", "Sqflite"],
  },
];
