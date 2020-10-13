/** @jsx jsx */

import React from "react"
import PropTypes from "prop-types"
import { jsx, Box, Grid } from "theme-ui"
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
          sx={{ mb: 4, color: "secondaryText" }}
          columns={[["1fr"], ["1fr 1fr"], null]}
        >
          © {new Date().getFullYear()}, Shit Scared Devlopers from Apple and
          Google
        </Grid>
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
