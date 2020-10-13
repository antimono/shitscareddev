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
              rel="apple-touch-icon-precomposed"
              sizes="57x57"
              href="/public/apple-touch-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="114x114"
              href="/public/apple-touch-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="72x72"
              href="/public/apple-touch-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="144x144"
              href="/public/apple-touch-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="60x60"
              href="/public/apple-touch-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="120x120"
              href="/public/apple-touch-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="76x76"
              href="/public/apple-touch-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="152x152"
              href="/public/apple-touch-icon-152x152.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/public/favicon-196x196.png"
              sizes="196x196"
            />
            <link
              rel="icon"
              type="image/png"
              href="/public/favicon-96x96.png"
              sizes="96x96"
            />
            <link
              rel="icon"
              type="image/png"
              href="/public/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/public/favicon-16x16.png"
              sizes="16x16"
            />
            <link
              rel="icon"
              type="image/png"
              href="/public/favicon-128.png"
              sizes="128x128"
            />

            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
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
