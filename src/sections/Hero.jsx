import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-chai.png"; // optional: your chai/kulhad image

function Hero() {
  return (
    <section className="min-h-[90vh] bg-brand-light px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-heading text-brand-dark leading-tight">
          हर घूंट में घर की याद
        </h1>
        <p className="mt-4 text-lg text-brand-dark/70 font-body">
          A sip of warmth. A taste of home. Discover authentic Indian chai
          blends that connect you back to your roots.
        </p>

        <Link
          to="/shop"
          className="inline-block mt-6 bg-brand-accent text-white px-6 py-3 rounded-full font-body text-lg hover:scale-105 transition"
        >
          🌱 Explore Our Blends
        </Link>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={heroImage}
          alt="Chai in kulhad"
          className="max-h-[400px] object-contain drop-shadow-lg"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
