// app/components/Newsletter.tsx
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
    <section className="mx-auto mt-16 max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-center text-white">
      <h4 className="text-2xl font-bold md:text-3xl">
        Keep up to date with the latest news and special offers
      </h4>
      <p className="mt-3 text-lg">
        Plus get <span className="font-bold">COP$27,224</span> off when you sign up
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-white/75 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-gray-100"
        >
          Subscribe
        </button>
      </div>
      <p className="mt-4 text-sm text-white/80">
        By opting in, you agree to our <u>Terms &amp; Conditions</u> and{" "}
        <u>Privacy Policy</u>.
      </p>
    </section>
  );
}
