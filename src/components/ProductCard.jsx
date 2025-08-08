import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain p-5"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-heading text-brand-dark">{product.name}</h3>
        <p className="text-sm text-brand-dark/70">{product.tagline}</p>
        <div className="flex justify-between text-sm font-semibold">
          <span>{product.weight}</span>
          <span>{product.price}</span>
        </div>

        <button
          className="mt-2 w-full text-white py-2 rounded"
          style={{ background: "var(--color-primary)" }}
        >
          Coming Soon
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
