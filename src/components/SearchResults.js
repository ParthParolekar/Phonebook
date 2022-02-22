const SearchResults = ({ searchResults }) => {
  return (
    <ul>
      {searchResults.map((searchResult) => (
        <li key={searchResult.name}>
          {searchResult.name}: {searchResult.number}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
