/** @jsx jsx */

import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useRecoilState } from "recoil"
import PropTypes from "prop-types"
import {
  jsx,
  Button,
  Flex,
  Box,
  Grid,
  Label,
  Select,
  Checkbox,
  Input,
  Textarea,
  IconButton
} from "theme-ui"
import { gql, useMutation } from "@apollo/client"
import slugify from "../utils/slugify"
import { modalState } from "../utils/atoms"
import { GET_ALL_STORIES, CREATE_STORY } from "../utils/gql"
import FeatherIcon from "feather-icons-react"

const SurveyForm = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [createStory, { loading }] = useMutation(CREATE_STORY)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")
  const [downloads, setDownloads] = useState("")
  const [mentalHealthIssues, setMentalHealthIssues] = useState(false)
  const [platform, setPlatform] = useState("")
  const [companySize, setCompanySize] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    setShowModal(false)
    createStory({
      refetchQueries: [{ query: GET_ALL_STORIES }],
      awaitRefetchQueries: true,
      variables: {
        title: title,
        slug: slugify(title),
        text: text,
        category: category,
        platform: platform,
        downloads: downloads,
        company_size: companySize,
        mental_health_issues: mentalHealthIssues
      }
    })
    console.log(createStory)
  }
  return (
    <>
      {showModal && (
        <Flex
          css={{ backdropFilter: "blur(20px)", justifyContent: "center" }}
          sx={{
            width: "100%",
            position: "fixed",
            left: 0,
            top: 0,
            overflowY: "scroll",
            maxHeight: "100vh",
            zIndex: 100
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
              flex: "1 1 auto",
              p: 4
            }}
          >
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                pb: 4
              }}
            >
              <h1 sx={{ m: 0, flex: 1 }}>Share your story anonymously.</h1>
              <IconButton
                sx={{ flex: 0.5, justifyContent: "flex-end" }}
                aria-label="Close modal"
                onClick={() => setShowModal(false)}
              >
                <FeatherIcon icon="x" size="32" />
              </IconButton>
            </Flex>
            <Box as="form" onSubmit={handleSubmit}>
              <Label htmlFor="title" sx={{ pb: 2 }}>
                Title*
              </Label>
              <Input
                name="title"
                id="title"
                mb={3}
                onChange={e => setTitle(e.target.value)}
                required
              />

              <Label htmlFor="text" sx={{ pb: 2 }}>
                Story*
              </Label>
              <Textarea
                name="text"
                id="text"
                rows="10"
                mb={3}
                onChange={e => setText(e.target.value)}
                required
              />
              <Grid gap={2} columns={[["1fr"], ["1fr 1fr"], null]}>
                <Box>
                  <Label htmlFor="category" sx={{ pb: 2 }}>
                    Category
                  </Label>
                  <Select
                    name="category"
                    id="category"
                    onChange={e => setCategory(e.target.value)}
                    mb={3}
                  >
                    <option value="" disabled selected>
                      Select category
                    </option>
                    <option value="Books">Books</option>
                    <option value="Business">Business</option>
                    <option value="Developer Tools">Developer Tools</option>
                    <option value="Eductation">Eductation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Finance">Finance</option>
                    <option value="Food & Drink">Food & Drink</option>
                    <option value="Games">Games</option>
                    <option value="Graphics & Design">Graphics & Design</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Kids">Kids</option>
                    <option value="Magazines & Newspapers">
                      Magazines & Newspapers
                    </option>
                    <option value="Medical">Medical</option>
                    <option value="Music">Music</option>
                    <option value="Navigation">Navigation</option>
                    <option value="News">News</option>
                    <option value="Photo & Video">Photo & Video</option>
                    <option value="Productivity">Productivity</option>
                    <option value="Reference">Reference</option>
                    <option value="Social Networking">Social Networking</option>
                    <option value="Sports">Sports</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Weather">Weather</option>
                  </Select>
                </Box>

                <Box>
                  <Label htmlFor="platform" sx={{ pb: 2 }}>
                    Platform*
                  </Label>
                  <Select
                    name="platform"
                    id="platform"
                    mb={3}
                    onChange={e => setPlatform(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>
                      Select a platform
                    </option>
                    <option value="App Store">App Store</option>
                    <option value="Google Play">Google Play</option>
                  </Select>
                </Box>

                <Box>
                  <Label htmlFor="downloads" sx={{ pb: 2 }}>
                    Avg. downloads per month
                  </Label>
                  <Input
                    name="downloads"
                    id="downloads"
                    mb={3}
                    onChange={e => setDownloads(e.target.value)}
                  />
                </Box>

                <Box>
                  <Label htmlFor="size" sx={{ pb: 2 }}>
                    Company size
                  </Label>
                  <Select
                    name="size"
                    id="size"
                    mb={3}
                    onChange={e => setCompanySize(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2-9">2-9</option>
                    <option value="10-49">10-49</option>
                    <option value="50-249">50-249</option>
                    <option value="250+">250+</option>
                  </Select>
                </Box>

                <Label mb={3}>
                  <Checkbox
                    onChange={e => setMentalHealthIssues(e.target.value)}
                  />
                  <p sx={{ p: 0, m: 0, ml: 3 }}>
                    Impacted my mental health or the one of my team.
                  </p>
                </Label>
              </Grid>
              <Flex sx={{ mt: 3, pb: 5, justifyContent: "flex-end" }}>
                <Button
                  variant="secondary"
                  sx={{ mr: 2 }}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disbaled={loading}>
                  Submit your story
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  )
}

export default SurveyForm
