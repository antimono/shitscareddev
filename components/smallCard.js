/** @jsx jsx */

import { Flex, jsx } from "theme-ui"
import FeatherIcon from "feather-icons-react"
import theme from "../utils/theme"

const SmallCard = ({ icon, value, label }) => {
  return (
    <Flex
      css={{ justifyContent: "space-between" }}
      sx={{
        borderRadius: 1,
        border: `1px solid ${theme.colors.border}`,
        p: 3,
        flexDirection: "column"
      }}
    >
      <FeatherIcon icon={icon} size="32" />
      <div>
        <h2 sx={{ m: 0, mb: 2, mt: 4 }}>{value}</h2>
        <p sx={{ color: "secondaryText", m: 0 }}>{label}</p>
      </div>
    </Flex>
  )
}

export default SmallCard
