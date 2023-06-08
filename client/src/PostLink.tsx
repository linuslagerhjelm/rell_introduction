import React from 'react'
import styled from 'styled-components'
import { PostListing } from "./store"

const Wrapper = styled.a`
  display: block;
  cursor: pointer;
  text-align: left;
  margin: 1em;
  color: white;

  &:hover {
    color: white;
  }
`

const Headline = styled.p`
  font-size: 2em;
  margin: 0;
`

const CreatedDate = styled.p`
  margin: 0;
  color: grey;
`

const PostLink = ({post}: { post: PostListing }) => (
  <Wrapper href={`/post/${post.id}`}>
    <Headline>{post.title}</Headline>
    <CreatedDate>{post.created}</CreatedDate>
  </Wrapper>
)

export default PostLink