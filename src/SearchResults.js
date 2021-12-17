import React from "react";

const SearchResults = ({ results }) => {
  if (results === null) return null;
  if (Array.isArray(results) && results.length === 0) {
    return <p className="text-center">The query did not return any results.</p>
  }

  return (
    <ul className="m-auto flex flex-row flex-wrap w-1/2">
      {results.map((gif) => (
        <li key={gif.id} className="m-2">
          <img
            src={`https://i.giphy.com/media/${gif.id}/100.gif`}
            alt={gif.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
