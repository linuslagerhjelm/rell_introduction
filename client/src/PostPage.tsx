import React, { useEffect } from "react"
import { useParams } from "react-router"
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'
import styled from "styled-components"
import { useApplicationStore } from "./store"
import { fetchCommentsForPost, fetchSinglePost } from "./postchain"

const Wrapper = styled.div``
const Heading = styled.h1`
  text-align: left;
`
const Body = styled.section`
  text-align: left;
`
const Comments = styled.section`
  text-align: left;
`
const CommentHeader = styled.h3`
  margin: 0;
`
const Comment = styled.div`
  padding: 1em;
  border: 1px solid rgb(61, 61, 61);
  border-radius: 7px;
`
const CommentTimestamp = styled.span`
  display: block;
  font-size: 0.5em;
  float: right;
`

const PostPage = () => {
  const params = useParams()
  const selectedPost = useApplicationStore(state => state.selectedPost)
  const comments = useApplicationStore(state => state.selectedPostComments)
  
  const setSelectedPost = useApplicationStore(state => state.setSelectedPost)
  const setComments = useApplicationStore(state => state.setPostComments)

  useEffect(() => {
    const wrapper = async () => {
      setSelectedPost(await fetchSinglePost(params?.id || ""));
      setComments(await fetchCommentsForPost(params?.id || ""));
    };
    wrapper();
  }, [])

  return (
    <Wrapper>
      <Heading>{selectedPost?.title}</Heading>
      <Body>{parse(DOMPurify.sanitize(selectedPost?.content || ""))}</Body>

      {comments.length ? <Comments>
        <h2>Comments:</h2>
        {comments.map(comment => (
          <Comment key={comment.content}>
            <CommentTimestamp>{comment.created}</CommentTimestamp>
            <CommentHeader>{comment.author}</CommentHeader>
            {comment.content}
          </Comment>
        ))}
      </Comments> : null}
    </Wrapper>
  )
}

export default PostPage
