import ProductCard from "../ProductCard";
import { ourProducts } from "../../data";
import PageHeading from "../PageHeading";

export default function ProductsSection() {
  return (
    <div className="px-10 lg:px-20 bg-[url(/overview.png)] dark:bg-[url(/overviewblack.png)] bg-cover bg-no-repeat">
      <PageHeading title="Our Products" />

      {/* Ad-Rover & Smart Bot*/}
      <div className="flex flex-col lg:flex-row gap-25 lg:gap-10 justify-end items-center pt-30 ">
        {ourProducts.slice(0, 2).map((item, index) => (
          <ProductCard
            key={index}
            head={item.head}
            desc={item.desc}
            icon={item.icon}
            className="w-30 md:w-70"
          />
        ))}
      </div>

      {/* Waiter Bot & Snake Bot*/}
      <div className="flex flex-col lg:flex-row gap-25 lg:gap-10 justify-end items-center py-20 ">
        {ourProducts.slice(-2).map((item, index) => (
          <ProductCard
            key={index}
            head={item.head}
            desc={item.desc}
            icon={item.icon}
            className="w-30 md:w-70"
          />
        ))}
      </div>
    </div>
  );
}
