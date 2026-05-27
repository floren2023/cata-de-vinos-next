'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  bgClass: string; // Clases de Tailwind para simular fondos (puedes cambiarlas por imágenes reales)
  image:string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Historias que se cuentan en una copa",
    subtitle: "Vive catas de vino clandestinas y eventos gastronómicos diseñados para los paladares más curiosos.",
    cta: "Ver Próximos Eventos",
    bgClass: "bg-neutral-900",
    image:"/images/image4.webp",
  },
  {
    id: 2,
    title: "El lado más original del vino español",
    subtitle: "Descubre bodegas de autor, variedades recuperadas y joyas ocultas de nuestra tierra.",
    cta: "Explorar la Colección",
    bgClass: "bg-neutral-800",
    image:"/images/image2.webp",
  },
  {
    id: 3,
    title: "Mucho más que una degustación",
    subtitle: "Maridajes artísticos, música en vivo y la guía de sumilleres apasionados.",
    cta: "Reservar una Experiencia",
    bgClass: "bg-vino-dark",
    image:"/images/image3.webp",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay opcional cada 6 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden text-white">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col justify-center items-center px-6 text-center transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${slide.bgClass}`}
        >
          {/* Overlay oscuro para asegurar contraste */}
          <div className="absolute inset-0 bg-black/40 -z-10 " />
          
          <div className='mt-0 h-125 w-full flex'>
          
            <div className='w-full'>
               <Image src= {slide.image} alt="image slider" fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: 'cover' }} />

            </div>
           
          </div>
          <div className='-mt-110 z-50 bg-light text-center '>
          <h1 className="text-4xl md:text-6xl 
          font-serif max-w-4xl font-light mb-4 leading-tight text-white text-shadow-md
           shadow-gray-200">
            {slide.title}
          </h1>
          <div className="bg-neutral-800  p-2 text-lg font-mediun md:text-xl max-w-2xl text-red-100 mb-8  text-center mx-auto">
            {slide.subtitle}
          </div>
          <button className="bg-vino hover:bg-vino-light font-[merienda] text-white px-8 py-3 rounded-none uppercase tracking-widest text-sm transition-colors duration-300 shadow-lg">
            {slide.cta}
          </button>
        </div>
        </div>
      ))}

      {/* Controles: Flechas */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-vino/80 transition-colors rounded-full"
        aria-label="Anterior diapositiva"
      >
        ←
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-vino/80 transition-colors rounded-full"
        aria-label="Siguiente diapositiva"
      >
        →
      </button>

      {/* Indicadores (Puntitos) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-vino scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}