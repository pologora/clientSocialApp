import Post from './Post/Post'
import './Posts.css'
import { useSelector } from 'react-redux'

const Posts = () => {
  const post = useSelector((state) => state.posts)
  console.log(post)

  return (
    <>
      <h1 className='h1'>Posts</h1>
      <Post />
    </>
  )
}

export default Posts
