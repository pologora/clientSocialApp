import './Form.css'
import { useState } from 'react'
import FileBase64 from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

const defaultPostData = {
  creator: '',
  title: '',
  message: '',
  tags: '',
  selectedFile: '',
}
const Form = () => {
  const [postData, setPostData] = useState(defaultPostData)
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    const { value, name } = e.target

    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(postData))
  }
  return (
    <div className='form'>
      <h2 className='form__header'>Create a Post</h2>
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
        onChange={handleOnChange}
        placeholder='Tags'
        className='form__title form__text form__element'
      />
      {/* <input type='file' name='file' value={postData.file} className='form__file' onChange={handleOnChange} /> */}
      <div className='form__file'>
        <FileBase64
          type='file'
          multiple={false}
          onDone={({ base64 }) => setPostData((prev) => ({ ...prev, selectedFile: base64 }))}
        />
      </div>
      <button className='btn btn__primary form__btn ' onClick={handleSubmit}>
        Submit
      </button>
      <button className='btn btn__danger form__btn' onClick={() => setPostData(defaultPostData)}>
        Clear
      </button>
    </div>
  )
}

export default Form
