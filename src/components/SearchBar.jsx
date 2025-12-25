export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search books like science, biology..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full max-w-xl mx-auto block
        px-4 py-3
        border rounded-lg
        focus:outline-none focus:ring-2 focus:ring-black
      "
    />
  );
}