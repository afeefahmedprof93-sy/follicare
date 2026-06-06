export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  suitableFor: string;
  featured?: boolean;
  badge?: string;
};

export type CartLine = {
  product: Product;
  quantity: number;
};
