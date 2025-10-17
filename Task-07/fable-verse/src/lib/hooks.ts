import { fables } from "./data";

export async function fetchFables(params?: {
  search?: string;
  page?: number;
  limit?: number;
}) {
  // TODO: replace with real API call
  let data = fables;
  if (params?.search) {
    const term = params.search.toLowerCase();
    data = data.filter(
      (f) =>
        f.title.toLowerCase().includes(term) ||
        f.author.toLowerCase().includes(term)
    );
  }
  const page = params?.page ?? 1;
  const limit = params?.limit ?? 9;
  const start = (page - 1) * limit;
  const paginated = data.slice(start, start + limit);
  return { items: paginated, total: data.length };
}

export async function fetchFableById(id: string) {
  // TODO: replace with real API call
  const fable = fables.find((f) => f.id === id);
  if (!fable) throw new Error("Fable not found");
  return fable;
}