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
    role: "Junior Software Developer",
    duration: "April 2024 - June 2024",
    responsibilities: [
      "Developed new features for the web platform focused on form design and management.",
      "Collaborated within the Scrum framework, actively participating in ceremonies and meetings.",
    ],
    technologies: ["Vue", "Tailwind CSS", "Git", "GitHub", "Node"],
  },
  {
    company: "AVA Montajes",
    role: "Mobile Developer Intern",
    duration: "January 2023 - March 2023",
    responsibilities: [
      "Built a mobile application for form management and document visualization in offline environments.",
      "Implemented data synchronization functionalities.",
      "Designed the database schema.",
      "Developed custom widgets to enhance user experience.",
    ],
    technologies: ["Flutter", "Git", "Bitbucket", "Sqflite"],
  },
];

export const experiencesAcademyc: Experience[] = [
  {
    company: "Thesis Project",
    role: "Undergraduate Thesis Student @ UDEC",
    duration: "August 2023 - March 2024",
    responsibilities: [
      "Developed a prototype of an interactive dashboard to monitor patients' adherence to pharmacological treatment.",
      "Implemented various data visualizations.",
      "Generated test datasets.",
      "Conducted usability testing using the SUS Questionnaire.",
    ],
    technologies: ["React", "Highcharts", "Python", "Flask"],
  },
  {
    company: "Parking Project",
    role: "Mobile Developer @ Software Project Elective",
    duration: null,
    responsibilities: [
      "Developed a mobile application in Flutter to help users visualize and monitor parking space availability.",
    ],
    technologies: ["Flutter"],
  },
  {
    company: "Survey Software",
    role: "Student @ Software Engineering",
    duration: null,
    responsibilities: [
      "Developed a survey creation system.",
      "Worked under the Scrum framework.",
      "Handled both frontend and backend development.",
    ],
    technologies: ["Flask", "Heroku", "PostgreSQL"],
  },
  {
    company: "Database Project",
    role: "Student @ Database Course",
    duration: null,
    responsibilities: [
      "Designed a database for a small business or local store.",
      "Modeled and normalized the database schema.",
    ],
    technologies: ["PostgreSQL"],
  },
  {
    company: "CADE",
    role: "Tutor @ University of Concepción",
    duration: "March 2022 - December 2022",
    responsibilities: [
      "Tutored and provided academic support to a group of 5 students.",
      "Answered questions and led educational activities.",
      "Prepared monthly reports on students' academic progress.",
    ],
    technologies: null,
  },
];
