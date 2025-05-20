"use client";
import React from "react";

interface ProductCardProps {
  head: string;
  desc: string;
  icon: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ head, desc, icon, className }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 border-2 border-cyan-500 rounded-lg p-15 md:p-15 w-full lg:w-1/2 bg-gray-200 dark:bg-black shadow-md ">
   
      <div className="w-full">
        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-gray-300">{head}</h3>
        <p className="text-black dark:text-gray-300">{desc}</p>
      </div>
      <div className=" -mt-25 w-full right-3 md:right-12 ">
        <img src={icon} alt={`${head} Icon`} className={` ${className} w-30 md:w-Full h-30 md:h-full `} />
      </div>
    </div>
  );
};

export default ProductCard;
