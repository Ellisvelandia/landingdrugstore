import { notFound } from "next/navigation";

// Define the category data
const categoryData: Record<string, { title: string; description: string }> = {
  "weight-management": {
    title: "Weight Management",
    description: "Products to help you achieve your weight goals.",
  },
  "winter-skincare": {
    title: "Winter Skincare",
    description: "Essential skincare products for the winter season.",
  },
  vitamins: {
    title: "Vitamins",
    description: "Boost your health with our range of vitamins.",
  },
  "cold-flu": {
    title: "Cold & Flu",
    description: "Stay healthy with cold and flu remedies.",
  },
};

// Category Page Component
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>; // Correctly typed as a Promise
}) {
  // Await the params before destructuring
  const { categoryId } = await params;

  // Log the received categoryId for debugging
  console.log("Received categoryId:", categoryId);

  // Ensure categoryId is a valid key in categoryData
  if (!categoryData[categoryId]) {
    console.error(`Category not found for categoryId: ${categoryId}`);
    return notFound(); // Show 404 page if the category doesn't exist
  }

  const category = categoryData[categoryId];

  return (
    <div className="mx-auto mt-12 max-w-7xl px-4">
      <h1 className="text-3xl font-bold text-gray-900">{category.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{category.description}</p>
      {/* Add product listings here */}
    </div>
  );
}

// Generate static paths at build time
export async function generateStaticParams() {
  const categories = [
    { id: "weight-management" },
    { id: "winter-skincare" },
    { id: "vitamins" },
    { id: "cold-flu" },
  ];

  return categories.map((category) => ({
    categoryId: category.id,
  }));
}
