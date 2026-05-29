import Social from "./social"


const Footer = () => {
  return (
     <footer className="bg-vino text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif mb-3">Únete al club de los curiosos</h3>
            <p className="text-neutral-300 text-sm max-w-md font-light">
              Recibe invitaciones a catas privadas, lanzamientos clandestinos y acceso exclusivo a lotes muy limitados.
            </p>
          </div>
          <Social/>
         {/*  <form className="flex w-full max-w-md md:ml-auto">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
              required 
            />
            <button type="submit" className="bg-white text-vino hover:bg-neutral-100 px-6 text-xs uppercase tracking-widest font-bold transition-colors">
              Unirse
            </button>
          </form> */}
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
  )
}

export default Footer