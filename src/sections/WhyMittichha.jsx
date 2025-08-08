import { motion } from "framer-motion";

function WhyMittichha() {
  return (
    <section className="px-6 md:px-24 py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-heading text-brand-dark mb-6">
          Why Assamika?
        </h2>
        <p className="text-lg md:text-xl text-brand-dark/70 max-w-3xl mx-auto font-body">
          Born from the soil, crafted in hearts. <br />
          Mittichha is not just tea — it’s a story of every Indian kitchen,
          every monsoon evening, every moment where chai meant home. We blend
          tradition, taste, and emotion — in every cup.
        </p>
      </motion.div>

      {/* Optional features list */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[
          { title: "Desi Kulhad Vibes", desc: "Aroma that brings you home." },
          {
            title: "Premium Tea Leaves",
            desc: "Blended with real Indian masalas.",
          },
          {
            title: "Soulful Packaging",
            desc: "Inspired by mitti, designed for hearts.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-brand-light p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading text-brand-accent mb-2">
              {item.title}
            </h3>
            <p className="text-brand-dark/70 text-sm font-body">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhyMittichha;
