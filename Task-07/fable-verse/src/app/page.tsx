import FableCarousel from "./components/FableCarousel";
import FableCard from "./components/FableCard";
import { fetchFables } from "@/lib/hooks";

export default async function Home() {
  const { items: featured } = await fetchFables({ limit: 5 });
  const { items: recent } = await fetchFables({ limit: 6 });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Timeless Wisdom
          </h1>
          <p className="text-lg">
            Classic fables that teach life lessons in a few minutes.
          </p>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="container mx-auto py-12">
        <h2 className="mb-6 text-2xl font-bold">Featured Fable</h2>
        <FableCarousel fables={featured} />
      </section>

      {/* Recent Fables Grid */}
      <section className="container mx-auto py-12">
        <h2 className="mb-6 text-2xl font-bold">Recent Fables</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((f) => (
            <FableCard key={f.id} fable={f} />
          ))}
        </div>
      </section>
    </>
  );
}