import gitIcon from "../../public/icons/git.svg";
import githubIcon from "../../public/icons/github.svg";
import flutterIcon from "../..//public/icons/flutter.svg";
import reactIcon from "../../public/icons/react.svg";
import vueIcon from "../../public/icons/vue.svg";
import jsIcon from "../../public/icons/javascript.svg";
import tsIcon from "../../public/icons/typescript.svg";
import railsIcon from "../../public/icons/rails.svg";
import postgresIcon from "../../public/icons/postgresql.svg";
import pythonIcon from "../../public/icons/python.svg";
import cssIcon from "../../public/icons/css.svg";
import htmlIcon from "../../public/icons/html.svg";
import type { ImageMetadata } from "astro";

export interface Tech {
  icon: ImageMetadata;
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}

export const techs: Tech[] = [
  {
    icon: gitIcon,
    name: { en: "Git", es: "Git" },
    description: { en: "Version Control", es: "Control de Versiones" },
  },
  {
    icon: githubIcon,
    name: { en: "GitHub", es: "GitHub" },
    description: { en: "Repositories", es: "Repositorios" },
  },
  {
    icon: flutterIcon,
    name: { en: "Flutter", es: "Flutter" },
    description: { en: "Professional Practice", es: "Práctica Profesional" },
  },
  {
    icon: reactIcon,
    name: { en: "React", es: "React" },
    description: { en: "Title Thesis", es: "Memoria de Título" },
  },
  {
    icon: vueIcon,
    name: { en: "Vue", es: "Vue" },
    description: { en: "Working at Eskuad", es: "Trabajando en Eskuad" },
  },
  {
    icon: jsIcon,
    name: { en: "JavaScript", es: "JavaScript" },
    description: { en: "Title Thesis", es: "Memoria de Título" },
  },
  {
    icon: tsIcon,
    name: { en: "TypeScript", es: "TypeScript" },
    description: {
      en: "Applied to Personal Projects",
      es: "Aplicado a Proyectos Personales",
    },
  },
  {
    icon: railsIcon,
    name: { en: "Ruby on Rails", es: "Ruby on Rails" },
    description: { en: "Personal Project", es: "Proyecto Personal" },
  },
  {
    icon: postgresIcon,
    name: { en: "PostgreSQL", es: "PostgreSQL" },
    description: { en: "SME Database", es: "Base de datos Pyme" },
  },
  {
    icon: pythonIcon,
    name: { en: "Python", es: "Python" },
    description: { en: "Flask REST API", es: "Api Rest con Flask" },
  },
  {
    icon: cssIcon,
    name: { en: "CSS", es: "CSS" },
    description: { en: "Style and Design", es: "Estilo y Diseño" },
  },
  {
    icon: htmlIcon,
    name: { en: "HTML", es: "HTML" },
    description: { en: "Web Structure", es: "Estructura Web" },
  },
];
