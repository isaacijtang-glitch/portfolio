export interface PdfEntry {
  src: string;
  label: string;
  description?: string;
  narrow?: boolean;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  image?: string;
  sketch?: string;
  gallery?: string[];
  video?: string;
  pdfs?: PdfEntry[];
  github?: string;
  demo?: string;
}

export interface Experience {
  role: string;
  company: string;
  website?: string;
  logo?: string;
  logoWhite?: boolean;
  logoSize?: number;
  location: string;
  period: string;
  bullets: string[];
  tags?: string[];
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
  experiences: Experience[];
  projects: Project[];
  skills: Record<string, string[]>;
}

const data: PortfolioData = {
  name: "Isaac Tang",
  role: "Architectural Engineer",
  tagline: "Design. Build. Learn.",
  bio: "I like making things. Studio models, technical drawings, something I've never tried before. I'm curious about a lot and still figuring out where that curiosity leads.",
  bio2: "My toolkit covers design and modelling software, creative tools, and some programming basics. No fixed destination yet. Just following what interests me and building skills along the way.",
  email: "isaac.ijtang@gmail.com",
  phone: "647-289-2621",
  github: "https://github.com/isaacijtang-glitch",
  linkedin: "https://www.linkedin.com/in/isaac-tang-4111b2346/",
  experiences: [
    {
      role: "Junior Mechanical Designer",
      company: "Metro Dock",
      website: "https://metrodock.com",
      logo: "/images/metro-dock-logo.png",
      logoWhite: true,
      location: "Toronto, ON",
      period: "Jan 2026 — Apr 2026",
      bullets: [
        "Produced technical drawings in AutoCAD for industrial loading dock equipment including dock levelers, truck restraints, and structural assemblies.",
        "Took and verified field and shop measurements to ensure design accuracy and alignment with real-world fabrication conditions.",
        "Supported 3D modelling and part design in SolidWorks, updating drawings based on engineering feedback and manufacturing requirements.",
        "Observed welding and assembly operations to build an understanding of design for manufacturability and production constraints.",
      ],
      tags: ["AutoCAD", "SolidWorks", "Technical Drawing", "Hand Measuring"],
    },
    {
      role: "Digital Media Producer",
      company: "Teens Conference, Ambassador's For Christ",
      website: "https://www.afccanada.org/",
      logo: "/images/ambassadors-for-christ-logo.png",
      logoSize: 44,
      location: "North York, ON",
      period: "Oct 2024 — Mar 2025",
      bullets: [
        "Shot photos and videos across a 500+ student event using Canon and Sony cameras with gimbals, covering sessions, candid moments, and key highlights.",
        "Conducted professional interviews with students, coaches, and staff, handling scripting, lighting setup, and camera angles.",
        "Edited and produced recap videos using DaVinci Resolve and Adobe Lightroom, shared on social media to boost engagement.",
        "Created additional engagement content including quick mic interviews and fun day-of videos to keep the audience active on social media.",
      ],
      tags: ["Canon", "Sony", "DaVinci Resolve", "Adobe Lightroom", "Photography", "Videography"],
    },
  ],
  projects: [
    {
      title: "The Duo Den",
      slug: "duo-den",
      description:
        "A compact two-person tiny retreat designed to balance productivity and connection to nature. Features a skillion roof with zinc snap-lock standing seam, horizontal fibre cement cladding, rotating walnut louvers, and a flexible dual-layout interior on a continuous spread footing. Designed for the Tiny Retreat Project at the University of Waterloo (1A).",
      tech: ["AutoCAD", "SketchUp", "Physical Modelling", "Site Analysis", "Material Research", "Fenestration Research", "Comparative Analysis"],
      image: "/images/duo-den.jpg",
      gallery: [
        "/images/duo-den.jpg",
        "/images/duo-den-2.jpg",
        "/images/duo-den-3.jpg",
      ],
      pdfs: [
        {
          src: "/pdfs/duo-den.pdf",
          label: "Drawing Set & Documentation",
          description: "Full architectural drawing set including plans, sections, elevations, and construction details for the Duo Den tiny retreat.",
        },
        {
          src: "/pdfs/duo-den-narrative.pdf",
          label: "Design Narrative",
          description: "Design narrative covering precedent studies, research report conclusions, material decisions, and the conceptual framework behind the Duo Den.",
        },
        {
          src: "/pdfs/windows-research.pdf",
          label: "Fenestration Research",
          description: "Research report investigating window systems, glazing performance, and daylighting strategies for compact residential structures.",
          narrow: true,
        },
      ],
    },
    {
      title: "Tower Design-Build",
      slug: "structural-design-build",
      description:
        "Designed and built a balsa wood structure to support a 225g steel ball between 750mm and 850mm above the base, using only balsa sticks, thread, and glue. The design focused on efficient load paths, member stability, and material efficiency. Ranked against peers on structural efficiency. Currently extending the project at 1:50 scale, detailing structural connections through hand sketches and Rhino 3D modelling. Completed as part of AE 125 at the University of Waterloo.",
      tech: ["Structural Analysis", "Physical Modelling", "Load Path Design", "Technical Writing", "Rhino", "Connection Design"],
      pdfs: [
        {
          src: "/pdfs/connection-drawings.pdf",
          label: "Connection Drawings",
          description: "Hand sketched orthographic drawings detailing three structural connections at 1:5 scale, developed after reconceiving the tower at 1:50 scale. Includes the tower foundation connection and two other critical joints.",
        },
        {
          src: "/pdfs/structural-design-build.pdf",
          label: "Structural Analysis & Tower Documentation",
          description: "Covers the structural concept of the tower, load path sketch, model photos, and a breakdown of how individual members work in compression, tension, and bending to support the applied load.",
        },
      ],
    },
    {
      title: "Swivel Plate Cart Caster",
      slug: "caster-plate",
      description:
        "Technical analysis and hand drafting of a swivel plate cart caster, following engineering drawing standards. Involved reverse engineering the object, studying its components, and producing a complete multi-view drawing set. First project at the University of Waterloo.",
      tech: ["Technical Drawing", "Object Analysis", "Engineering Standards"],
      pdfs: [
        {
          src: "/pdfs/caster-plate.pdf",
          label: "Drawing Set",
          description: "Hand-drafted multi-view technical drawing of the swivel plate cart caster produced to engineering drawing standards.",
          narrow: true,
        },
      ],
    },
    {
      title: "Rube Goldberg Machine",
      slug: "rube-goldberg",
      description:
        "Designed and built a multi-step Rube Goldberg machine, engineering each stage from concept to assembly. Handled component design, step sequencing, and structural assembly while working through the physics behind each reaction including momentum transfer, collisions, pulley mechanics, and energy conversion. Every step was calculated and intentional.",
      tech: ["Physical Prototyping", "Engineering Design", "Physics", "Mechanical Design"],
      sketch: "/images/rgm-sketch.jpg",
      gallery: [
        "/images/rgm-1.jpg",
        "/images/rgm-2.jpg",
        "/images/rgm-3.jpg",
        "/images/rgm-4.jpg",
        "/images/rgm-5.jpg",
        "/images/rgm-6.jpg",
        "/images/rgm-7.png",
      ],
      video: "/videos/rube-goldberg.mov",
    },
    {
      title: "Rift Coach",
      slug: "rift-coach",
      description:
        "An AI-powered League of Legends coaching tool built for beginners. Gives real-time audio cues for map events like enemy vision and objective timers, recommends runes and items based on the current game scenario rather than static tier lists, and guides players through champion combos and win conditions. The scenario-based build system is what sets it apart, helping players actually understand why they build what they build, not just copy a spreadsheet. Coming soon.",
      tech: ["Python", "Claude API", "League Client API", "Text-to-Speech"],
    },
  ],
  skills: {
    "Design & Modelling": ["AutoCAD", "Revit", "Rhino", "SolidWorks", "SketchUp"],
    "Creative Tools": ["Figma", "Adobe Photoshop", "Lightroom", "Illustrator"],
    "Productivity": ["Excel", "Google Workspace"],
    "Programming": ["JavaScript", "MATLAB", "Node.js"],
    "Fabrication": ["Creality Cloud (3D Printing)"],
    "Languages": ["English", "French"],
  },
};

export default data;
