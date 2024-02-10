

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import Header from './component/Header'

const App = () => {
  return (<BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/signIn' element={<SignIn/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App