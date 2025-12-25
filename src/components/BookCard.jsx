export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/300x450?text=No+Cover";

  return (
    <div
      className="
        bg-white border rounded-xl overflow-hidden
        transition hover:shadow-lg hover:-translate-y-1
      "
    >
      <div className="aspect-[2/3] bg-gray-100">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 space-y-1">
        <h3 className="font-semibold line-clamp-2">{book.title}</h3>

        <p className="text-sm text-gray-600">
          {book.author_name?.[0]}
        </p>

        <p className="text-xs text-gray-500">
          {book.first_publish_year}
        </p>

        <div className="flex flex-wrap gap-1 mt-1">
          {book.subject?.slice(0, 3).map((sub) => (
            <span
              key={sub}
              className="text-xs bg-gray-200 px-2 py-0.5 rounded-full"
            >
              {sub}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}