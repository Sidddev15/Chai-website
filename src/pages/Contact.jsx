import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="min-h-screen px-6 md:px-24 py-24 bg-white">
      <h2 className="text-4xl md:text-5xl font-heading text-center text-brand-dark mb-10">
        Get in Touch
      </h2>

      <p className="text-center max-w-xl mx-auto text-brand-dark/70 mb-12">
        Have feedback, questions, or just want to say hi? We'd love to hear from
        you. Drop us a message below.
      </p>

      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
