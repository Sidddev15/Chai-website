import { motion } from "framer-motion";

const journeySteps = [
  {
    title: "🌱 Grown in Assam & Darjeeling",
    desc: "Our leaves are sourced from the finest tea gardens of India, picked fresh from the soil.",
  },
  {
    title: "🫖 Blended with Desi Masalas",
    desc: "Cardamom, clove, cinnamon – blended in small batches with traditional techniques.",
  },
  {
    title: "🎁 Packed with Love",
    desc: "We pack your chai in soulful designs inspired by mitti and culture.",
  },
  {
    title: "🚚 Delivered to Your Doorstep",
    desc: "From our hands to your home – freshness, flavor and emotion in every pouch.",
  },
];

function FlavorJourney() {
  return (
    <section className="bg-brand-light py-24 px-6 md:px-24">
      <motion.h2
        className="text-3xl md:text-5xl font-heading text-brand-dark text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🌿 Your Chai’s Flavor Journey
      </motion.h2>

      <div className="space-y-12 max-w-3xl mx-auto relative border-l-4 border-brand-accent pl-6">
        {journeySteps.map((step, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-brand-accent"></div>
            <h3 className="text-xl font-semibold text-brand-dark mb-1">
              {step.title}
            </h3>
            <p className="text-brand-dark/70 font-body text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FlavorJourney;
