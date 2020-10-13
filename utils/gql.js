import { gql } from "@apollo/client"

export const GET_ALL_STORIES = gql`
  query allStories {
    stories(order_by: { created_at: desc }) {
      id
      title
      text
      downloads
      company_size
      mental_health_issues
      platform
      created_at
      slug
    }
  }
`

export const CREATE_STORY = gql`
  mutation createStory(
    $title: String!
    $text: String!
    $category: String
    $platform: String!
    $slug: String!
    $downloads: String
    $company_size: String
    $mental_health_issues: Boolean
  ) {
    insert_stories_one(
      object: {
        title: $title
        text: $text
        slug: $slug
        category: $category
        platform: $platform
        downloads: $downloads
        company_size: $company_size
        mental_health_issues: $mental_health_issues
      }
    ) {
      id
      slug
      category
      downloads
      mental_health_issues
      platform
      company_size
      text
      title
    }
  }
`

export const GET_STORY = gql`
  query story($id: uuid!) {
    stories_by_pk(id: $id) {
      id
      title
      text
      slug
      created_at
      category
      mental_health_issues
      downloads
      company_size
      platform
    }
  }
`
