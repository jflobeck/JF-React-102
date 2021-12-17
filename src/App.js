import React, { useState } from "react";
import SearchResults from "./SearchResults";
// import "./App.css";

function App() {
  const [gifQuery, setGifQuery] = useState("");
  const [userLimit, setUserLimit] = useState(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    setGifQuery(e.target.search.value);
    setUserLimit(e.target.limit.value);
    e.target.reset();
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto my-4 rounded-xl shadow-md p-6 w-1/2 bg-white text-center">
        <form onSubmit={handleSubmit} className="mx-w-full">
          <label for="gif-search" className="font-semibold text-lg">
            Giphy Search
          </label>
          <input
            type="text"
            name="search"
            className="mt-1 rounded-md border-grey-300 border-2 p-1 w-full text-md font-medium"
          ></input>
          <label for="limit" className="m-2">
            Number of Results
          </label>
          <input
            type="number"
            name="limit"
            min="1"
            max="30"
            className="mt-1 border-grey-300 border-2 rounded-md p-1 w-auto text-md font-medium"
          ></input>
          <button
            type="submit"
            className="block mt-2 m-auto rounded-2xl px-2 bg-green-900 bg-opacity-70"
          >
            Search
          </button>
        </form>
      </div>
      {gifQuery ? (
        <p className="m-auto mb-4 font-medium">{`You searched for ${gifQuery}`}</p>
      ) : (
        <p></p>
      )}
      <SearchResults gifQuery={gifQuery} userLimit={userLimit} />
    </div>
  );
}

export default App;
