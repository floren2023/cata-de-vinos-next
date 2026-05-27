import Image from 'next/image';

export default function SobreNosotros() {
  const pilares = [
    {
      titulo: "Bodegas de Autor",
      descripcion: "Trabajamos mano a mano con pequeños viticultores que miman cada cepa, rescatando la autenticidad frente a la producción masiva."
    },
    {
      titulo: "Variedades Recuperadas",
      descripcion: "Apostamos por la biodiversidad del viñedo español, devolviendo a la vida uvas ancestrales casi olvidadas."
    },
    {
      titulo: "Respeto a la Tierra",
      descripcion: "Creemos en la viticultura sostenible y orgánica. Escuchamos al suelo, al clima y al ciclo natural de la vid."
    }
  ];

  return (
    <section id="nosotros" className="bg-[#FAF8F5] text-stone-800 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium block mb-2">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-wide">
            El Origen de Raíces & Vid
          </h2>
          <div className="w-16 h-[1px] bg-[#6A1B29] mx-auto mt-4"></div> {/* Detalle elegante color vino */}
        </div>

        {/* CONTENIDO PRINCIPAL: TEXTO E IMAGEN */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 text-base md:text-lg text-stone-600 font-light leading-relaxed">
            <p>
              <strong className="font-medium text-stone-900">Raíces & Vid</strong> nació de la pasión por el silencio de las bodegas subterráneas, el olor a roble y el carácter único que el suelo español imprime en cada racimo. 
            </p>
            <p>
              Nos dimos cuenta de que las joyas más grandes del vino español no se encuentran en los supermercados, sino en recónditos viñedos familiares, custodiados por viticultores que entienden el vino no como un negocio, sino como una herencia cultural.
            </p>
            <p>
              Nuestro propósito es tender un puente entre esas pequeñas bodegas de autor y los paladares que buscan algo más que un trago: buscan una historia, una tradición y un paisaje embotellado.
            </p>
          </div>

          {/* Imagen conceptual de barricas o viñedo viejo */}
          <div className="relative h-[450px] w-full rounded-sm overflow-hidden shadow-xl border border-stone-200">
            <Image 
              src="/images/image1.webp" // Cambiar por foto real de vuestra bodega/barricas
              alt="Barricas de vino en bodega artesanal" 
              fill
              className="object-cover filter grayscale-[10%]"
            />
          </div>
        </div>

        {/* PILARES / VALORES DE LA MARCA */}
        <div className="bg-white border border-stone-200/60 rounded-sm p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            {pilares.map((pilar, index) => (
              <div key={index} className={`pt-6 md:pt-0 ${index !== 0 ? 'md:pl-8' : ''}`}>
                <h3 className="text-xl font-serif text-[#6A1B29] mb-3 font-normal">
                  {pilar.titulo}
                </h3>
                <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
                  {pilar.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}