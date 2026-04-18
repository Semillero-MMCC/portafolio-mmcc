export interface Student {
  slug: string;
  name: string;
  logoName: string;       // ej: "sebas" para "sebas.devsec"
  logoSuffix: string;     // ej: ".devsec"
  role: string;
  description: string;
  bio: string;
  aboutImgAlt: string;
  yearsExperience: string;
  projectsCompleted: string;
  cvFile?: string;        // ruta al PDF del CV, ej: "/cv.pdf"
  github?: string;
  linkedin?: string;
  email?: string;
}

export const students: Student[] = [
  {
    slug: "sebastian-villa",
    name: "Sebastián Villa",
    logoName: "sebas",
    logoSuffix: ".devsec",
    role: "Software Developer & Cybersecurity Enthusiast",
    description: "Desarrollo aplicaciones seguras, modernas y escalables, combinando buenas prácticas de desarrollo con principios de ciberseguridad.",
    bio: `Soy desarrollador de software con interés en construir aplicaciones modernas y seguras, combinando desarrollo backend y principios de ciberseguridad.
    
Me enfoco en escribir código limpio, escalable y mantenible, integrando buenas prácticas de seguridad desde el diseño.
   
Actualmente estoy fortaleciendo mis conocimientos en ciberseguridad, análisis de vulnerabilidades y desarrollo seguro.`,
    aboutImgAlt: "Imagen Sebastián Villa - Sobre mí",
    yearsExperience: "2+",
    projectsCompleted: "10+",
    cvFile: "/cv.pdf",
    github: "https://github.com/SebastianVillaC",
    linkedin: "https://www.linkedin.com/in/sebastian-villa-c/",
    email: "sebasvilla106@gmail.com",
  },
  {
    slug: "estudiante-2",
    name: "Estudiante 2",
    logoName: "est2",
    logoSuffix: ".dev",
    role: "Frontend Developer",
    description: "Apasionado por el diseño de interfaces modernas y accesibles.",
    bio: "Desarrollador frontend enfocado en crear experiencias de usuario intuitivas y atractivas.",
    aboutImgAlt: "Imagen Estudiante 2 - Sobre mí",
    yearsExperience: "1+",
    projectsCompleted: "5+",
    github: "https://github.com",
  },
  {
    slug: "estudiante-3",
    name: "Estudiante 3",
    logoName: "est3",
    logoSuffix: ".backend",
    role: "Backend Developer",
    description: "Enfocado en arquitecturas escalables y seguras.",
    bio: "Desarrollador backend con experiencia en APIs REST y bases de datos.",
    aboutImgAlt: "Imagen Estudiante 3 - Sobre mí",
    yearsExperience: "1+",
    projectsCompleted: "3+",
    github: "https://github.com",
  },
];
