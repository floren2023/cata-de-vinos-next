// components/ProductCard.tsx
import Product from "../productos/product"



interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between relative group hover:shadow-md transition-shadow">
      {/* Botón de Like / Corazón */}
      <button className="absolute top-4 left-4 text-red-500 hover:scale-110 transition-transform">
        {product.likes ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        )}
      </button>

      {/* Estrellas */}
      <div className="absolute top-4 right-4 flex text-yellow-400 text-xs">
        {"★".repeat(product.rating)}
      </div>

      {/* Imagen del Producto */}
      <div className="h-56 w-full flex items-center justify-center my-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Info del Producto */}
      <div className="mt-2">
        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
        <p className="text-sm text-emerald-600 italic mt-1">{product.type}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-extrabold text-red-800">€ {product.price.toFixed(2)}</span>
          <button className="bg-red-800 hover:bg-red-900 text-white text-xs font-semibold px-4 py-2 rounded shadow transition-colors">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
}