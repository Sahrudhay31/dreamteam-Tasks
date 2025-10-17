import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Fable } from "@/lib/data";

export default function FableCard({ fable }: { fable: Fable }) {
  return (
    <Link href={`/fables/${fable.id}`} className="group block">
      <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
        {fable.image ? (
          <Image
            src={fable.image}
            alt={fable.title}
            width={400}
            height={200}
            className="h-48 w-full object-cover"
          />
        ) : (
          <div className="bg-gray-200 h-48 w-full" />
        )}
        <div className="p-4">
          <h2 className="truncate text-lg font-semibold group-hover:text-indigo-600">
            {fable.title}
          </h2>
          <p className="text-sm text-gray-600">by {fable.author}</p>
          <div className="mt-2 flex items-center text-xs text-gray-500">
            <Clock className="mr-1 h-3 w-3" />
            {fable.readTime} min read
          </div>
        </div>
      </div>
    </Link>
  );
}