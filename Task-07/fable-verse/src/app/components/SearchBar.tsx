"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/fables?search=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search fables…"
        className="rounded-l-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button className="rounded-r-md bg-indigo-600 p-2 text-white hover:bg-indigo-700">
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
}