/** @jsx jsx */

import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Box, jsx } from "theme-ui"
import ListItem from "./listItem"
import LinesEllipsis from "react-lines-ellipsis"
import Moment from "react-moment"

const Card = ({ title, text, href, date, as }) => (
  <Link href={href} as={as}>
    <Box
      sx={{
        flex: 1,
        bg: "secondaryBackground",
        borderRadius: 1,
        p: 4,
        "&:hover": {
          bg: "secondaryBackgroundHover",
          cursor: "pointer"
        }
      }}
    >
      <h2 sx={{ m: 0 }}>{title}</h2>
      <p sx={{ mb: 0, color: "secondaryText" }}>
        <LinesEllipsis
          text={text}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        ></LinesEllipsis>
      </p>
      <p sx={{ mb: 0, pb: 0, color: "secondaryText" }}>
        <Moment fromNow>{date}</Moment>
      </p>
    </Box>
  </Link>
)

Card.propTypes = {
  siteTitle: PropTypes.string
}

Card.defaultProps = {
  siteTitle: ``
}

export default Card
