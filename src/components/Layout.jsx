import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="pt-20 bg-brand-light min-h-screen font-body">
      <Navbar />
      <main>{children}</main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
