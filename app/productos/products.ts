// data/products.ts

import Product from "./product";



export const PRODUCTS_DATA: Product[] = [
  { id: 1, name: "Vino Rioja", type: "Vino tinto", price: 9.99, image: "https://placehold.co/150x300/png?text=Vino+Rioja+Tinto", rating: 5, likes: true },
  { id: 2, name: "Vino Rioja", type: "Vino blanco", price: 9.99, image: "https://placehold.co/150x300/png?text=Vino+Rioja+Blanco", rating: 5, likes: true },
  { id: 3, name: "Vino dulce de Pacharan", type: "Vino dulce y Sangria", price: 8.99, image: "https://placehold.co/150x300/png?text=Pacharan", rating: 5, likes: true },
  { id: 4, name: "Wiskey irlandez", type: "Wiskey irlandez", price: 30.00, image: "https://placehold.co/150x300/png?text=Whiskey", rating: 5, likes: true },
  { id: 5, name: "Vino Ribera", type: "Vino tinto", price: 15.50, image: "https://placehold.co/150x300/png?text=Ribera", rating: 4, likes: false },
  { id: 6, name: "Chardonnay Elegante", type: "Vino blanco", price: 12.00, image: "https://placehold.co/150x300/png?text=Chardonnay", rating: 5, likes: true },
  { id: 7, name: "Espumoso Premium", type: "Vino dulce y Sangria", price: 22.00, image: "https://placehold.co/150x300/png?text=Espumoso", rating: 4, likes: false },
  { id: 8, name: "Vodka Destilado", type: "Otros", price: 25.00, image: "https://placehold.co/150x300/png?text=Vodka", rating: 5, likes: true },
  { id: 9, name: "Vino Rosado Estival", type: "Vino tinto", price: 7.50, image: "https://placehold.co/150x300/png?text=Rosado", rating: 3, likes: false },
];