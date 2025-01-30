"use client"; // Required for client-side navigation
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import Autoplay module styles

const categories = [
  {
    title: "Weight Management",
    img: "/images/weight.png", // Ensure this image exists in /public/images/
    slug: "weight-management", // Matches categoryId in [categoryId]/page.tsx
  },
  {
    title: "Winter Skincare",
    img: "/images/winter.png",
    slug: "winter-skincare",
  },
  {
    title: "Vitamins",
    img: "/images/vitamins.png",
    slug: "vitamins",
  },
  {
    title: "Cold & Flu",
    img: "/images/cold.png",
    slug: "cold-flu",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
        Shop by Category
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20} // Space between slides
        slidesPerView="auto" // Responsive number of slides
        loop={true} // Infinite loop
        autoplay={{
          delay: 3000, // Auto-scroll every 3 seconds
          disableOnInteraction: false, // Keep autoplay active even after user interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 2, // Small screens
          },
          768: {
            slidesPerView: 3, // Medium screens
          },
          1024: {
            slidesPerView: 4, // Large screens
          },
        }}
        className="flex w-full"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.title}>
            <Link
              href={`/categories/${cat.slug}`} // Navigate to the category page
              className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <p className="absolute bottom-4 left-4 text-lg font-bold text-white">
                {cat.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
