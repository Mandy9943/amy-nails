"use client";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "nosotros",
        "servicios",
        "precios",
        "contacto",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMobileMenuOpen]);

  const slides = [
    {
      image:
        "http://atura.like-themes.com/wp-content/uploads/2021/12/SLIDE_01.jpg",
      smallText: "diseño de uñas",
      title: "ARTE EN MANICURA",
      description: "Estilos creativos. Siempre en tendencia. La mejor calidad.",
    },
    {
      image:
        "http://atura.like-themes.com/wp-content/uploads/2021/12/SLIDE_03.jpg",
      smallText: "diseño de uñas",
      title: "ARTE EN MANICURA",
      description: "Estilos creativos. Siempre en tendencia. La mejor calidad.",
    },
    {
      image:
        "http://atura.like-themes.com/wp-content/uploads/2021/12/SLIDE_04.jpg",
      smallText: "cuidado profesional",
      title: "SERVICIO EXPERTO",
      description: "Tratamientos de lujo para tus manos y uñas.",
    },
    // Add more slides as needed
  ];

  const VideoSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        if (sectionRef.current) {
          const scrolled = window.scrollY;
          const rate = scrolled * 0.5;
          sectionRef.current.style.backgroundPositionY = `${rate}px`;
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <section
        ref={sectionRef}
        className="relative h-[600px] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url(http://atura.like-themes.com/wp-content/uploads/2021/12/video_parallax.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform duration-300 group">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-[#C4A186]" />
            </div>
            <h2 className="font-cormorant text-3xl mt-8 mb-2">
              Ver nuestro video
            </h2>
            <p className="text-white/80 text-sm">Mira cómo trabajamos</p>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-light tracking-wide font-cormorant">
                amynails
                <span className="block text-sm text-[#C4A186] font-normal italic mt-[-5px]">
                  studio
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className={`text-black hover:text-[#C4A186] px-3 py-2 text-sm font-medium tracking-wide transition-colors border-b-2 
                  ${
                    activeSection === "inicio"
                      ? "border-[#C4A186] text-[#C4A186]"
                      : "border-transparent hover:border-[#C4A186]"
                  }`}
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className={`text-black hover:text-[#C4A186] px-3 py-2 text-sm font-medium tracking-wide transition-colors border-b-2 
                  ${
                    activeSection === "nosotros"
                      ? "border-[#C4A186] text-[#C4A186]"
                      : "border-transparent hover:border-[#C4A186]"
                  }`}
              >
                Nosotros
              </a>
              <a
                href="#servicios"
                className={`text-black hover:text-[#C4A186] px-3 py-2 text-sm font-medium tracking-wide transition-colors border-b-2 
                  ${
                    activeSection === "servicios"
                      ? "border-[#C4A186] text-[#C4A186]"
                      : "border-transparent hover:border-[#C4A186]"
                  }`}
              >
                Servicios
              </a>
              <a
                href="#precios"
                className={`text-black hover:text-[#C4A186] px-3 py-2 text-sm font-medium tracking-wide transition-colors border-b-2 
                  ${
                    activeSection === "precios"
                      ? "border-[#C4A186] text-[#C4A186]"
                      : "border-transparent hover:border-[#C4A186]"
                  }`}
              >
                Precios
              </a>
              <a
                href="#contacto"
                className={`text-black hover:text-[#C4A186] px-3 py-2 text-sm font-medium tracking-wide transition-colors border-b-2 
                  ${
                    activeSection === "contacto"
                      ? "border-[#C4A186] text-[#C4A186]"
                      : "border-transparent hover:border-[#C4A186]"
                  }`}
              >
                Contacto
              </a>
            </div>

            {/* Phone Number and Book Now */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="tel:2-851-018-36-28"
                className="text-sm text-black hover:text-[#C4A186] transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#C4A186]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                2-851-018-36-28
              </a>
              <a
                href="#book"
                className="bg-black text-white px-8 py-3 text-sm tracking-wide hover:bg-[#C4A186] transition-colors"
              >
                Reservar →
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-black hover:text-[#C4A186] focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black hover:text-[#C4A186]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="#inicio"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-black hover:text-[#C4A186] py-2 text-sm font-medium tracking-wide transition-colors border-b border-transparent hover:border-[#C4A186] ${
                activeSection === "inicio" ? "text-[#C4A186]" : ""
              }`}
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-black hover:text-[#C4A186] py-2 text-sm font-medium tracking-wide transition-colors border-b border-transparent hover:border-[#C4A186] ${
                activeSection === "nosotros" ? "text-[#C4A186]" : ""
              }`}
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-black hover:text-[#C4A186] py-2 text-sm font-medium tracking-wide transition-colors border-b border-transparent hover:border-[#C4A186] ${
                activeSection === "servicios" ? "text-[#C4A186]" : ""
              }`}
            >
              Servicios
            </a>
            <a
              href="#precios"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-black hover:text-[#C4A186] py-2 text-sm font-medium tracking-wide transition-colors border-b border-transparent hover:border-[#C4A186] ${
                activeSection === "precios" ? "text-[#C4A186]" : ""
              }`}
            >
              Precios
            </a>
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-black hover:text-[#C4A186] py-2 text-sm font-medium tracking-wide transition-colors border-b border-transparent hover:border-[#C4A186] ${
                activeSection === "contacto" ? "text-[#C4A186]" : ""
              }`}
            >
              Contacto
            </a>
          </div>

          {/* Mobile Book Now Button */}
          <div className="mt-8">
            <a
              href="#book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-black text-white text-center px-4 py-3 text-sm tracking-wide hover:bg-[#C4A186] transition-colors"
            >
              Reservar →
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main id="inicio" className="relative">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-screen"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-center text-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                      <span className="block text-[#C4A186] text-8xl mb-4 font-greatVibes">
                        {slide.smallText}
                      </span>
                      <h2 className="text-white text-6xl sm:text-8xl font-light mb-6 font-cormorant tracking-wide">
                        {slide.title}
                      </h2>
                      <p className="text-white/90 text-lg mb-12 tracking-wide max-w-xl mx-auto">
                        {slide.description}
                      </p>
                      <a
                        href="#"
                        className="inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors tracking-wide"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Side Social Links */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
        </div>

        {/* Add left side social links */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-6 text-white">
          <a
            href="#"
            className="hover:text-[#C4A186] transition-colors tracking-wide text-sm vertical-text"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-[#C4A186] transition-colors tracking-wide text-sm vertical-text"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-[#C4A186] transition-colors tracking-wide text-sm vertical-text"
          >
            Pinterest
          </a>
        </div>
      </main>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-cormorant text-5xl mb-8 leading-tight">
                Estudio creativo de{" "}
                <span className="italic">manicura y pedicura</span> con
                servicios de máxima calidad para la{" "}
                <span className="italic">belleza de tus uñas</span>
              </h2>
              <p className="text-gray-600 mb-12">
                Vestibulum congue, sapien a sollicitudin euismod, lorem ex
                auctor arcu, eget convallis mauris nisl sagittis dui. Ut nec
                laoreet ante. Duis ultricies congue libero, et accumsan purus
                malesuada aptent taciti.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-cormorant text-6xl font-light">
                      18
                    </span>
                    <div className="text-sm text-gray-600 leading-tight">
                      Profesionales
                      <br />
                      expertos
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-cormorant text-6xl font-light">
                      265
                    </span>
                    <div className="text-sm text-gray-600 leading-tight">
                      Colores de
                      <br />
                      esmaltes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-[300px] sm:h-[400px]">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/about_01-736x1024.jpg"
                  alt="Nail design showcase"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-[300px] sm:h-[400px] mt-12">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/about_02-736x1024.jpg"
                  alt="Nail art showcase"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-[#FBF7F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Manicure */}
            <div className="flex flex-col items-center text-center">
              <div className="service-icon-wrapper mb-8">
                <svg
                  className="w-16 h-16 text-[#C4A186]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M20 6L16 4 12 6 8 4 4 6v12l4-2 4 2 4-2 4 2V6zM4 6v12M8 4v12M12 6v12M16 4v12M20 6v12" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-4">MANICURA</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                In cursus, neque a varius tempus, ante lorem dapibus urna, eu
                iaculis leo erat a est.
              </p>
            </div>

            {/* Pedicure */}
            <div className="flex flex-col items-center text-center">
              <div className="service-icon-wrapper mb-8">
                <svg
                  className="w-16 h-16 text-[#C4A186]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M18 5l-3-3H9L6 5m12 0H6m12 0v14H6V5M10 9h4m-4 4h4m-4 4h4" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-4">PEDICURA</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Aliquam condimentum sodales ultricies. Class aptent taciti
                sociosqu ad litora
              </p>
            </div>

            {/* Nail Care */}
            <div className="flex flex-col items-center text-center">
              <div className="service-icon-wrapper mb-8">
                <svg
                  className="w-16 h-16 text-[#C4A186]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-4">CUIDADO DE UÑAS</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Torquent per conubia eleifend nostra, per inceptos himenaeos.
              </p>
            </div>

            {/* Cosmetics */}
            <div className="flex flex-col items-center text-center">
              <div className="service-icon-wrapper mb-8">
                <svg
                  className="w-16 h-16 text-[#C4A186]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 2L8 6h8l-4-4zm-6 6h12v3H6V8zm0 5h12v3H6v-3zm0 5h12v3H6v-3z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-4">COSMÉTICOS</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Curabitur volutpat, magna augue nec loboris ultricies,
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="precios" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#C4A186] font-greatVibes text-3xl">
              nuestros precios
            </span>
            <h2 className="font-cormorant text-4xl mt-2">OFERTAS POPULARES</h2>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Regular Manicure */}
              <div className="flex items-center gap-6">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/price_01-110x110.jpg"
                  alt="Regular Manicure"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-cormorant text-xl">MANICURA REGULAR</h3>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="font-cormorant text-xl">$12</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    In nec faucibus sem, eu accumsan massa
                  </p>
                </div>
              </div>

              {/* Nail Extension */}
              <div className="flex items-center gap-6">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/price_02-150x150.jpg"
                  alt="Nail Extension"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-cormorant text-xl">
                      EXTENSIÓN DE UÑAS
                    </h3>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="font-cormorant text-xl">$32</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Interdum et malesuada fames ac ante ipsum primis
                  </p>
                </div>
              </div>

              {/* Nail Protection */}
              <div className="flex items-center gap-6">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/price_03-150x150.jpg"
                  alt="Nail Protection"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-cormorant text-xl">
                      PROTECCIÓN DE UÑAS
                    </h3>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="font-cormorant text-xl">$36</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Donec nunc tellus, euismod in diam vel
                  </p>
                </div>
              </div>

              {/* Hand Massage */}
              <div className="flex items-center gap-6">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/price_04-150x150.jpg"
                  alt="Hand Massage"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-cormorant text-xl">MASAJE DE MANOS</h3>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="font-cormorant text-xl">$28</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Phasellus iaculis est nec metus egestas sollicitudin.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Pedicure */}
              <div className="flex items-center gap-6">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/price_05-150x150.jpg"
                  alt="Pedicure"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-cormorant text-xl">PEDICURA</h3>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="font-cormorant text-xl">$24</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Maecenas euismod risus vitae tempus egesta
                  </p>
                </div>
              </div>

              {/* Skin Recovery */}
              <div className="flex items-center gap-6">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/price_06-150x150.jpg"
                  alt="Skin Recovery"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-cormorant text-xl">
                      TRATAMIENTO DE PIEL
                    </h3>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="font-cormorant text-xl">$16</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Fusce id leo nec eros laoreet pretium ut nec tellus.
                  </p>
                </div>
              </div>

              {/* Spa Care */}
              <div className="flex items-center gap-6">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/price_07-150x150.jpg"
                  alt="Spa Care"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-cormorant text-xl">CUIDADO SPA</h3>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="font-cormorant text-xl">$9</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Donec eu eros nec leo volutpat tincidunt ut et diam
                  </p>
                </div>
              </div>

              {/* Unique Design */}
              <div className="flex items-center gap-6">
                <img
                  src="http://atura.like-themes.com/wp-content/uploads/2021/12/price_08-150x150.jpg"
                  alt="Unique Design"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-cormorant text-xl">DISEÑO ÚNICO</h3>
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-4"></div>
                    <span className="font-cormorant text-xl">$19</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Vestibulum consectetur pharetra eros, quis sagittis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#C4A186] font-greatVibes text-3xl">
              testimonios
            </span>
            <h2 className="font-cormorant text-4xl mt-2">
              QUÉ DICEN NUESTROS CLIENTES
            </h2>
          </div>

          {/* Testimonials Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-slider max-w-4xl mx-auto"
          >
            <SwiperSlide>
              <div className="text-center px-8">
                <div className="mb-12">
                  <svg
                    className="w-16 h-16 text-[#C4A186] mx-auto opacity-20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                  </svg>
                </div>

                <p className="text-xl font-cormorant italic mb-12 max-w-2xl mx-auto">
                  Maecenas ultricies felis sit amet libero scelerisque, ut
                  eleifend leo mattis. Aliquam porta facilisis metus.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam id.
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src="http://atura.like-themes.com/wp-content/uploads/2019/06/testimonials-11-110x110.jpg"
                    alt="Client"
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <h3 className="font-cormorant text-xl">STEFANIE RASHFORD</h3>
                  <span className="text-sm text-gray-500">Top Coach</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-center px-8">
                <div className="mb-12">
                  <svg
                    className="w-16 h-16 text-[#C4A186] mx-auto opacity-20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                  </svg>
                </div>

                <p className="text-xl font-cormorant italic mb-12 max-w-2xl mx-auto">
                  Maecenas ultricies felis sit amet libero scelerisque, ut
                  eleifend leo mattis. Aliquam porta facilisis metus.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam id.
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src="http://atura.like-themes.com/wp-content/uploads/2019/06/testimonials-07-110x110.jpg"
                    alt="Client"
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <h3 className="font-cormorant text-xl">STEFANIE RASHFORD</h3>
                  <span className="text-sm text-gray-500">Top Coach</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative h-[600px]">
              <img
                src="http://atura.like-themes.com/wp-content/uploads/2021/12/promo-983x1024.jpg"
                alt="Manicure service"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="lg:pl-12">
              <span className="text-[#C4A186] font-greatVibes text-3xl">
                cita previa
              </span>
              <h2 className="font-cormorant text-5xl mt-2 mb-8">
                RESERVA TU HORA
                <br />
                PARA TU MANICURA
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Sed quam urna, facilisis eleifend ipsum vel, imperdiet tristique
                ante. Phasellus pretium dapibus gravida. Sed eu ligula
                hendrerit, venenatis eros in, vulputate diam.
              </p>
              <a
                href="#"
                className="inline-block bg-black text-white px-8 py-3 text-sm tracking-wide hover:bg-[#C4A186] transition-colors"
              >
                Reservar ahora →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-8">
              <h2 className="text-5xl font-light tracking-wide font-cormorant">
                amynails
                <span className="block text-3xl text-[#C4A186] font-normal italic mt-1 font-greatVibes">
                  studio
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 max-w-xl mb-12 text-xl">
              Mauris eget velit mauris. Suspendisse nec odio nec turpis
              malesuada vestibulum at vitae eros proin in ligula sed.
            </p>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors text-sm"
              >
                Artículos
              </a>
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors text-sm"
              >
                Servicios
              </a>
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors text-sm"
              >
                Preguntas
              </a>
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors text-sm"
              >
                Galería
              </a>
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors text-sm"
              >
                Contacto
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.281-.059 1.689-.073 4.948-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#C4A186] transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              Like-themes © All Rights Reserved - 2021 -{" "}
              <a
                href="#"
                className="text-[#C4A186] hover:text-white transition-colors"
              >
                Purchase
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
