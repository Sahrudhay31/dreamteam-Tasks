import Link from "next/link";

export default function Pagination({
  current,
  total,
  limit = 9,
}: {
  current: number;
  total: number;
  limit?: number;
}) {
  const pages = Math.ceil(total / limit);
  return (
    <div className="flex justify-center space-x-2 mt-8">
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <Link
          key={p}
          href={`/fables?page=${p}`}
          className={`px-3 py-1 rounded ${
            p === current
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {p}
        </Link>
      ))}
    </div>
  );
}