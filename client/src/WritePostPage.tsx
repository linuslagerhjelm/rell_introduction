import React from 'react'
import { useState } from "react"
import styled from "styled-components"
import { createNewPost } from "./postchain"

const Form = styled.form`
  text-align: left;
`
const Input = styled.input`
  font-size: 1.5em;
  margin: .5em 0;
  padding: 0.3em;
  width: calc(100% - .3em);
`
const TextArea = styled.textarea`
  font-size: 1em;
  width: 100%;
  height: 400px;
  padding: 0.3em;
`
const Error = styled.p`
  color: red;
`
const Button = styled.button`
  float: right;
`

const WritePostPage = () => {
  
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [privkey, setPrivkey] = useState("")
  const [error, setError] = useState("")
  
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      setError("Title is required")
      return
    }
    if (!content) {
      setError("Content is required")
      return
    }
    if (!privkey) {
      setError("Privkey is required")
      return
    }
    createNewPost({ title, content, privkey: Buffer.from(privkey, "hex") })
  }
  const onUpdateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target?.value || "")
    setError("")
  }
  const onUpdateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target?.value || "")
    setError("")
  }
  const onUpdatePrivkey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivkey(e.target?.value || "")
    setError("")
  }

  return (
    <Form onSubmit={(e) => submitForm(e)}>
      <h1>Write a new post</h1>
      <label htmlFor="title">
        <Input type="text" placeholder="Title" name="title" value={title} onChange={onUpdateTitle} />
      </label>
      <label htmlFor="content">
        <TextArea placeholder="content" name="content" value={content} onChange={onUpdateContent} />
      </label>
      <label htmlFor="privkey">
        <Input type="password" placeholder="privkey" name="privkey" value={privkey} onChange={onUpdatePrivkey} />
      </label>
      <Error>{error}</Error>
      <Button type="submit">Publish</Button>
    </Form>
  )
}

export default WritePostPage
