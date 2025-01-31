"use client";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: "p1",
    title: "SimFast Milkshake",
    price: "COP$7,117",
    img: "/images/logo.png",
  },
  {
    id: "p2",
    title: "Nicorette Gum",
    price: "COP$10,205",
    img: "/images/logo.png",
  },
  {
    id: "p3",
    title: "Paracetamol 600mg",
    price: "COP$5,390",
    img: "/images/logo.png",
  },
  {
    id: "p4",
    title: "Optrex Eye Drops",
    price: "COP$48,950",
    img: "/images/logo.png",
  },
];

export default function BestSellers() {
  const [cart, setCart] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCart((prev) => [...prev, productId]);
    alert(`Product ${productId} added to basket!`);
  };

  return (
    <section className="mx-auto mt-12 max-w-7xl px-4">
      {/* Section Title */}
      <h3 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-left">
        Best Sellers
      </h3>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-grow flex-col p-4">
              <p className="text-sm font-medium text-gray-800">
                {product.title}
              </p>
              <p className="mt-2 text-lg font-bold text-blue-600">
                {product.price}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product.id)}
              className="w-full rounded-b-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <p className="mt-6 text-center text-sm text-gray-500 sm:text-left">
        {cart.length > 0 ? (
          <>
            <span className="font-semibold text-gray-700">
              {cart.length} item(s)
            </span>{" "}
            in cart: {cart.join(", ")}
          </>
        ) : (
          "Your cart is empty."
        )}
      </p>
    </section>
  );
}
