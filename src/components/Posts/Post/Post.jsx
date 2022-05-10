import './Post.css'
import { AiFillLike } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import testImg from '../../../images/pies3.jpg'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deletePost, likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()

  const handleUpdate = () => {
    setCurrentId(post._id)
    document.documentElement.scrollTop = 0
  }

  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__image-container'>
          <img src={post.selectedFile} alt='post' className='post__image' />
        </div>
        <span className='post__creator'>{post.creator}</span>
        <span className='post__date'>{moment(post.createdAt).fromNow()}</span>
        <button className='post__update' onClick={handleUpdate}>
          <div className='post__dots'>...</div>
        </button>
      </div>
      <div className='post__main'>
        <div className='post__tags'>{post.tags.map((tag) => `#${tag} `)}</div>
        <h2 className='post__title'>{post.title}</h2>
        <p className='post__message'>{post.message}</p>
      </div>
      <div className='post__likes-container' onClick={()=>dispatch(likePost(post._id))}>
        <AiFillLike />
        <span className='post__likes-count'>Like {post.likeCount}</span>
      </div>
      <div className='post__delete-container'>
        <AiFillDelete />
        <span className='post__delete-text' onClick={()=>dispatch(deletePost(post._id))}>delete</span>
      </div>
    </div>
  )
}

export default Post
