import { ThemeProvider } from "theme-ui"
import { ApolloProvider } from "@apollo/client"
import theme from "../utils/theme"
import "../public/fonts/inter.css"
import { useApollo } from "../utils/apolloClient"
import { DefaultSeo } from "next-seo"
import { RecoilRoot } from "recoil"
import SurveyForm from "../components/surveyForm"
import { modalState } from "../utils/atoms"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Head>
            <link
              rel="icon"
              type="image/png"
              href="https://shitscared.dev/apple-touch-icon-152x152.png"
            />
          </Head>
          <DefaultSeo
            title="Shit Scared Developers"
            description="Hello app developers. Post anonymously about your experiences with the App Store and Google Play."
            noindex={(process.env.ENV != "production" && false) || true}
            canonical="https://shitscared.dev"
            openGraph={{
              type: "website",
              locale: "en_IE",
              url: "https://shitscared.dev",
              site_name: "Shit Scared Developers",
              images: [
                {
                  url: "https://shitscared.dev/ogimage.png",
                  width: 1200,
                  height: 630,
                  alt: "Shit Scared Developers from Apple and Google"
                }
              ]
            }}
            twitter={{
              handle: "@shitscareddev",
              site: "@site",
              cardType: "summary_large_image"
            }}
          />
          <SurveyForm />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
