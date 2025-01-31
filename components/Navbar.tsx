"use client"; // so we can add interactive logic if needed
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 px-4 py-3 backdrop-blur-sm">
      {/* Top Section */}
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png" // Custom logo (SVG format recommended)
            alt="BioPharmDirect"
            width={0} // Set to 0 to allow dynamic sizing
            height={0} // Set to 0 to allow dynamic sizing
            sizes="100vw" // Responsive sizing hint
            style={{
              width: "auto", // Automatically adjust width
              height: "40px", // Fixed height for consistency
            }}
            className="object-contain"
          />
          <p className="text-xs text-gray-600">Powered by ePharmacy</p>
        </div>

        {/* Center: Search */}
        <div className="hidden flex-1 justify-center px-6 sm:flex">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search by product, brand, or condition"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:bg-white focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1.5 rounded-md bg-blue-600 px-4 py-1.5 text-sm text-white transition-colors hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-100"
            aria-label="Language Selector"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.5 4.5h3m-4.5 3H9m3 4.5h-3m4.5-3v-2m0 2v2"
              />
            </svg>
          </a>
          <a
            href="#"
            className="cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-100"
            aria-label="Account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-100"
            aria-label="Basket"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0h2v2H7v-2m2 0v2m0-2H5"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="mt-4 flex justify-center sm:hidden">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search by product, brand, or condition"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:bg-white focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1.5 rounded-md bg-blue-600 px-4 py-1.5 text-sm text-white transition-colors hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Secondary Nav */}
      <nav className="mx-auto mt-3 max-w-7xl">
        <ul className="flex flex-wrap items-center gap-6 text-sm">
          {[
            "Health & Medicine",
            "Electricals",
            "Vitamins",
            "Toiletries",
            "Baby & Child",
            "Men's",
            "Skincare",
            "Stock Up & Save",
            "Fragrance",
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Trustpilot Rating */}
      <div className="mx-auto mt-2 max-w-7xl text-sm font-medium text-emerald-700">
        ⭐️ 4.7 out of 5 on Trustpilot from over 45,000 reviews
      </div>
    </header>
  );
}
