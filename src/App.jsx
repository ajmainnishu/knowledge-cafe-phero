import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
        <Header></Header>
        <Blogs></Blogs>
        <Blog></Blog>
    </div>
  )
}

export default App