/** @jsx jsx */

import { gql, useQuery, NetworkStatus } from "@apollo/client"
import Link from "next/link"
import { Grid, jsx, Box } from "theme-ui"
import Layout from "../../../components/layout"
import { useRouter } from "next/router"
import FeatherIcon from "feather-icons-react"
import SmallCard from "../../../components/smallCard"
import Loader from "../../../components/loader"
import React from "react"
import Moment from "react-moment"
import { GET_STORY } from "../../../utils/gql"
import { NextSeo } from "next-seo"

const Story = () => {
  const router = useRouter()
  const { id } = router.query
  const { loading, error, data, networkStatus } = useQuery(GET_STORY, {
    variables: { id: id },
    notifyOnNetworkStatusChange: true
  })

  if (error) return <div>Error {error.message}</div>
  if (loading) return <Loader />
  return (
    <>
      <NextSeo
        title={data.stories_by_pk.title}
        description={data.stories_by_pk.text}
        openGraph={{
          url: "https://www.url.ie/a",
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
          </Box>
          <p sx={{ mb: 6, mt: 0 }}>{data.stories_by_pk.text}</p>
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

export default Story
