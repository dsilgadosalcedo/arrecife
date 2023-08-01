const cards = [
  {
    title: "La Mapzone",
    description: "Explora el planeta en mapas.",
    url: "#",
    image: "/icons/resources-icon.svg",
    firstColor:"from-cold-400",
    secondColor:"to-cold-600",
  },
  {
    title: "Tratamientos",
    description: "Las Tools para el tratamiento de suelos y agua.",
    url: "#",
    image: "/icons/pollution-icon.svg",
    firstColor:"from-white",
    secondColor:"to-gray-800",
  },
  {
    title: "Ecosistemas",
    description: "Tejidos vivos interconectados en equilibrio.",
    url: "#",
    image: "/icons/ecosystems-icon.svg",
    firstColor:"from-cold-400",
    secondColor:"to-[#42cc80]",
  },
  {
    title: "Clima",
    description: "Entre el equilibrio y el caos.",
    url: "#",
    image: "/icons/climate-icon.svg",
    firstColor:"from-white",
    secondColor:"to-cold-400",
  },
  
  {
    title: "Residuos",
    description: "Manejo integral de residuos aquí.",
    url: "#",
    image: "/icons/waste-icon.svg",
    firstColor:"from-[#42cc80]",
    secondColor:"to-[#105136]",
  },
]   

export function getTools() {
  return cards;
}
