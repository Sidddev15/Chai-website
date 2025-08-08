import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  const navigate = useNavigate();
  const { buyNow } = useCart();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white max-w-lg w-full rounded-lg p-6 shadow-lg relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-brand-dark text-xl font-bold"
          >
            ×
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-contain mb-4 rounded"
          />

          <h2 className="text-2xl font-heading text-brand-dark">
            {product.name}
          </h2>
          <p className="text-brand-dark/70 font-body text-sm mb-3">
            {product.tagline}
          </p>
          <p className="text-sm text-brand-dark/80 mb-4">
            {product.description}
          </p>

          <div className="flex justify-between text-sm font-semibold">
            <span>{product.weight}</span>
            <span>{product.price}</span>
          </div>

          <button
            className="mt-6 w-full text-white py-2 "
            onClick={() => {
              buyNow(product);
              onClose();
              navigate("/checkout");
            }}
            style={{ background: "var(--color-primary)" }}
          >
            Coming Soon ☕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProductModal;
