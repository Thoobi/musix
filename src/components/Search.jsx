import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://corsproxy.io/?https://api.deezer.com/search?q=${query}`
      );
      const data = await res.json();
      setResults(data.data);
    } catch (error) {
      console.error("Search error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 text-white">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search for songs or artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded w-full bg-gray-800 text-white"
        />
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {results.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-2 hover:bg-[#ffffff1a] rounded cursor-pointer"
            >
              <img
                src={item.album.cover_small}
                alt={item.title}
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-400">{item.artist.name}</p>
              </div>
              <audio controls src={item.preview} className="ml-auto" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
