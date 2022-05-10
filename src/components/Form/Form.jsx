import './Form.css'
import { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const defaultPostData = {
  creator: '',
  title: '',
  message: '',
  tags: '',
  selectedFile: '',
}

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState(defaultPostData)
  const dispatch = useDispatch()
  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null))

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const handleOnChange = (e) => {
    const { value, name } = e.target

    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const addTags =(e) => {
    setPostData((prev) => ({
      ...prev,
      tags: e.target.value.split(','),
    }))
  }

  const clear = () => {
    setPostData(defaultPostData)
    setCurrentId(null)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }

  return (
    <div className='form'>
      <h2 className='form__header'>{currentId ? 'Editing' : 'Create'} a Post</h2>
      <input
        type='text'
        name='creator'
        value={postData.creator}
        onChange={handleOnChange}
        className='form__creator form__text form__element'
        placeholder='Creator'
      />
      <input
        type='text'
        name='title'
        value={postData.title}
        onChange={handleOnChange}
        placeholder='Title'
        className='form__title form__text form__element'
      />
      <textarea
        name='message'
        className='form__element form__message'
        placeholder='Message'
        value={postData.message}
        onChange={handleOnChange}
        cols='30'
        rows='10'
      ></textarea>
      <input
        type='text'
        name='tags'
        value={postData.tags}
        onChange={addTags}
        placeholder='Tags'
        className='form__title form__text form__element'
      />
      <div className='form__file'>
        <FileBase64
          type='file'
          value={postData.selectedFile}
          multiple={false}
          onDone={({ base64 }) => setPostData((prev) => ({ ...prev, selectedFile: base64 }))}
        />
      </div>
      <button className='btn btn__primary form__btn ' onClick={handleSubmit}>
        Submit
      </button>
      <button className='btn btn__danger form__btn' onClick={clear}>
        Clear
      </button>
    </div>
  )
}

export default Form
