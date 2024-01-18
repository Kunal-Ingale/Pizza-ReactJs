import Nav from './Components/Nav'
import Footer from './Components/footer'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import './styles/Footer.css'
import Menu from './pages/Menu'
import About from './pages/About'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/menu'  element={<Menu/>}/>
        <Route path='/about'  element={<About/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
