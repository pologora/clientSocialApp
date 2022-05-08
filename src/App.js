import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import './app.css'
import Header from './components/Header/Header'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPosts } from './actions/posts'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <div className='app'>
      <Header />
      <Form />
      <Posts />
    </div>
  )
}

export default App
