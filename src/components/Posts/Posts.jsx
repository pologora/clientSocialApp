import Post from './Post/Post'
import './Posts.css'
import { useSelector } from 'react-redux'

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts)

  const postsElements = posts.map((post, index) => {
    return <Post post={post} key={index} setCurrentId={setCurrentId}/>
  })

  return <div className='posts'>{!posts.length ? 'Loading...' : <div className='posts'>{postsElements}</div>}</div>
}

export default Posts
