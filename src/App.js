import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Truck,
  Check,
  Info,
  Calendar,
  CreditCard,
  Lock,
  Apple,
  Star,
  Quote,
} from "lucide-react";
import {
  navLinks,
  packs,
  featuresList,
  catalogItems,
  catalogCategories,
} from "./data";

// --- ANIMATIONS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// --- DONNÉES AVIS CLIENTS (NOUVEAU) ---
const reviews = [
  {
    id: 1,
    name: "Thomas & Sarah",
    event: "Mariage au Domaine de Ronsac",
    text: "Nous avons loué le pack 250 personnes pour notre mariage. Le son était cristallin du cocktail jusqu'au bout de la nuit. L'équipe a géré l'installation pendant qu'on se préparait, zéro stress. Merci !",
    stars: 5,
  },
  {
    id: 2,
    name: "Julien M.",
    event: "Anniversaire 30 ans",
    text: "J'ai pris le pack Medio + quelques lumières. Rapport qualité/prix imbattable sur Toulouse. Le matériel est en état neuf, ça change des loueurs habituels. Je recommande les yeux fermés.",
    stars: 5,
  },
  {
    id: 3,
    name: "Agence Événementielle 'Impact'",
    event: "Soirée d'entreprise Airbus",
    text: "Crescendo est devenu notre partenaire de confiance. Réactivité, matériel pro (Pioneer/EV) et facturation claire. Une vraie solution pour les pros qui veulent de la qualité sans gérer la logistique.",
    stars: 5,
  },
];

