/** @jsx jsx */

import { gql, useQuery, NetworkStatus } from "@apollo/client"
import Link from "next/link"
import Card from "../components/card"
import { Flex, Box, Grid, jsx, Button } from "theme-ui"
import Layout from "../components/layout"
import slugify from "../utils/slugify"
import Loader from "../components/loader"
import TriggerModalButton from "../components/triggerModalButton"
import { GET_ALL_STORIES } from "../utils/gql"
import Moment from "react-moment"
import { initializeApollo } from "../utils/apolloClient"

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_STORIES)
  if (error) return <div>Error {error.message}</div>
  if (loading) return <Loader />

  return (
    <Layout>
      <Box sx={{ mb: 6 }}>
        <h1 sx={{ m: 0, p: 0 }}> Shit Scared Developers</h1>
        <h1 sx={{ m: 0, mt: 1, mb: 4, color: "secondaryText" }}>
          Hello app developers. Post anonymously about your experiences with the
          App Store and Google Play. Share advice on how to overcome rejections.
        </h1>
      </Box>
      <Grid
        gap={2}
        columns={[["1fr"], ["1fr 1fr"], ["1fr 1fr"]]}
        sx={{ mb: 6 }}
      >
        {data.stories.map(story => (
          <div key={story.id}>
            <Card
              title={story.title}
              text={story.text}
              date={story.created_at}
              href={`stories/${story.id}`}
              as={`stories/${story.id}/${story.slug}`}
            />
          </div>
        ))}
      </Grid>
      <Grid sx={{ mb: 6 }} gap={2} columns={[["1fr"], ["1fr 1fr"], null]}>
        <h1 sx={{ mb: 1, mt: 0, flex: 1 }}>Manifesto</h1>
        <Box sx={{ flex: 1 }}>
          <p sx={{ mt: 0 }}>
            We love Apple. We love Google. We look up to them as the dream. We
            purchase their products in awe, wondering how the fuck can someone
            achieve such standard. They're the peak we want to climb and the
            kind of story we want to tell.
          </p>
          <p>
            We're shit scared of them. We're terrified. In the free world we are
            lucky to live in, there's nothing more paralyzing than a powerful
            conglomerate controlling the destiny of your business. In our case —
            the destiny of a family business employing people, many with
            children.
          </p>
          <p>
            When we made our app, we felt like we're entering the future — we
            built a business out of thin air, produced software, connected
            people, earned revenues and employed people. We felt like a business
            leaving its mark in the competitive landscape, in great part thanks
            to the platforms Apple and Google built.
          </p>
          <p>
            We get insomnia. We fight at home. We cry, because Apple rejects our
            app out of the blue, telling us our product no longer delivers on
            their requirements. We get panic attacks, because Google's Play
            Store bots gain new powers and take our app down because it's
            'violating its rules'. We suffer and sit, motionless, waiting,
            whilst the giants make a small move and gives us a sign whether our
            business is doomed or the giant's big fingers accidentally rejected
            us.
          </p>
          <p>
            Reading about Proton Mail, Epic games, Basecamp's Hey we see we are
            not alone. The giants send shivers down millions of people's backs.
            They take from small businesses' revenue, claiming they use it to
            operate the stores. This might be true, but they must do better.
          </p>
          <p sx={{ mb: 4 }}>
            We call on you, developers, business owners, dreamers — share your
            rejection story. Post your moment of terror. This is the Me-Too of
            app developers. We might be shit scared, but together, we might
            scare the shit out of the giants too.
          </p>
          <TriggerModalButton />
        </Box>
      </Grid>
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_ALL_STORIES
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  }
}

export default IndexPage
