import { useMemo } from "react"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { concatPagination } from "@apollo/client/utilities"
import { GraphQLClient } from "graphql-request"

let apolloClient

const GRAPHQL_URL = "https://keen-snake-21.hasura.app/v1/graphql"

const graphql_client = new GraphQLClient(GRAPHQL_URL, { headers: {} })

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: GRAPHQL_URL // Server URL (must be absolute)
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allStories: concatPagination()
          }
        }
      }
    })
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

export const graphlqlFetch = (query, variabels) =>
  graphql_client.request(query, variabels).then(data => data)
