import React from "react";
import { connectHits } from "react-instantsearch-core";
import styled from "styled-components";
import { MovieHit } from "../MovieHit";

const HitsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

function MoviesHits({ hits }) {
  return (
    <HitsContainer>
        <h1>hI</h1>
      {hits.map((hit) => (
        <MovieHit key={hit.ObjectID} hit={hit} />
      ))}
    </HitsContainer>
  );
}

export default connectHits(MoviesHits);
