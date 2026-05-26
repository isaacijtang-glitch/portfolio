export interface Project {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  image?: string;
  pdf?: string;
  github?: string;
  demo?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  bio2: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  stats: { label: string; value: string }[];
  projects: Project[];
  skills: Record<string, string[]>;
}

const data: PortfolioData = {
  name: "Isaac Tang",
  role: "Architectural Engineer",
  tagline: "Where structure meets software.",
  bio: "I'm an Architectural Engineering student passionate about applying computational tools and software to structural design, building systems, and construction management.",
  bio2: "My work sits at the intersection of the built environment and modern technology — from BIM automation to structural analysis tools. I believe the future of AEC belongs to those who can speak both languages.",
  email: "isaac.ijtang@gmail.com",
  phone: "647-289-2621",
  github: "https://github.com/isaacijtang-glitch",
  linkedin: "https://www.linkedin.com/in/isaac-tang-4111b2346/",
  stats: [
    { label: "Projects Built", value: "12+" },
    { label: "Technologies", value: "15+" },
    { label: "Years Coding", value: "3+" },
  ],
  projects: [
    {
      title: "The Duo Den",
      slug: "duo-den",
      description:
        "A compact two-person tiny retreat designed to balance productivity and connection to nature. Features a skillion roof with zinc snap-lock standing seam, horizontal fibre cement cladding, rotating walnut louvers, and a flexible dual-layout interior on a continuous spread footing. Designed for the Tiny Retreat Project at the University of Waterloo (1A).",
      tech: ["AutoCAD", "Physical Modelling", "Site Analysis", "Material Research"],
      image: "/images/duo-den.jpg",
      pdf: "/pdfs/duo-den.pdf",
    },
    {
      title: "Structural Load Visualizer",
      slug: "structural-load-visualizer",
      description:
        "A web-based tool for visualizing structural load distributions from finite element models. Supports IFC import and exports annotated PDF reports.",
      tech: ["Python", "React", "D3.js", "Flask"],
      github: "#",
      demo: "#",
    },
    {
      title: "BIM Data Extractor",
      slug: "bim-data-extractor",
      description:
        "Automates extraction and QA reporting of building information from Revit models using the Revit API and pandas — cutting manual review time significantly.",
      tech: ["Python", "Revit API", "pandas", "openpyxl"],
      github: "#",
    },
    {
      title: "Energy Model Dashboard",
      slug: "energy-model-dashboard",
      description:
        "Interactive 3D visualization of building energy consumption and thermal performance from EnergyPlus simulations, with zone-level breakdowns and export.",
      tech: ["Three.js", "TypeScript", "EnergyPlus", "Vite"],
      github: "#",
      demo: "#",
    },
    {
      title: "CPM Scheduler",
      slug: "cpm-scheduler",
      description:
        "Critical Path Method scheduling tool using graph algorithms to optimize resource allocation and flag schedule risks on construction projects.",
      tech: ["Python", "React", "NetworkX", "FastAPI"],
      github: "#",
      demo: "#",
    },
  ],
  skills: {
    Languages: ["Python", "TypeScript", "JavaScript", "MATLAB", "C++"],
    "Web & Frameworks": ["React", "Node.js", "Three.js", "Flask", "FastAPI", "D3.js"],
    "AE Software": ["Revit", "AutoCAD", "SAP2000", "ETABS", "EnergyPlus", "Rhino"],
    Tools: ["Git", "Docker", "Linux", "Jupyter", "Figma", "Excel/VBA"],
  },
};

export default data;
