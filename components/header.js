/** @jsx jsx */

import Link from "next/link"
import PropTypes from "prop-types"
import { Button, Flex, Box } from "theme-ui"
import { jsx } from "theme-ui"
import TriggerModalButton from "./triggerModalButton"

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <header sx={{ mb: 6, mt: 4 }}>
      <Flex css={{ justifyContent: "space-between", alignItems: "center" }}>
        <Box
          sx={{
            "&:hover": {
              opacity: 0.8,
              cursor: "pointer"
            }
          }}
        >
          <Link href="/">
            <h1 sx={{ flex: 1 }}>💩😨</h1>
          </Link>
        </Box>
        <Box>
          <TriggerModalButton />
        </Box>
      </Flex>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
