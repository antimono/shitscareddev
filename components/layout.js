/** @jsx jsx */

import React from "react"
import PropTypes from "prop-types"
import { jsx, Box, Grid, Link } from "theme-ui"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <Box css={{ margin: `auto`, maxWidth: 960 }}>
      <Box
        sx={{
          ml: 4,
          mr: 4
        }}
      >
        <Header />
        <main sx={{ mb: 6 }}>{children}</main>
        <Grid
          as="footer"
          sx={{ mb: 5, color: "secondaryText" }}
          columns={[["1fr"], ["1fr 1fr"], null]}
        >
          <Box>
            <p sx={{ m: 0 }}>
              © {new Date().getFullYear()}, Shit Scared Devlopers from Apple and
              Google
            </p>
            <p sx={{ m: 0 }}>
              Ideas and fixes are welcome. Contribute on{" "}
              <Link
                variant="default"
                sx={{ pt: 0 }}
                href="https://github.com/antimono/shitscareddev"
                target="blank"
              >
                Github
              </Link>
            </p>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
