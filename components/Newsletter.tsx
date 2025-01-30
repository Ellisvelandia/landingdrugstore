"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter a valid email");
      return;
    }
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <section className="mx-auto mt-16 max-w-2xl rounded-2xl bg-white px-8 py-10 text-center shadow-lg">
      {/* Section Title */}
      <h4 className="text-2xl font-semibold text-gray-900 md:text-3xl">
        Stay in the Loop
      </h4>
      <p className="mt-3 text-sm text-gray-600">
        Get the latest news and exclusive offers delivered to your inbox.
      </p>

      {/* Input and Button */}
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-72"
        />
        <button
          onClick={handleSubscribe}
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 active:scale-95"
        >
          Subscribe
        </button>
      </div>

      {/* Terms and Conditions */}
      <p className="mt-6 text-xs text-gray-500">
        By subscribing, you agree to our{" "}
        <a href="#" className="underline hover:text-gray-700">
          Terms &amp; Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-gray-700">
          Privacy Policy
        </a>
        .
      </p>
    </section>
  );
}
