import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client-preset";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import App from "./App";
import registerServiceWorker from "./createServiceWorker";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cj98se5ug6qvq0136rebhprcj"
  }),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
