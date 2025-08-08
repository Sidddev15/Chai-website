import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
      <Link to="/" className="text-2xl font-heading text-brand-accent">
        Mittichha
      </Link>

      <nav className="hidden md:flex space-x-8 font-body text-brand-dark">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6 text-brand-dark" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 md:hidden">
          <Link to="/" className="py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/shop" className="py-2" onClick={() => setIsOpen(false)}>
            Shop
          </Link>
          <Link to="/contact" className="py-2" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
