import { withApollo } from "next-apollo"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GraphQLClient } from "graphql-request"

const GRAPHQL_URL = "https://keen-snake-21.hasura.app/v1/graphql"

const graphql_client = new GraphQLClient(GRAPHQL_URL, { headers: {} })

const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache()
})

export const graphlqlFetch = (query, variabels) =>
  graphql_client.request(query, variabels).then(data => data)

export default withApollo(apolloClient)
