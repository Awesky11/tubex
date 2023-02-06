import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the query to the server
    // You can use the fetch() function or any other method to send the query to the server
    fetch("/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        language: "en-GB",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data from the server
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          dir="auto"
          id="inner_search_v4"
          name="query"
          type="text"
          tabIndex={1}
          autoCorrect="off"
          //autoFill="off"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search your favorite......"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
