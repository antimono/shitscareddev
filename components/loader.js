/** @jsx jsx */

import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Box, jsx, Spinner } from "theme-ui"
import ListItem from "./listItem"
import LinesEllipsis from "react-lines-ellipsis"

const Loader = ({ title, text, href, as }) => (
  <div
    sx={{
      display: "flex",
      width: "100%",
      flex: "1 1 auto",
      justifyContent: "center",
      alignItems: "center",
      postion: "absolute",
      minHeight: "100vh"
    }}
  >
    <Spinner />
  </div>
)

export default Loader
