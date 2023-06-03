import { useEffect } from 'react'
import './App.css'
import { useApplicationStore } from './store'
import { fetchPosts } from './postchain'
import PostLink from './PostLink'

function PostListPage() {
  const posts = useApplicationStore(state => state.posts)
  const setPosts = useApplicationStore(state => state.setPosts)

  useEffect(() => {
    const wrapper = async () => {
      setPosts(await fetchPosts());
    };
    wrapper();
  }, [])

  return (
    <>
      <h1>Posts</h1>
      {posts.map(post => <PostLink key={post.id} post={post} />)}
    </>
  )
}

export default PostListPage