// --- COMPOSANT MODAL DE RÉSERVATION ---
const BookingModal = ({ isOpen, onClose, product }) => {
  const [step, setStep] = useState(1); // 1: Date, 2: Info, 3: Paiement
  const [date, setDate] = useState(null);

  if (!isOpen || !product) return null;

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          <div className="bg-black text-white p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold font-serif">Réservation</h3>
              <p className="text-amber-500 text-sm">
                {product.name} - {product.price}
              </p>
            </div>
            <button
              onClick={onClose}
              className="hover:text-amber-500 transition"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto">
            {step === 1 && (
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="text-amber-600" /> Choisissez vos dates
                </h4>
                <p className="text-sm text-gray-500">
                  Connecté à Google Calendar : Les dates grisées sont
                  indisponibles.
                </p>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {["L", "M", "M", "J", "V", "S", "D"].map((d) => (
                    <div key={d} className="font-bold text-gray-400 py-2">
                      {d}
                    </div>
                  ))}
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => setDate(day)}
                      className={`py-3 rounded-lg font-medium transition ${
                        date === day
                          ? "bg-amber-600 text-white shadow-lg scale-105"
                          : "hover:bg-gray-100 text-slate-700 border border-gray-100"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    disabled={!date}
                    onClick={() => setStep(2)}
                    className={`px-8 py-3 rounded-full font-bold uppercase text-xs tracking-wider transition ${
                      date
                        ? "bg-black text-white hover:bg-slate-800"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Continuer
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                  <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="text-amber-600" /> Paiement sécurisé
                  </h4>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Total à payer</div>
                    <div className="text-2xl font-bold text-amber-600">
                      {product.price}
                    </div>
                  </div>
                </div>
                <button className="w-full bg-black text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition shadow-lg transform active:scale-95">
                  <Apple size={20} fill="white" />{" "}
                  <span className="font-medium text-lg">Pay</span>
                </button>
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">
                    Ou par carte
                  </span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Ceci est une démo !");
                  }}
                >
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      Numéro de carte
                    </label>
                    <div className="relative">
                      <CreditCard
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition bg-gray-50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                        Expiration
                      </label>
                      <input
                        type="text"
                        placeholder="MM / AA"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition bg-gray-50"
                      />
                    </div>
                  </div>
                  <button className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-amber-500 transition mt-4 shadow-lg shadow-amber-500/20">
                    Confirmer la réservation
                  </button>
                </form>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-400 text-xs underline w-full text-center hover:text-black"
                >
                  Retour au calendrier
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// --- COMPOSANTS DU SITE ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 glass-nav top-0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/logo-white.png"
              alt="Crescendo Musique"
              className="h-10 w-auto sm:h-12"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider text-white/80 hover:text-amber-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
    <div className="absolute inset-0 z-0 opacity-40">
      <img
        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
        alt="Event"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-4 mt-20">
      <motion.div initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
          <img
            src="/logo-white.png"
            alt="Crescendo"
            className="h-20 w-auto opacity-80"
          />
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif"
        >
          Location de matériel pour vos{" "}
          <span className="text-amber-500 italic">
            événements privés d'exception
          </span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
        >
          Sonorisation haut de gamme, éclairage architectural et régies DJ.
          Faites la différence à Toulouse et en Occitanie.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#packs" className="btn-accent">
            Voir les Packs
          </a>
          <a
            href="#catalog"
            className="px-8 py-3 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-black transition-all"
          >
            Catalogue à l'unité
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

const PacksSection = ({ onBook }) => (
  <section id="packs" className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black uppercase mb-4 font-serif">
          Nos Packs Clés en Main
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Des solutions complètes, testées et approuvées pour garantir la
          réussite de votre événement.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packs.map((pack) => (
          <div
            key={pack.id}
            className={`rounded-2xl overflow-hidden flex flex-col shadow-xl ${
              pack.highlight
                ? "ring-4 ring-amber-500 relative md:-mt-4 md:mb-4"
                : "border border-gray-200"
            }`}
          >
            {pack.highlight && (
              <div className="bg-amber-500 text-white text-center text-sm font-bold uppercase py-2 tracking-widest">
                Le plus populaire
              </div>
            )}
            <div className="h-56 bg-gray-100 relative overflow-hidden flex items-center justify-center p-4">
              <img
                src={pack.image}
                alt={pack.name}
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-black text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
              <div className="flex justify-center items-baseline gap-1">
                <span className="text-3xl font-extrabold text-amber-500">
                  {pack.price}
                </span>
                <span className="text-sm text-gray-400">{pack.duration}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1 flex items-center justify-center gap-1">
                <Info size={12} /> Caution : {pack.deposit}
              </div>
            </div>
            <div className="p-8 bg-white flex-grow flex flex-col justify-between">
              <div>
                <p className="text-gray-600 italic mb-6 text-sm text-center">
                  {pack.capacity} - {pack.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pack.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm font-medium text-gray-800"
                    >
                      <Check
                        size={18}
                        className="text-amber-500 mt-0.5 flex-shrink-0"
                      />{" "}
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onBook(pack)}
                className={`block w-full py-3 rounded-xl text-center font-bold tracking-widest transition-all uppercase text-sm ${
                  pack.highlight
                    ? "bg-amber-500 hover:bg-amber-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-black"
                }`}
              >
                Réserver ce pack
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-50 p-6 md:p-10 rounded-2xl border-2 border-amber-500/30 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left max-w-4xl mx-auto">
        <div className="bg-amber-500 p-4 rounded-full text-white shrink-0">
          <Truck size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif uppercase">
            Service Premium Inclus
          </h3>
          <p className="text-gray-600 font-medium">
            Livraison, installation technique et démontage{" "}
            <span className="text-amber-600 font-bold">OFFERTS</span> dans un
            rayon de 20km.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CatalogSection = ({ onBook }) => {
  const [activeTab, setActiveTab] = useState("Enceintes");
  const filteredItems = catalogItems.filter(
    (item) => item.category === activeTab
  );

  return (
    <section id="catalog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black uppercase mb-4 font-serif">
            Catalogue à l'unité
          </h2>
          <p className="text-gray-500">
            Composez votre configuration sur mesure.
          </p>
        </div>
        <div className="flex justify-center mb-10 space-x-2 sm:space-x-4">
          {catalogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                activeTab === cat
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition"
            >
              <div className="h-40 p-4 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-slate-900 truncate mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3 h-8 overflow-hidden">
                  {item.desc}
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xl font-extrabold text-amber-600">
                      {item.price}{" "}
                      <span className="text-xs font-normal text-gray-400">
                        /jour
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Caution: {item.deposit}
                    </div>
                  </div>
                  <button
                    onClick={() => onBook(item)}
                    className="bg-black text-white p-2 rounded-full hover:bg-amber-500 transition"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesBanner = () => (
  <section
    id="services"
    className="bg-black text-white py-20 relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          L'Excellence pour vos événements
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Nous ne louons pas seulement du matériel, nous vous accompagnons pour
          que la technique soit au service de votre fête.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
        {featuresList.map((item, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-amber-500 mb-6 shadow-lg group-hover:border-amber-500/50 transition-colors">
              <item.icon
                className="w-8 h-8 sm:w-10 sm:h-10"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-lg font-bold mb-3 font-serif">{item.title}</h3>
            <p className="text-gray-400 text-sm max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EventsSection = () => (
  <section className="py-0 bg-white">
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 bg-black text-white py-20 px-8 md:px-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
        <h3 className="text-3xl font-serif mb-6 text-amber-500 relative z-10">
          Particuliers
        </h3>
        <p className="text-gray-300 mb-10 max-w-md text-lg relative z-10 font-light leading-relaxed">
          Mariages, anniversaires de prestige, garden parties... Offrez à vos
          invités une qualité sonore et lumineuse digne des plus grands clubs.
        </p>
        <a
          href="#contact"
          className="relative z-10 border-2 border-amber-500 text-amber-500 px-8 py-3 uppercase text-sm tracking-widest font-bold hover:bg-amber-500 hover:text-white transition duration-300"
        >
          Demander un devis
        </a>
      </div>
      <div className="flex-1 bg-slate-50 text-black py-20 px-8 md:px-16 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-gray-200 relative overflow-hidden">
        <h3 className="text-3xl font-serif mb-6 relative z-10">
          Professionnels
        </h3>
        <p className="text-gray-600 mb-10 max-w-md text-lg relative z-10 font-light leading-relaxed">
          Séminaires, lancements de produits. Une logistique fiable et un
          matériel haut de gamme pour valoriser votre image de marque.
        </p>
        <a
          href="#contact"
          className="relative z-10 border-2 border-black text-black px-8 py-3 uppercase text-sm tracking-widest font-bold hover:bg-black hover:text-white transition duration-300"
        >
          Contact B2B
        </a>
      </div>
    </div>
  </section>
);

// --- SECTION AVIS CLIENTS (NOUVEAU) ---
const TestimonialsSection = () => (
  <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
    {/* Fond décoratif subtil */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Ce qu'ils disent de nous
        </h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl relative border border-slate-700 hover:border-amber-500/50 transition-colors"
          >
            <Quote className="absolute top-6 right-6 text-slate-700 w-10 h-10" />
            <div className="flex gap-1 text-amber-500 mb-4">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 italic">
              "{review.text}"
            </p>
            <div className="mt-auto border-t border-slate-700 pt-4">
              <p className="font-bold text-lg text-white">{review.name}</p>
              <p className="text-amber-500 text-sm font-medium">
                {review.event}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 w-full">
        <h2 className="text-4xl font-bold mb-4 font-serif">Contact Rapide</h2>
        <p className="text-gray-500 mb-8 text-lg">
          Une question spécifique ? Écrivez-nous.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold uppercase text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition"
                placeholder="Votre prénom"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition"
                placeholder="Votre nom"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold uppercase text-gray-700 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              required
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition"
              placeholder="email@exemple.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase text-gray-700 mb-2">
              Message
            </label>
            <textarea
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition"
              rows="4"
              placeholder="Votre demande..."
            ></textarea>
          </div>
          <button className="bg-black text-white px-12 py-4 uppercase font-bold text-sm tracking-widest mt-4 hover:bg-amber-500 transition-colors w-full sm:w-auto rounded-lg">
            Envoyer
          </button>
        </form>
      </div>
      <div className="flex-1 hidden md:block relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80"
          alt="DJ Setup"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white py-16 text-center border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <img
        src="/logo-white.png"
        alt="Crescendo"
        className="h-16 w-auto mx-auto mb-6 opacity-50"
      />
      <div className="font-playfair text-3xl font-bold mb-6">
        Crescendo <span className="text-amber-600">Musique</span>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 text-gray-400 text-sm uppercase tracking-wider font-medium">
        <a href="#packs" className="hover:text-white">
          Packs
        </a>
        <a href="#catalog" className="hover:text-white">
          Catalogue
        </a>
        <a href="#" className="hover:text-white">
          CGV
        </a>
      </div>
      <p className="text-gray-600 text-sm">
        Location de matériel de sonorisation et éclairage événementiel.
        <br />
        Toulouse & Occitanie.
      </p>
      <p className="text-gray-700 text-xs mt-8">
        © {new Date().getFullYear()} Crescendo Musique.
      </p>
    </div>
  </footer>
);

// --- MAIN APP ---
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBook = (product) => {
    setSelectedProduct(product);
    setIsBookingOpen(true);
  };

  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <PacksSection onBook={handleBook} />
      <CatalogSection onBook={handleBook} />
      <FeaturesBanner />
      <EventsSection />
      <TestimonialsSection /> {/* NOUVELLE SECTION ICI */}
      <ContactForm />
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        product={selectedProduct}
      />
    </main>
  );
}
