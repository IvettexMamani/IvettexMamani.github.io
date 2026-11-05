export const siteConfig = {
  name: "Ivette Mamani Flores",
  title: "Contadora pública | Gestión pública | Análisis de datos",
  description:
    "Portafolio de Ivette Mamani Flores: contadora pública con experiencia en gestión pública, proyectos sociales y análisis de datos.",
  accentColor: "#0f766e",
  greeting: "¡Hola! 👋",
  intro: "Soy",
  photo: "medios/foto-ivette.png",
  photoAlt: "Ivette Mamani Flores frente al Big Ben, en Londres",
  labels: {
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    volunteering: "Voluntariado",
    education: "Educación",
    passions: "Pasiones",
    problem: "Problema",
    solution: "Solución",
    action: "Acción",
    result: "Resultado",
    rights: "Todos los derechos reservados.",
    template: "Plantilla DevPortfolio",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ivette-mamani-flores-b389b6260/",
    github: "https://github.com/IvettexMamani",
  },
  aboutMe:
    "Contadora con experiencia en gestión pública y proyectos sociales orientados al desarrollo de poblaciones vulnerables. Apasionada por la educación, el trabajo comunitario y el desarrollo social, busco aportar mis habilidades organizativas, humanas y de servicio en actividades que contribuyan a la formación integral de niñas y niños, promoviendo entornos inclusivos, seguros y con oportunidades para todos.",
  skillGroups: [
    {
      title: "Uso día a día",
      skills: [
        "Administración de contratos",
        "Gestión pública",
        "Contabilidad",
        "Investigación",
        "Python",
        "pandas",
        "Matplotlib",
        "Jupyter",
        "Git y GitHub",
        "Datos abiertos",
      ],
    },
    {
      title: "Estoy aprendiendo",
      skills: [
        "Claude Code",
        "Skills de agentes",
        "Servidores MCP",
        "Evaluación de modelos",
        "GeoPandas",
        "Rasterio",
        "Google Earth Engine",
        "R",
      ],
    },
  ],
  projects: [
    {
      name: "Incendios forestales en el Perú",
      description: "Cuánto se quemó, dónde y quién vive cerca del fuego.",
      link: "https://claude.ai/artifact/QPrUTk5QRi733F78JCNy58",
      linkLabel: "Abrir el monitor de incendios",
      skills: ["Python", "Google Earth Engine", "GeoPandas", "NASA FIRMS", "MODIS"],
      problem:
        "Los datos del fuego están repartidos entre satélites, reportes y normas. Sin cruzarlos no se sabe cuánto se quemó, en qué distritos ni quién vive cerca.",
      solution:
        "Un solo informe interactivo que une los focos de NASA FIRMS, el área quemada de MODIS, los 1 873 distritos del INEI y la población de WorldPop.",
      action:
        "Quité volcanes y fuentes fijas, crucé todo por distrito con Python y Google Earth Engine, calculé la población a 5 km de cada incendio activo y revisé la fecha de cada norma.",
      result: {
        figure: "41 000 ha",
        text: "quemadas de enero a agosto de 2026, el doble que en 2025. 61 481 personas viven a 5 km o menos de un incendio activo.",
      },
      media: {
        type: "video",
        src: "medios/reel.mp4",
        poster: "medios/reel-portada.jpg",
        alt: "Reel de 59 segundos con las cifras de los incendios forestales en el Perú en 2026",
        caption: "Reel de 59 s: guion, voz clonada y subtítulos con IA local, corregidos a mano.",
      },
      links: [
        { label: "Ver el monitor", url: "https://claude.ai/artifact/QPrUTk5QRi733F78JCNy58" },
        { label: "Ver el código", url: "https://github.com/IvettexMamani/Focos_calor_Peru" },
        { label: "Monitor colectivo", url: "https://alexanderquispe.github.io/incendios-peru" },
      ],
      note: "Datos al 21 de octubre de 2026. También aporté el marco normativo al monitor abierto que construimos 33 personas en Q-LAB PUCP.",
    },
    {
      name: "Skills ENAHO",
      description: "La encuesta de hogares del INEI, procesada siempre de la misma forma.",
      link: "https://github.com/IvettexMamani/Skills_enaho",
      linkLabel: "Abrir el repositorio de Skills ENAHO",
      skills: ["Python", "Claude Code", "Microdatos INEI", "Mapas"],
      problem:
        "Usar la ENAHO obliga a repetir los mismos pasos: bajar módulos, unir personas y hogares, ponderar. Un error en la limpieza cambia la cifra sin que nadie lo note.",
      solution:
        "Cuatro skills de Claude Code que descargan, limpian, grafican y mapean la encuesta. Se encadenan solas y los scripts también corren sin Claude.",
      action:
        "Documenté las decisiones de limpieza y seis trampas de la ENAHO, y agregué pruebas automáticas que comparan cada corrida con la cifra oficial.",
      result: {
        figure: "27.58 %",
        text: "de pobreza en 2024 frente al 27.6 % del INEI, y 29.05 % en 2023 frente al 29.0 %, con los 25 departamentos.",
      },
      media: {
        type: "image",
        src: "medios/mapa-pobreza.png",
        alt: "Mapa del Perú con la pobreza monetaria 2024 por departamento: Cajamarca 45.0 %, Loreto 42.6 %, Puno 40.4 %; Ica 5.9 %.",
        caption: "Mapa generado por la skill mapeando-enaho.",
      },
      links: [
        { label: "Ver el código", url: "https://github.com/IvettexMamani/Skills_enaho" },
        {
          label: "Ver cómo validé",
          url: "https://github.com/IvettexMamani/Skills_enaho/blob/main/.claude/skills/limpiando-enaho/reference.md",
        },
      ],
    },
    {
      name: "Obras públicas en vivo",
      description: "Cifras oficiales de inversión que la IA no encontraba por su cuenta.",
      link: "https://github.com/IvettexMamani/Proyecto_Obras",
      linkLabel: "Abrir el repositorio de Obras públicas",
      skills: ["Python", "MCP", "APIs públicas", "Evaluación de modelos"],
      problem:
        "Los datos de obras paralizadas viven en portales que cargan con JavaScript. La memoria de un modelo no los tiene y la búsqueda web recibe páginas vacías.",
      solution:
        "Un servidor MCP que conecta Claude Code con Invierte.pe (MEF) e INFOBRAS (Contraloría) para consultar datos en vivo, sin claves.",
      action:
        "Construí cinco herramientas, una propia que recorre todas las páginas de INFOBRAS, escribí 8 pruebas y comparé tres modos con 10 preguntas y cifras revisadas a mano.",
      result: {
        figure: "10 de 10",
        text: "aciertos con MCP; memoria y búsqueda web, 0 de 10. Lee en vivo las 1 217 obras paralizadas que registraba INFOBRAS el 28 de octubre de 2026.",
      },
      media: {
        type: "image",
        src: "medios/grafico-obras.png",
        alt: "Dos gráficos. Izquierda: de 10 preguntas, la memoria y la búsqueda web responden no sabe en las 10, y el MCP acierta las 10. Derecha: obras paralizadas por departamento, 1 217 en total, con Cusco 227, Puno 171 y Ayacucho 131.",
        caption: "Evaluación con Claude Haiku e INFOBRAS, 28 de octubre de 2026.",
      },
      links: [
        { label: "Leer el informe", url: "https://github.com/IvettexMamani/Proyecto_Obras/blob/main/informe.md" },
        { label: "Ver el código", url: "https://github.com/IvettexMamani/Proyecto_Obras" },
      ],
    },
  ],
  experience: [],
  volunteering: [
    {
      company: "Voluntariado Magis Tacna",
      title: "Voluntaria",
      dateRange: "mar. 2024 - actualidad",
      area: "Derechos civiles y acción social",
      bullets: [
        "Acompañamiento y apoyo escolar a niñas y adolescentes del hogar, en la Extensión San Alberto Hurtado",
        "Participación en actividades de integración, formación y servicio comunitario",
      ],
    },
    {
      company: "Programa Mundial de Alimentos (WFP)",
      title: "Voluntaria en línea",
      dateRange: "jul. 2025 - ago. 2025",
      area: "Salud",
      bullets: [
        "Orientación y acompañamiento a beneficiarios del proyecto PANTBC",
        "Parte del equipo de voluntariado en línea de Naciones Unidas, con certificado de participación",
      ],
    },
    {
      company: "Enséñame Voluntariado",
      title: "Voluntaria",
      dateRange: "ene. 2022 - feb. 2022",
      area: "Educación",
      bullets: [
        "Reforzamiento escolar personalizado a una niña, con sesiones virtuales semanales durante la pandemia",
        "Diseño de actividades de comunicación, matemáticas y habilidades socioemocionales",
      ],
    },
  ],
  education: [
    {
      school: "Pontificia Universidad Católica del Perú",
      degree: "Diplomado: Fundamentos de Python para Ciencias Sociales y Gestión Pública",
      dateRange: "2026",
      achievements: [],
    },
    {
      school: "Q-LAB PUCP",
      degree: "Data Science con Python",
      dateRange: "2026",
      achievements: [],
    },
    {
      school: "Universidad Privada de Tacna",
      degree: "Maestría en Innovación e Investigación Científica",
      dateRange: "sept. 2022 - sept. 2023",
      achievements: [],
    },
    {
      school: "Universidad Privada de Tacna",
      degree: "Contadora pública",
      dateRange: "ene. 2015 - jul. 2019",
      achievements: [],
    },
  ],
  passions: [
    { icon: "viajar", name: "Viajar", text: "Conocer lugares nuevos y volver con otra mirada." },
    { icon: "correr", name: "Correr", text: "Sumar kilómetros, sostener el ritmo y despejar la cabeza." },
    { icon: "deporte", name: "Hacer deporte", text: "Constancia, energía y ganas de seguir mejorando." },
    { icon: "pintar", name: "Pintar", text: "Mi lado creativo: color, paciencia y ojo para el detalle." },
  ],
};
