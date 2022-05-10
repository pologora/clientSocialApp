import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import './app.css'
import Header from './components/Header/Header'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPosts } from './actions/posts'

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <div className='app'>
      <Header />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
    </div>
  )
}

export default App
