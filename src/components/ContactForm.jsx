import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Feedback Received:", data);
    localStorage.setItem("mittichha-feedback", JSON.stringify(data));
    reset();
    alert("Thank you for your feedback! ☕");
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div>
        <label className="block mb-2 text-sm font-semibold text-brand-dark">
          Name
        </label>
        <input
          {...register("name", { required: true })}
          className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 ring-brand-accent"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-brand-dark">
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 ring-brand-accent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-brand-dark">
          Message
        </label>
        <textarea
          {...register("message", { required: true })}
          rows={5}
          className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 ring-brand-accent"
          placeholder="What would you like to share?"
        />
      </div>

      <button
        type="submit"
        className="text-white px-6 py-2 rounded-md"
        style={{ background: "var(--color-primary)" }}
      >
        Send Feedback
      </button>
    </motion.form>
  );
}

export default ContactForm;
