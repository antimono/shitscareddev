/** @jsx jsx */

import { gql, useQuery, NetworkStatus } from "@apollo/client"
import Link from "next/link"
import { Grid, jsx, Box, Flex } from "theme-ui"
import Layout from "../../../components/layout"
import { useRouter } from "next/router"
import FeatherIcon from "feather-icons-react"
import SmallCard from "../../../components/smallCard"
import Loader from "../../../components/loader"
import React from "react"
import Moment from "react-moment"
import { GET_STORY, GET_ALL_STORIES } from "../../../utils/gql"
import { NextSeo } from "next-seo"
import withApollo from "../../../utils/apolloClient"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share"

const Story = () => {
  const router = useRouter()
  const { id } = router.query
  const { loading, error, data, networkStatus } = useQuery(GET_STORY, {
    variables: { id: id },
    notifyOnNetworkStatusChange: true
  })

  const url =
    !loading &&
    `https://shitscared.dev/stories/${data.stories_by_pk.id}/${data.stories_by_pk.slug}`

  if (error) return <div>Error {error.message}</div>
  if (loading) return <Loader />

  return (
    <>
      <NextSeo
        title={data.stories_by_pk.title}
        description={data.stories_by_pk.text}
        openGraph={{
          url: url,
          title: ` ${data.stories_by_pk.title}`,
          description: `${data.stories_by_pk.text}`
        }}
      />
      <Layout>
        <Grid gap={2} columns={[["1fr"], ["1fr 1fr"], null]}>
          <Box>
            <h1 sx={{ m: 0 }}>{data.stories_by_pk.title}</h1>
            <p sx={{ color: "secondaryText" }}>
              Posted <Moment fromNow>{data.stories_by_pk.created_at}</Moment>
              {data.stories_by_pk.category &&
                ` in
            ${data.stories_by_pk.category}`}
            </p>
            <Flex sx={{ mb: 4 }}>
              <FacebookShareButton url={url}>
                <FacebookIcon
                  size={32}
                  round={true}
                  bgStyle={{ fill: "rgb(242, 242, 242)" }}
                  iconFillColor="black"
                />
              </FacebookShareButton>
              <TwitterShareButton
                title={data.stories_by_pk.title}
                via="shitscareddev"
                hashtags={["rejectedbyapple"]}
                url={url}
              >
                <TwitterIcon
                  size={32}
                  round={true}
                  bgStyle={{ fill: "rgb(242, 242, 242)" }}
                  iconFillColor="black"
                />
              </TwitterShareButton>
              <LinkedinShareButton url={url} title={data.stories_by_pk.title}>
                <LinkedinIcon
                  size={32}
                  round={true}
                  bgStyle={{ fill: "rgb(242, 242, 242)" }}
                  iconFillColor="black"
                />
              </LinkedinShareButton>
              <WhatsappShareButton url={url} title={data.stories_by_pk.title}>
                <WhatsappIcon
                  size={32}
                  round={true}
                  bgStyle={{ fill: "rgb(242, 242, 242)" }}
                  iconFillColor="black"
                />
              </WhatsappShareButton>
              <RedditShareButton url={url} title={data.stories_by_pk.title}>
                <RedditIcon
                  size={32}
                  round={true}
                  bgStyle={{ fill: "rgb(242, 242, 242)" }}
                  iconFillColor="black"
                />
              </RedditShareButton>
              <EmailShareButton url={url} subject={data.stories_by_pk.title}>
                <EmailIcon
                  size={32}
                  round={true}
                  bgStyle={{ fill: "rgb(242, 242, 242)" }}
                  iconFillColor="black"
                />
              </EmailShareButton>
            </Flex>
          </Box>
          <Box sx={{ mb: 6 }}>
            <p sx={{ mt: 0 }}>{data.stories_by_pk.text}</p>
            {data.stories_by_pk.resolution && (
              <Box sx={{ mt: 5 }}>
                <h2>Resolution</h2>
                <p>{data.stories_by_pk.resolution}</p>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid gap={2} columns={[" 1fr 1fr"]}>
          {data.stories_by_pk.downloads && (
            <SmallCard
              label="Avg downloads a month"
              value={data.stories_by_pk.downloads}
              icon="arrow-down-circle"
            />
          )}
          {data.stories_by_pk.platform && (
            <SmallCard
              label="Platform"
              value={data.stories_by_pk.platform}
              icon="shopping-bag"
            />
          )}
          {data.stories_by_pk.company_size && (
            <SmallCard
              label="Company size"
              value={data.stories_by_pk.company_size}
              icon="users"
            />
          )}
          {data.stories_by_pk.mental_health_issues && (
            <SmallCard
              label="Caused mental health issues"
              value="Yes"
              icon="frown"
            />
          )}
        </Grid>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Story)
