import { Handshake, MessageCircle, Award, CreditCard } from "lucide-react";

export const navLinks = [
  { name: "Packs", href: "#packs" },
  { name: "Catalogue", href: "#catalog" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

// --- LES 3 PACKS ---
export const packs = [
  {
    id: 1,
    name: "Pack Piccolo (50 pers)",
    price: "75€",
    deposit: "225€",
    duration: "/24h",
    capacity: "Jusqu'à 50 personnes",
    description: "L'option 100% autonome sur batterie. Idéal pour l'extérieur.",
    image: "/soundboks.jpg",
    features: [
      { text: "1x Enceinte SOUNDBOKS 3" },
      { text: "Sur batterie (autonomie 40h)" },
      { text: "Connexion Bluetooth immédiate" },
      { text: "Volume max : 126 dB" },
    ],
    highlight: false,
  },
  {
    id: 2,
    name: "Pack Medio (100 pers)",
    price: "100€",
    deposit: "300€",
    duration: "/24h",
    capacity: "50 - 100 personnes",
    description: "Le système 2.1 élégant et puissant pour mariages.",
    image: "/elo.jpg",
    features: [
      { text: "Système Elo 800C (800W RMS)" },
      { text: "1 Caisson de basse + 2 Satellites" },
      { text: "Pieds et câbles inclus" },
      { text: "Rendu sonore clair et précis" },
    ],
    highlight: true, // Mis en avant
  },
  {
    id: 3,
    name: "Pack Successo (250 pers)",
    price: "225€",
    deposit: "675€",
    duration: "/24h",
    capacity: "100 - 250 personnes",
    description: "La puissance pure pour faire trembler les murs.",
    image: "/pack-250.jpg", // L'image renommée
    features: [
      { text: "Système EV Pro" },
      { text: "2 Têtes EV 1200W" },
      { text: "1 Caisson de basse EV 1500W" },
      { text: "Pieds et câblage complet inclus" },
    ],
    highlight: false,
  },
];

// --- CATEGORIES DU CATALOGUE ---
export const catalogCategories = ["Enceintes", "Lumières", "Platines DJ"];

// --- CATALOGUE À L'UNITÉ ---
export const catalogItems = [
  // --- ENCEINTES ---
  {
    id: 101,
    category: "Enceintes",
    name: "Soundboks 3",
    price: "75€",
    deposit: "225€",
    image: "/soundboks.jpg",
    desc: "Enceinte Bluetooth performance sur batterie.",
  },
  {
    id: 102,
    category: "Enceintes",
    name: "Système Elo 800C",
    price: "100€",
    deposit: "300€",
    image: "/elo.jpg",
    desc: "Kit 2.1 complet (Caisson + 2 Têtes). 800W RMS.",
  },
  {
    id: 103,
    category: "Enceintes",
    name: "Caisson EV 1500W",
    price: "70€",
    deposit: "210€",
    image: "/ev-sub.jpg",
    desc: "Electro-Voice ELX 118P. Des basses profondes.",
  },
  {
    id: 104,
    category: "Enceintes",
    name: "Tête EV 1000W",
    price: "75€",
    deposit: "225€",
    image: "/ev-tete.jpg",
    desc: "Electro-Voice ZLX 15BT. Puissance et clarté vocale.",
  },

  // --- LUMIÈRES ---
  {
    id: 201,
    category: "Lumières",
    name: "Lyre Spot 150W",
    price: "40€",
    deposit: "120€",
    image: "/lyre.png",
    desc: "Projecteur robotisé avec gobos et prismes.",
  },
  {
    id: 202,
    category: "Lumières",
    name: "Barre LED Party",
    price: "80€",
    deposit: "240€",
    image: "/barre-led.png",
    desc: "4 projecteurs PAR sur pied. Synchronisation musicale.",
  },
  {
    id: 203,
    category: "Lumières",
    name: "Laser Show 50W",
    price: "10€",
    deposit: "30€",
    image: "/laser.avif",
    desc: "Effets tunnels et ciels étoilés impressionnants.",
  },

  // --- PLATINES ---
  {
    id: 301,
    category: "Platines DJ",
    name: "Pioneer FLX 4",
    price: "40€",
    deposit: "120€",
    image: "/flx4.jpg",
    desc: "Contrôleur 2 voies idéal pour débuter. Compatible Rekordbox.",
  },
  {
    id: 302,
    category: "Platines DJ",
    name: "Pioneer XDJ-RX2",
    price: "100€",
    deposit: "300€",
    image: "/rx2.jpg",
    desc: 'La référence Autonome (All-in-one). Écran tactile 7".',
  },
];

export const featuresList = [
  {
    icon: Handshake,
    title: "Matériel Pro",
    desc: "Pioneer, Electro-Voice, Soundboks.",
  },
  {
    icon: MessageCircle,
    title: "Conseil Expert",
    desc: "On vous guide selon votre lieu.",
  },
  {
    icon: Award,
    title: "Service Premium",
    desc: "Livraison & Installation possibles.",
  },
  {
    icon: CreditCard,
    title: "Paiement Simple",
    desc: "Tarifs clairs et cautions sécurisées.",
  },
];
