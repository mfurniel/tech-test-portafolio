export interface Experience {
  company: string;
  role: string;
  duration: string | null;
  responsibilities: string[];
  technologies: string[] | null;
}

export const experiences: Experience[] = [
  {
    company: "Eskuad",
    role: "Desarrollador de Software Junior",
    duration: "Abril 2024 - Junio 2024",
    responsibilities: [
      "Desarrollo de nuevas funcionalidades para la plataforma web de diseño y gestión de formularios.",
      "Colaboración dentro del marco de trabajo Scrum, participando activamente en las ceremonias y reuniones correspondientes.",
    ],
    technologies: ["Vue", "Tailwind CSS", "Git", "Github", "Node"],
  },
  {
    company: "AVA Montajes",
    role: "Desarrollador Mobile Practicante",
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

export const experiencesAcademyc: Experience[] = [
  {
    company: "Memoria de Título",
    role: "Estudiante Memorista @ UDEC",
    duration: "Agosto 2023 - Marzo 2024",
    responsibilities: [
      "Desarollo de un prototipo de dashboard interactivo para monitorear la adherencia al tratamiento farmacológico de pacientes.",
      "Implemtación diversas visualizaciones de datos.",
      "Generación de datos de prueba.",
      "Prueba de usabilidad ocupando el Cuestionario SUS",
    ],
    technologies: ["React", "Highcharts", "Python", "Flask"],
  },
  {
    company: "Proyecto Estacionamiento",
    role: "Desarrollador Mobile @ Electivo Proyecto de Software",
    duration: null,
    responsibilities: [
      "Desarrollé una aplicación móvil en Flutter diseñada para ayudar a los usuarios a visualizar y monitorear la disponibilidad de espacios en estacionamientos.",
    ],
    technologies: ["Flutter"],
  },
  {
    company: "Software de Encuestas",
    role: "Estudiante @ Ingeniería de Software",
    duration: null,
    responsibilities: [
      "Desarrollo de un sistema de creación de encuestas.",
      "Marco de Trabajo Scrum.",
      "Desarrollo Frontend y Backend.",
    ],
    technologies: ["Flask", "Heroku", "PostgreSQL"],
  },
  {
    company: "Base de datos con PostgreSQL",
    role: "Estudiante @ Bases de Datos",
    duration: null,
    responsibilities: [
      "Creación de una base de datos pensada en un negocio o almacén de barrio.",
      "Modelado de la base de datos.",
      "Normalización del modelo de datos",
    ],
    technologies: ["PostgreSQL"],
  },
  {
    company: "CADE",
    role: "Monitor @ Universidad de Concepción",
    duration: "Marzo 2022 - Diciembre 2022",
    responsibilities: [
      "Monitoreé y brindé apoyo a un grupo de 5 estudiantes.",
      "Respondí preguntas y llevé a cabo actividades educativas.",
      "Elaboré reportes mensuales sobre su progreso académico.",
    ],
    technologies: null,
  },
];
