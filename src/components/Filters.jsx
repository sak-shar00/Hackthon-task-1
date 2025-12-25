const filters = [
  "science",
  "mathematics",
  "history",
  "biology",
  "astronomy",
];

export default function Filters({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onSelect(f)}
          className="px-3 py-1 text-sm rounded-full bg-muted hover:bg-primary hover:text-white"
        >
          {f}
        </button>
      ))}
    </div>
  );
}