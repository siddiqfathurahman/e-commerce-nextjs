import CardItem from "./CardItem";
import products from "../data/products";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <CardItem
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          originalPrice={product.originalPrice} 
          category={product.category}
        />
      ))}
    </div>
  );
}
