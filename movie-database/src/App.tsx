import reactLogo from "./assets/react.svg";
import "./App.css";
import styled from "styled-components";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import { searchClient } from "./typesenseAdapter";
import MoviesHits from "./components/MovieHits";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: lem 0;
`;

function App() {
  return (
    <AppContainer>
      <h2>React/Typesense Movies InstantSearch</h2>
      <InstantSearch searchClient={searchClient} indexName="movies">
        <h4>Search Movies</h4>
        <SearchBox />
        <MoviesHits />
      </InstantSearch>
    </AppContainer>
  );
}

export default App;
