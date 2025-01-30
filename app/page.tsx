// app/page.tsx

import BestSellers from "@/components/BestSellers";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Promotions from "@/components/Promotions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Promotions />
      {/* You can add more sections (like Autumn Essentials, brand highlights, etc.) here */}
      <BestSellers />
      <Newsletter />
      <Footer />
    </>
  );
}
