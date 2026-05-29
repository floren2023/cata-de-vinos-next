// types/product.ts
export default interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  rating: number; // del 1 al 5
  likes: boolean;
}