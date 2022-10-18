import React from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'xyz', // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        path: '', // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
        protocol: 'http',
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    queryBy: 'title,authors',
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const App = () => (
  <InstantSearch indexName="books" searchClient={searchClient}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default App;
