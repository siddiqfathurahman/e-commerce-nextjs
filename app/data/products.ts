// data/products.ts
interface Product {
    id: number;
    category: string;
    title: string;
    description: string;
    price: number;
    image: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      category: "Men's Clothing",
      title: "Mens Casual Premium Slim Fit T-Shirts",
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
      price: 225.0,
      image: "./public/war.jpg",  
    },
    {
      id: 2,
      category: "Men's Clothing",
      title: "Mens Cotton Jacket",
      description: "Great outerwear jackets for Spring/Autumn/Winter.",
      price: 550.0,
      image: "/war.jpg",  
    },
  ];
  
  export default products;
  