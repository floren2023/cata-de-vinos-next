"use client"
import React, { useState } from 'react';

export const HeroNavigation = () => {
  // Estado para controlar la apertura del menú móvil
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-neutral-100 luxury-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-xl font-serif tracking-widest font-bold text-neutral-900">
          RAÍCES & <span className="text-vino">VID</span>
        </div>

        {/* NAVEGACIÓN DESKTOP (Se oculta en móviles/tablets con 'hidden', aparece en 'md:flex') */}
        <nav className="hidden md:flex font-[merienda] gap-8 text-sm uppercase tracking-wider font-medium text-neutral-600">
          <a href="#" className="hover:text-vino transition-colors text-vino">Inicio</a>
          <a href="#eventos" className="hover:text-vino transition-colors">Experiencias</a>
          <a href="#ofertas" className="hover:text-vino transition-colors">Selección</a>
          <a href="/products" className="hover:text-vino transition-colors">Nuestros Vinos</a>
          <a href="#sobre" className="hover:text-vino transition-colors">Sobre Nosotros</a>
        </nav>

        {/* BOTÓN ACCIÓN DESKTOP (Visible solo de pantallas medianas en adelante) */}
        <div className="hidden md:block">
          <button className="bg-vino hover:bg-vino-light text-white text-xs uppercase tracking-widest px-5 py-2.5 transition-colors font-medium">
            Reservar Cata
          </button>
        </div>

        {/* BOTÓN HAMBURGUESA (Visible en móvil/tablet con 'block', se oculta en desktop con 'md:hidden') */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleMenu}
            type="button"
            className="text-neutral-700 hover:text-vino focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Icono de Cerrar (X)
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono de Hamburguesa (☰)
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* DESPLEGABLE MÓVIL Y TABLET (Se activa condicionalmente) */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 border-b border-neutral-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col bg-white px-6 pt-2 pb-6 gap-4 font-[merienda] text-sm uppercase tracking-wider font-medium text-neutral-600">
          <a href="#" onClick={() => setIsOpen(false)} className="py-2 hover:text-vino transition-colors text-vino">Inicio</a>
          <a href="#eventos" onClick={() => setIsOpen(false)} className="py-2 hover:text-vino transition-colors">Experiencias</a>
          <a href="#ofertas" onClick={() => setIsOpen(false)} className="py-2 hover:text-vino transition-colors">Selección</a>
          <a href="/products" onClick={() => setIsOpen(false)} className="py-2 hover:text-vino transition-colors">Nuestros Vinos</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="py-2 hover:text-vino transition-colors">Sobre Nosotros</a>
          
          {/* Botón de acción integrado en el menú móvil */}
          <button className="mt-4 w-full bg-vino hover:bg-vino-light text-white text-xs uppercase tracking-widest py-3 transition-colors font-medium text-center">
            Reservar Cata
          </button>
        </nav>
      </div>
    </header>
  );
};

