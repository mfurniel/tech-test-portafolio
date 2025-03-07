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
  name: string;
  icon: ImageMetadata;
  description: string;
}

export const techs: Tech[] = [
  { name: "Git", icon: gitIcon, description: "Control de Versiones" },
  { name: "GitHub", icon: githubIcon, description: "Repositorios" },
  { name: "Flutter", icon: flutterIcon, description: "Práctica Profesional" },
  { name: "React", icon: reactIcon, description: "Memoria de Título" },
  { name: "Vue", icon: vueIcon, description: "Trabajando en Eskuad" },
  { name: "JavaScript", icon: jsIcon, description: "Memoria de Título" },
  {
    name: "TypeScript",
    icon: tsIcon,
    description: "Aplicado a Proyectos Personales",
  },
  { name: "Ruby on Rails", icon: railsIcon, description: "Proyecto Personal" },
  { name: "PostgreSQL", icon: postgresIcon, description: "Base de datos Pyme" },
  { name: "Python", icon: pythonIcon, description: "Api Rest con Flask" },
  { name: "CSS", icon: cssIcon, description: "Estilo y Diseño" },
  { name: "HTML", icon: htmlIcon, description: "Estructura Web" },
];
