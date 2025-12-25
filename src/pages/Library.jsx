import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";
import useDebounce from "../hooks/useDebounce";
import Filters from "../components/Filters";

export default function Library() {
  const [query, setQuery] = useState("science");

  useEffect(() => {
    const saved = localStorage.getItem("bookQuery");
    if (saved) setQuery(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookQuery", query);
  }, [query]);

  const debouncedQuery = useDebounce(query);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            📚 Book Explorer
          </h1>
          <p className="text-gray-600">
            Discover books from Open Library
          </p>
        </div>

        <SearchBar value={query} onChange={setQuery} />
        <Filters onSelect={setQuery} />

        <BookGrid query={debouncedQuery} />

      </div>
    </div>
  );
}