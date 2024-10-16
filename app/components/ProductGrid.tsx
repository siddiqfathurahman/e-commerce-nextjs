// components/ProductGrid.jsx
import CardItem from "./CardItem";
import products from "../data/products";

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <CardItem
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
        />
        ))}
      </div>
    </div>
  );
}
