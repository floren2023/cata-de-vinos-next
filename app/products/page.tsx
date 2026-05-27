// pages/products.tsx (o app/products/page.tsx)
"use client"
import  { useState, useMemo, ChangeEvent } from 'react';
import { PRODUCTS_DATA } from './products';
import ProductCard from '../components/ProductCard';
import { Product } from './Product';


export default function ProductsPage() {
  // Estados para filtros con tipado estricto de strings
  const [searchName, setSearchName] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  
  // Estado para paginación
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 8;

  // 1. Filtrado de productos en tiempo real memorizado
  const filteredProducts = useMemo<Product[]>(() => {
    return PRODUCTS_DATA.filter((product: Product) => {
      const matchesName = product.name.toLowerCase().includes(searchName.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.type === selectedCategory;
      const matchesPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
      
      return matchesName && matchesCategory && matchesPrice;
    });
  }, [searchName, selectedCategory, maxPrice]);

  // 2. Cálculos de Paginación
  const totalPages: number = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const activePage: number = currentPage > totalPages ? totalPages : currentPage;

  const indexOfLastItem: number = activePage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Product[] = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Handlers con tipado void (no devuelven nada)
  const goToFirst = (): void => setCurrentPage(1);
  const goToPrev = (): void => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = (): void => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLast = (): void => setCurrentPage(totalPages);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
      

        {/* Barra de Filtros */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <span className="text-red-700 font-medium italic text-lg whitespace-nowrap">
            Disfruta de nuestros productos:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full md:w-auto flex-1 max-w-4xl">
            {/* Filtro por Categoría */}
            <select 
              value={selectedCategory}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-800"
            >
              <option value="">Buscar por categoría (Todas)</option>
              <option value="Vino tinto">Vino tinto</option>
              <option value="Vino blanco">Vino blanco</option>
              <option value="Vino dulce y Sangria">Vino dulce y Sangria</option>
              <option value="Wiskey irlandez">Wiskey irlandez</option>
            </select>

            {/* Filtro por Precio */}
            <select 
              value={maxPrice}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => { setMaxPrice(e.target.value); setCurrentPage(1); }}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-800"
            >
              <option value="">Buscar por precio (Todos)</option>
              <option value="10">Hasta €10.00</option>
              <option value="20">Hasta €20.00</option>
              <option value="35">Hasta €35.00</option>
            </select>

            {/* Buscador de Nombre */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar producto..." 
                value={searchName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => { setSearchName(e.target.value); setCurrentPage(1); }}
                className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-800"
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400 absolute left-3 top-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.601z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Contador de Productos */}
        <div className="flex justify-end mb-4 text-sm text-gray-500 italic">
          <span>{filteredProducts.length} productos registrados</span>
        </div>

        {/* Rejilla de Productos */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400 bg-white rounded-xl border border-dashed">
            No se encontraron productos con los filtros seleccionados.
          </div>
        )}

        {/* Bloque de Paginación Avanzada */}
        <div className="flex justify-center items-center mt-10 gap-2">
          <button 
            onClick={goToFirst} 
            disabled={activePage === 1}
            className="px-3 py-1.5 rounded border text-sm font-medium bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            « Primero
          </button>

          <button 
            onClick={goToPrev} 
            disabled={activePage === 1}
            className="px-3 py-1.5 rounded border text-sm font-medium bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ‹ Anterior
          </button>

          {/* Números de páginas */}
          <div className="flex items-center gap-1 mx-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page: number) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                  activePage === page 
                    ? 'bg-red-800 text-white' 
                    : 'bg-white border hover:bg-gray-100 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button 
            onClick={goToNext} 
            disabled={activePage === totalPages}
            className="px-3 py-1.5 rounded border text-sm font-medium bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente ›
          </button>

          <button 
            onClick={goToLast} 
            disabled={activePage === totalPages}
            className="px-3 py-1.5 rounded border text-sm font-medium bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Último »
          </button>
        </div>

      </div>
    </div>
  );
}