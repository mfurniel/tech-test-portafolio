import gitIcon from "../../../public/icons/git.svg";
import githubIcon from "../../../public/icons/github.svg";
import flutterIcon from "../../../public/icons/flutter.svg";
import reactIcon from "../../../public/icons/react.svg";
import vueIcon from "../../../public/icons/vue.svg";
import jsIcon from "../../../public/icons/javascript.svg";
import tsIcon from "../../../public/icons/typescript.svg";
import railsIcon from "../../../public/icons/rails.svg";
import postgresIcon from "../../../public/icons/postgresql.svg";
import pythonIcon from "../../../public/icons/python.svg";
import cssIcon from "../../../public/icons/css.svg";
import htmlIcon from "../../../public/icons/html.svg";
import type { ImageMetadata } from "astro";

export interface Tech {
  name: string;
  icon: ImageMetadata;
  description: string;
}

export const techs: Tech[] = [
  { name: "Git", icon: gitIcon, description: "Version Control" },
  { name: "GitHub", icon: githubIcon, description: "Repositories" },
  {
    name: "Flutter",
    icon: flutterIcon,
    description: "Professional Internship",
  },
  { name: "React", icon: reactIcon, description: "Thesis Project" },
  { name: "Vue", icon: vueIcon, description: "Working at Eskuad" },
  { name: "JavaScript", icon: jsIcon, description: "Thesis Project" },
  {
    name: "TypeScript",
    icon: tsIcon,
    description: "Used in Personal Projects",
  },
  { name: "Ruby on Rails", icon: railsIcon, description: "Personal Project" },
  {
    name: "PostgreSQL",
    icon: postgresIcon,
    description: "Database for Small Business",
  },
  { name: "Python", icon: pythonIcon, description: "REST API with Flask" },
  { name: "CSS", icon: cssIcon, description: "Styling and Design" },
  { name: "HTML", icon: htmlIcon, description: "Web Structure" },
];
