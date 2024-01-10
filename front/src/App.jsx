import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Mainpage from './pages/Mainpage'
import AddPage from './pages/AddPage'

function App() {

  return (
    <>
<Routes>
  <Route element={<MainLayout/>}>
    <Route path='/' element={<Mainpage/>}/>
    <Route path='/AddPage' element={<AddPage/>}/>
  </Route>
</Routes>
    </>
  )
}

export default App
