import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import SearchResults from "./SearchResults";

function App() {
  const [formState, setFormState] = useState({
    term: "",
    limit: 10,
  });
  const [isFetching, setIsFetching] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFormChange = e => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value
    })
  };

  const queryGiphy = debounce((term, limit) => {
    // make an env var
    const SECRET_API_KEY = "AimnYfTfv0IUpTe0jgXcml0Af0r3K8P9";
    const url = `https://api.giphy.com/v1/gifs/search`;

    fetch(`${url}?api_key=${SECRET_API_KEY}&q=${term}&limit=${limit}`)
      .then(resp => resp.json())
      .then(res => {
        const { data } = res;
        setResults(data);
        setIsFetching(false);
      }, err => {
        setError(err)
      })
  }, 400);

  useEffect(() => {
    const { term, limit } = formState;
    
    setIsFetching(true);
    queryGiphy(term, limit);
  }, [formState, queryGiphy])

  return (
    <div className="flex flex-col justify-center">
      <h1 className="my-6 text-center text-2xl font-medium">Search Giphy for cats and whatever</h1>
      
      <div className="mx-auto my-4 rounded-xl shadow-md w-1/2 bg-white">
        <form onSubmit={e => e.preventDefault()} className="flex rounded-xl overflow-hidden">
            <input
              type="text"
              name="term"
              value={formState.term}
              onChange={e => handleFormChange(e)}
              placeholder="Enter your search term"
              className="flex-grow p-4"
            />      

            <select
              name="limit"
              onChange={e => handleFormChange(e)}
              className="flex-none w-16 border-l bg-white px-3"  
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>

          {/* <button
            type="submit"
            className="flex-none bg-blue-300 hover:bg-blue-400 py-4 px-8"
          >
            Search
          </button> */}
        </form>
      </div>

      {isFetching && (
        <img src="/logo192.png" className="w-16 h-16 animate-spin mx-auto" alt="Loading..." />
      )}
      <SearchResults results={results} />
    </div>
  );
}

export default App;
