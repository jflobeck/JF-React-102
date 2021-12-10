import React, { useState } from "react";
import SearchResults from "./SearchResults";
// import "./App.css";

function App() {
  const [userQuery, setUserQuery] = useState("");
  const [userLimit, setUserLimit] = useState(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserQuery(e.target.search.value);
    setUserLimit(e.target.limit.value);
    console.log(userQuery);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="p-6 w-1/2 bg-white rounded-xl shadow-md text-center m-auto mt-4 mb-4">
        <form onSubmit={handleSubmit} className="mx-w-full">
          <label for="gif-search" className="font-semibold text-lg">
            Giphy Search
          </label>
          <input
            type="text"
            name="search"
            className="text-md font-medium border-grey-300 border-2 rounded-md p-1 mt-1 w-full"
          ></input>
          <label for="limit" className="m-2">
            Number of Results
          </label>
          <input
            type="number"
            name="limit"
            min="1"
            max="30"
            className="text-md font-medium border-grey-300 border-2 rounded-md p-1 mt-1 w-auto"
          ></input>
          <button
            type="submit"
            className="block bg-green-900 bg-opacity-70 rounded-2xl px-2 mt-2 m-auto"
          >
            Search
          </button>
        </form>
      </div>
      {userQuery ? (
        <p className="m-auto font-medium mb-4">{`You searched for ${userQuery}`}</p>
      ) : (
        <p></p>
      )}
      <SearchResults userQuery={userQuery} userLimit={userLimit} />
    </div>
  );
}

export default App;
