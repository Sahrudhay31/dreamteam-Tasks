import { notFound } from "next/navigation";
import { fetchFableById } from "@/lib/hooks";
import { Clock, Share2 } from "lucide-react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  try {
    const fable = await fetchFableById(params.id);
    return {
      title: `${fable.title} – ${fable.author}`,
      description: fable.moral,
    };
  } catch {
    return { title: "Fable Not Found" };
  }
}

export default async function FablePage({
  params,
}: {
  params: { id: string };
}) {
  let fable;
  try {
    fable = await fetchFableById(params.id);
  } catch {
    notFound();
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_URL}/fables/${fable.id}`;

  return (
    <article className="container mx-auto py-12 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{fable.title}</h1>
        <p className="text-gray-600">by {fable.author}</p>
        <div className="flex items-center space-x-4 mt-2">
          <span className="flex items-center text-sm text-gray-500">
            <Clock className="mr-1 h-4 w-4" />
            {fable.readTime} min
          </span>
          <button className="flex items-center text-sm text-gray-500 hover:text-indigo-600">
            <Share2 className="mr-1 h-4 w-4" />
            Share
          </button>
        </div>
      </header>

      <div className="prose prose-lg max-w-none mb-8">
        <p>{fable.story}</p>
      </div>

      <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-lg">
        <strong>Moral:</strong> {fable.moral}
      </blockquote>

      {/* Social share buttons */}
      <div className="mt-8 flex space-x-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          className="text-blue-600"
        >
          <Facebook />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${fable.title}`}
          target="_blank"
          className="text-sky-500"
        >
          <Twitter />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
          target="_blank"
          className="text-blue-700"
        >
          <Linkedin />
        </a>
      </div>
    </article>
  );
}