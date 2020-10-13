/** @jsx jsx */

import Link from "next/link"
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Flex, Box } from "theme-ui"
import { jsx } from "theme-ui"
import { useRecoilState } from "recoil"
import { modalState } from "../utils/atoms"

const TriggerModalButton = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)

  return <Button onClick={() => setShowModal(true)}>Share your story</Button>
}

export default TriggerModalButton
