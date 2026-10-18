export default function SearchBar({
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search by name or phone..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {searchQuery && (
        <button
          type="button"
          onClick={() => onSearchChange("")}
        >
          Clear
        </button>
      )}
    </div>
  );
}
