import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBooks } from "../lib/openLibrary";

export function useInfiniteBooks(query) {
  return useInfiniteQuery({
    queryKey: ["books", query],
    queryFn: ({ pageParam = 1 }) => fetchBooks(query, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.docs.length) return undefined;
      return allPages.length + 1;
    },
  });
}