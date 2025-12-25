import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";
import useDebounce from "../hooks/useDebounce";
import Filters from "../components/Filters";
import BackToTop from "../components/BackToTop";

export default function Library() {
  const [query, setQuery] = useState("science");

  // Load last query from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("bookQuery");
    if (saved) setQuery(saved);
  }, []);

  // Save query to localStorage
  useEffect(() => {
    localStorage.setItem("bookQuery", query);
  }, [query]);

  const debouncedQuery = useDebounce(query, 400); // ensure 400ms debounce

  return (
 <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">📚 Book Explorer</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover books from Open Library
          </p>
        </div>

        {/* Search & Filters */}
        <SearchBar value={query} onChange={setQuery} />
        <Filters onSelect={setQuery} currentQuery={query} />

        {/* Book Grid */}
        <BookGrid query={debouncedQuery} />

        {/* Back-to-Top Button */}
        <BackToTop />
      </div>
    </div>
  );
}