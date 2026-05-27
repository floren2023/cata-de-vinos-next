import React from 'react'
import Image from "next/image";

// Datos estáticos para los productos
interface Vino {
  nombre: string;
  tipo: string;
  descripcion: string;
  image:string;
}

const vinosSeleccionados: Vino[] = [
  {
    nombre: "El Rebelde",
    tipo: "D.O. Ribera del Duero",
    descripcion: "Un tinto de autor criado en tinajas de barro. Fruta explosiva, notas silvestres y toque mineral.",
    image:"/product/product1.jpg",
  },
  {
    nombre: "Alba Escondida",
    tipo: "D.O. Rías Baixas",
    descripcion: "Albariño con crianza sobre lías que rompe moldes. Notas de manzana asada, panadería y salinidad pura.",
     image:"/product/product2.jpg",
  },
  {
    nombre: "Volcán de Arcilla",
    tipo: "D.O. Gran Canaria",
    descripcion: "Un tinto ancestral de variedades canarias de pie franco. Ahumado, salvaje y absolutamente delicioso.",
    image:"/product/product3.jpg",
  }, 
   {
    nombre: "Bartocs",
    tipo: "D.O. Gran Canaria",
    descripcion: "Un tinto ancestral de variedades canarias de pie franco. Ahumado, salvaje y absolutamente delicioso.",
    image:"/product/product4.jpg",
  }, 
];
export const Ofertas = () => {
  return (
    <section id="ofertas" className="bg-neutral-50 border-t border-b border-neutral-100 py-24">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif text-vino mb-4">La Selección Original</h2>
                  <p className="text-neutral-500 max-w-lg mx-auto">Vinos deliciosos y poco convencionales de origen español que desafían las reglas comerciales.</p>
                </div>
    
                <div className="grid md:grid-cols-4 gap-6">
                  {vinosSeleccionados.map((vino, i) => (
                    <div key={i} className="bg-white border border-neutral-200/60 p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                      <div>
                        {/* Marcador de posición visual para la botella */}
                        <div className="relative w-full h-48 md:h-64 bg-neutral-100 mb-6 flex items-center justify-center text-vino/20 font-serif text-5xl">
                          
                          {/* //ofertas🍷 */}
                          <Image src={vino.image} alt={vino.nombre} fill
              sizes="(max-w-768px) 100vw, (max-w-400px) 50vw, 33vw"
              className="object-cover"
              priority={true}/>
                        </div>
                        <span className="text-xs uppercase tracking-widest mb-4 ml-4 text-vino font-bold bg-gray-200 mx-auto text-center">{vino.tipo}</span>
                        <h3 className="text-xl font-serif text-neutral-900 mt-2 mb-3">{vino.nombre}</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">{vino.descripcion}</p>
                      </div>
                      <button className="mt-8 text-xs uppercase tracking-widest font-bold text-neutral-900 hover:text-vino text-left transition-colors">
                        Probar en Evento →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
  )
}

