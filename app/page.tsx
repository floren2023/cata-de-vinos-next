import HeroCarousel from "./components/carousel";
import SobreNosotros from "./components/sobre";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen font-sans">
      
      {/* 1. BARRA DE NAVEGACIÓN */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-neutral-100 luxury-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-xl font-serif tracking-widest font-bold text-neutral-900">
            RAÍCES & <span className="text-vino">VID</span>
          </div>
          <nav className="hidden md:flex font-[merienda] gap-8 text-sm uppercase tracking-wider font-medium text-neutral-600">
            <a href="#" className="hover:text-vino transition-colors text-vino">Inicio</a>
            <a href="#eventos" className="hover:text-vino transition-colors">Experiencias</a>
            <a href="#productos" className="hover:text-vino transition-colors">Nuestros Vinos</a>
            <a href="#sobre" className="hover:text-vino transition-colors">Sobre Nosotros</a>
          </nav>
          <button className="bg-vino hover:bg-vino-light text-white text-xs uppercase tracking-widest px-5 py-2.5 transition-colors font-medium">
            Reservar Cata
          </button>
        </div>
      </header>

      {/* 2. HERO (CARRUSEL) */}
      <main>
        <HeroCarousel />

        {/* 3. SECCIÓN DE EVENTOS */}
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

        {/* 4. VISTA PREVIA DE PRODUCTOS */}
        <section id="productos" className="bg-neutral-50 border-t border-b border-neutral-100 py-24">
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
                    <div className="w-full h-48 bg-neutral-100 mb-6 flex items-center justify-center text-vino/20 font-serif text-5xl">
                      
                      {/* //productos🍷 */}
                      <Image src={vino.image} alt={vino.nombre} width={200} height={120} className="h-48 w-1/2"/>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-vino font-bold">{vino.tipo}</span>
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

        {/* 5. VISTA PREVIA DE SOBRE NOSOSTROS */}
          <section id="sobre" className="bg-neutral-50 border-t border-b border-neutral-100 py-24">
              <SobreNosotros/>
          </section>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-vino text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif mb-3">Únete al club de los curiosos</h3>
            <p className="text-neutral-300 text-sm max-w-md font-light">
              Recibe invitaciones a catas privadas, lanzamientos clandestinos y acceso exclusivo a lotes muy limitados.
            </p>
          </div>
          <form className="flex w-full max-w-md md:ml-auto">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
              required 
            />
            <button type="submit" className="bg-white text-vino hover:bg-neutral-100 px-6 text-xs uppercase tracking-widest font-bold transition-colors">
              Unirse
            </button>
          </form>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 Raíces & Vid. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

    </div>
  );
}