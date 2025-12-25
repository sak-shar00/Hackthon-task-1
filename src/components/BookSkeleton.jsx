export default function BookSkeleton() {
  return (
    <div className="border rounded-xl overflow-hidden animate-pulse bg-white">
      <div className="aspect-[2/3] bg-gray-300" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  );
}