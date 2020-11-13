import { withApollo } from "next-apollo"
import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  uri: "https://keen-snake-21.hasura.app/v1/graphql",
  cache: new InMemoryCache()
})

export default withApollo(apolloClient)
