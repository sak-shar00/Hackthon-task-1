// src/components/Filters.jsx
const filters = ["science", "mathematics", "history", "biology", "astronomy"];

export default function Filters({ onSelect, currentQuery }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center my-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onSelect(f)}
          className={`
            px-4 py-1 text-sm font-medium transition 
            ${
              currentQuery === f
                ? "bg-blue-100 text-white shadow-md"
                : "bg-white dark:bg-blue-600 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-700 dark:hover:text-white"
            } 
          `}
        >
          {f}
        </button>
      ))}
    </div>
  );
}