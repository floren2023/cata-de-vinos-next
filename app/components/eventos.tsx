import React from 'react'
// Datos estáticos tipados para los eventos
interface Evento {
  titulo: string;
  descripcion: string;
  fechaLugar: string;
  precio: string;
}

const proximosEventos: Evento[] = [
  {
    titulo: "Noches de Tinto & Jazz",
    descripcion: "Cata a ciegas de 4 tintos de autor maridados con quesos curados y jazz en vivo.",
    fechaLugar: "12 de Junio - Madrid",
    precio: "45€",
  },
  {
    titulo: "Joyas Ocultas del Atlántico",
    descripcion: "Descubrimiento de blancos originales y frescos de Galicia y Canarias.",
    fechaLugar: "19 de Junio - Barcelona",
    precio: "40€",
  },
  {
    titulo: "Vinos de Parcela y Fuego",
    descripcion: "Degustación de vinos de viticultura heroica y suelos volcánicos con maridaje ibérico.",
    fechaLugar: "03 de Julio - Valencia",
    precio: "50€",
  },
];

const Eventos = () => {
  return (
     <section id="eventos" className="max-w-7xl mx-auto px-6 py-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-vino mb-4">Próximas Experiencias</h2>
                <p className="text-neutral-500 max-w-md mx-auto">Explora nuestros eventos diseñados para conectar, aprender y disfrutar del vino sin pretensiones.</p>
              </div>
    
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200 text-xs uppercase tracking-wider text-neutral-400">
                      <th className="py-4 font-medium">Evento</th>
                      <th className="py-4 font-medium hidden md:table-cell">Descripción</th>
                      <th className="py-4 font-medium">Fecha / Lugar</th>
                      <th className="py-4 font-medium text-right">Precio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-sm">
                    {proximosEventos.map((evento, i) => (
                      <tr key={i} className="hover:bg-neutral-50 transition-colors group">
                        <td className="py-6 pr-4 font-serif text-lg text-neutral-900 group-hover:text-vino transition-colors">
                          {evento.titulo}
                        </td>
                        <td className="py-6 pr-4 text-neutral-500 hidden md:table-cell max-w-xs">
                          {evento.descripcion}
                        </td>
                        <td className="py-6 pr-4 text-neutral-600 font-medium">
                          {evento.fechaLugar}
                        </td>
                        <td className="py-6 text-right font-mono font-bold text-neutral-900">
                          {evento.precio}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-12">
                <button className="border border-vino text-vino hover:bg-vino hover:text-white px-6 py-3 transition-colors text-xs uppercase tracking-widest font-medium">
                  Ver Calendario Completo
                </button>
              </div>
            </section>
  )
}

export default Eventos