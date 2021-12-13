import React, { useState, useEffect } from "react";

const SearchResults = ({ userQuery, userLimit }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gifs, setGifs] = useState([]);

  const baseUrl =
    "https://api.giphy.com/v1/gifs/search?api_key=AimnYfTfv0IUpTe0jgXcml0Af0r3K8P9";

  useEffect(() => {
      if (userQuery && userLimit) {
    fetch(`${baseUrl}&q=${userQuery}&limit=${userLimit}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          setGifs(result.data);
          //   console.log(userQuery);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }
  }, [gifs, userQuery, userLimit]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="flex flex-row flex-wrap w-1/2 m-auto">
        {gifs.map((gif) => (
          <li key={gif.id} className="m-2">
            <img
              src={`https://i.giphy.com/media/${gif.id}/100.gif`}
              alt={gif.id}
            ></img>
          </li>
        ))}
      </ul>
    );
  }
};

export default SearchResults;
