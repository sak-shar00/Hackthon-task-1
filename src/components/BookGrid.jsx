import { useInView } from "react-intersection-observer";
import { useInfiniteBooks } from "../hooks/useInfiniteBooks";
import BookCard from "./BookCard";
import BookSkeleton from "./BookSkeleton";

export default function BookGrid({ query }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteBooks(query);

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    },
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {Array.from({ length: 8 }).map((_, i) => (
          <BookSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p className="text-center">Something went wrong</p>;
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {data.pages.map((page) =>
          page.docs.map((book) => (
            <BookCard key={book.key} book={book} />
          ))
        )}
      </div>

      <div ref={ref} className="h-10" />
    </>
  );
}