import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <section className="px-6 md:px-24 py-24 bg-brand-light min-h-screen">
      <h1 className="text-4xl md:text-5xl font-heading text-center text-brand-dark mb-12">
        Our Blends
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleOpen(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </section>
  );
}

export default Shop;
