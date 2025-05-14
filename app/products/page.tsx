import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import IconCard from "../components/IconCard";
import { ourProducts } from "../data";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-[calc(100%-2in)] mx-auto">

        {/* Main Heading */}
        <PageHeading title="Our Products" />

        {/* Ad-Rover & Smart Bot*/}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center pt-30">
          {ourProducts.slice(0, 2).map((item, index) => (
            <IconCard
              key={index}
              head={item.head}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
        
        {/* Waiter Bot & Snake Bot*/}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center py-30">
          {ourProducts.slice(-2).map((item, index) => (
            <IconCard
              key={index}
              head={item.head}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
