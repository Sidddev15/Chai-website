import { useCart } from "../context/CartContext";

function Checkout() {
  const { selectedProduct } = useCart();

  return (
    <section className="min-h-screen px-6 md:px-24 py-24 bg-white">
      <h2 className="text-3xl font-heading text-brand-dark mb-6">Checkout</h2>

      {selectedProduct ? (
        <div className="p-6 border rounded-md bg-brand-light max-w-lg">
          <h3 className="text-xl font-heading text-brand-dark mb-2">
            {selectedProduct.name}
          </h3>
          <p className="text-sm text-brand-dark/70 mb-2">
            {selectedProduct.tagline}
          </p>
          <p className="text-sm text-brand-dark">
            {selectedProduct.description}
          </p>
          <div className="mt-4 flex justify-between text-sm font-semibold">
            <span>{selectedProduct.weight}</span>
            <span>{selectedProduct.price}</span>
          </div>
          <button
            className="mt-6 w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed"
            disabled
          >
            Payment Integration Coming Soon 💳
          </button>
        </div>
      ) : (
        <p className="text-brand-dark/60">
          No product selected. Please go to the shop and click "Buy Now".
        </p>
      )}
    </section>
  );
}

export default Checkout;
