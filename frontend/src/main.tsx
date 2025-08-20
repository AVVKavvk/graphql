import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const graphQlClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_SERVER_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={graphQlClient}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
