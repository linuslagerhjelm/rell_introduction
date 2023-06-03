import { gtxClient, restClient, restClientutil } from "postchain-client";
import { Post, PostListing, Comment } from "./store";

const formatDate = (date: Date) => {
  const zeroPad = (num: number) => num < 10 ? `0${num}` : num.toString()
  return `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}`
}

const createClient = async (nodeUrl?: string) => {
  const url = nodeUrl || "http://localhost:7740";
  const brid = await restClientutil.getBrid(url, 0);
  return gtxClient.createClient(
    restClient.createRestClient([url], brid),
    brid,
    []
  );
}

export async function fetchPosts(): Promise<PostListing[]> {
  return Promise.resolve([{
    id: "1234",
    title: "The first post",
    created: formatDate(new Date()),
  }, {
    id: "5678",
    title: "The second post",
    created: formatDate(new Date()),
  }])
}

export async function fetchSinglePost(id: string): Promise<Post | null> {
  switch(id) {
    case '1234': return Promise.resolve({
      id: '1234',
      title: "The first post",
      created: formatDate(new Date()),
      author: "Linus Lagerhjelm",
      content: "<p>This is the first paragraph</p> <p>This is the second paragraph</p>"
    })
    case '5678': return Promise.resolve({
      id: '5678',
      title: "The second post",
      created: formatDate(new Date()),
      author: "Linus Lagerhjelm",
      content: "<p>This is the first paragraph of the second post</p> <p>This is the second paragraph of the second post. With <a href='https://example.com'>a link</a></p>"
    })
    default: return Promise.resolve(null)
  }
}

export async function fetchCommentsForPost(id: string): Promise<Comment[]> {
  switch(id) {
    case '1234': return Promise.resolve([])
    case '5678': return Promise.resolve([{
      author: "Anonymous",
      created: formatDate(new Date()),
      content: "Awesome blog!",
    }])
    default: return Promise.resolve([]) 
  }
}
