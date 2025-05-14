import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import ProductsSection from "../components/projects/ProductsSection";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <div className="px-10 lg:px-20">
        <PageHeading title="Our Products" />
        <ProductsSection />
        <Footer />
      </div>
    </main>
  );
}
