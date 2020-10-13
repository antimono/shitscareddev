/** @jsx jsx */

import Link from "next/link"
import PropTypes from "prop-types"
import { jsx, Flex, Box } from "theme-ui"
import theme from "../utils/theme"

const ListItem = ({ label, value }) => (
  <Flex sx={{ pt: 2 }}>
    <Box sx={{ flex: 1, color: "secondaryText" }}>{label}</Box>
    <Box
      sx={{
        flex: 1,
        borderBottom: `1px solid ${theme.colors.border}`,
        pb: 2,
        pt: 2
      }}
      css={{ justifyContent: "center", alignItems: "center" }}
    >
      {value}
    </Box>
  </Flex>
)

ListItem.propTypes = {
  siteTitle: PropTypes.string
}

ListItem.defaultProps = {
  siteTitle: ``
}

export default ListItem
