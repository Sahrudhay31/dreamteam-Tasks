import FableCard from "../components/FableCard";
import Pagination from "../components/Pagination";
import { fetchFables } from "@/lib/hooks";

export default async function FablesPage({
  searchParams,
}: {
  searchParams: { search?: string; page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search;
  const { items, total } = await fetchFables({
    search,
    page,
    limit: 9,
  });

  return (
    <section className="container mx-auto py-12">
      <h1 className="mb-6 text-3xl font-bold">
        {search ? `Search: "${search}"` : "All Fables"}
      </h1>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">No fables found.</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((f) => (
              <FableCard key={f.id} fable={f} />
            ))}
          </div>
          <Pagination current={page} total={total} limit={9} />
        </>
      )}
    </section>
  );
}