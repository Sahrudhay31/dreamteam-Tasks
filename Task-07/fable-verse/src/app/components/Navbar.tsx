import Link from "next/link";
import SearchBar from "./SearchBar";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl">FableVerse</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/fables" className="hover:text-indigo-600">All Fables</Link>
        </nav>
        <SearchBar />
      </div>
    </header>
  );
}