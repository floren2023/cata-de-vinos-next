import HeroCarousel from "./components/carousel";
import Eventos from "./components/eventos";
import { HeroNavigation } from "./components/hero";
import { Ofertas } from "./components/ofertas";
import SobreNosotros from "./components/sobre";
import Socios from "./components/socios";
import Testimonios from "./components/testimonios";



export default function Home() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen font-sans">
      

      {/* 2. HERO (CARRUSEL) */}
      <main>
        <HeroCarousel />

        {/* 3. SECCIÓN DE EVENTOS */}
       <Eventos/>

        {/* 4. VISTA PREVIA DE OFERTAS */}
        <Ofertas/>

        
          <Testimonios/>
          <Socios/>
      </main>

     
     

    </div>
  );
}