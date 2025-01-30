import React from "react";
import Image from "next/image";

// Updated Promotions Data with Free Stock Images
const promos = [
  {
    title: "Hair Care",
    img: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hair Loss",
    img: "https://img.freepik.com/foto-gratis/vista-frontal-surtido-productos-ecologicos_23-2148491140.jpg?t=st=1738265505~exp=1738269105~hmac=77b95fe8acaa93615084043f81120baf7ceb01c8f7f0009167ab6ba1c0039414&w=360",
  },
  {
    title: "Fragrance",
    img: "https://img.freepik.com/foto-gratis/bodegon-productos-cosmeticos_23-2149163156.jpg?t=st=1738265541~exp=1738269141~hmac=e110fc85cbcb31e598b63cb044150ad0f6ff27686ff4b6817b070dc7dc293b4c&w=360",
  },
  {
    title: "Electricals",
    img: "https://img.freepik.com/foto-gratis/guante-equipo-peluqueria_23-2147711556.jpg?t=st=1738265611~exp=1738269211~hmac=3cac36d320b926c995f04b021a00d9b23fb009789bcb04db568b66e35815a2ea&w=740",
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
