// import functions from the package
import { SitemapStream, streamToPromise } from "sitemap"
// A custom function I use to fetch data from a backend. I will keep the import to make it more clear why "graphlqlFetch" is used in the code
import { useQuery } from "@apollo/client"
import { GET_ALL_STORIES } from "../../utils/gql"
import { graphlqlFetch } from "../../utils/apolloClient"

export default async (req, res) => {
  // Fetch data from a source which will be used to render the sitemap.
  const { stories } = await graphlqlFetch(`
    query getSitemapData {
      stories {
        id
        title
        text
        downloads
        company_size
        mental_health_issues
        platform
        created_at
        slug
        resolution
      }
    }
  `)
  console.log("Data in sitemap", stories)
  // Create the a stream to write to with a hostname which will be used for all links
  // Your are able to add more settings to the stream. I recommend to look a the npm package for more information.
  const smStream = new SitemapStream({
    hostname: "https://shitscared.dev"
  })
  // Add frontpage
  smStream.write({
    url: "/"
  })
  // add all dynamic url to the sitemap which is fetched from a source.
  stories.forEach(element => {
    smStream.write({
      url: `/stories/${element.id}/${element.slug}`,
      lastmod: element.created_at
    })
  })
  // tell sitemap that there is nothing more to add to the sitemap
  smStream.end()
  // generate a sitemap and add the XML feed to a url which will be used later on.
  const sitemap = await streamToPromise(smStream).then(sm => sm.toString())
  // here is the generation of the sitemap happening
  // tell the output that we will output XML
  res.setHeader("Content-Type", "text/xml")
  // write the generate sitemap to the output
  res.write(sitemap)
  // end and send the data to the user or service.
  res.end()
}
