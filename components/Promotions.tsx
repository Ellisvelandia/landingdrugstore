import React from "react";
import Image from "next/image";

const promos = [
  {
    title: "Hair Care",
    img: "/images/logo.png",
  },
  {
    title: "Hair Loss",
    img: "/images/logo.png",
  },
  {
    title: "Fragrance",
    img: "/images/logo.png",
  },
  {
    title: "Electricals",
    img: "/images/logo.png",
  },
];

export default function Promotions() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      {/* Section Title */}
      <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        Don’t Miss Out
      </h3>

      {/* Promotions Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {promos.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-md">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <p className="mt-4 text-center text-lg font-medium text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
