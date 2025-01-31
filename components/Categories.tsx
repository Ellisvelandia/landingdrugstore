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
      {/* Section Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-left md:text-4xl lg:text-5xl">
        Shop by Category
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24} // Space between slides
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
              className="group relative block overflow-hidden rounded-2xl bg-gray-900 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl font-bold text-white">{cat.title}</p>
                <p className="mt-2 text-sm text-gray-300">
                  Explore products for {cat.title.toLowerCase()}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
