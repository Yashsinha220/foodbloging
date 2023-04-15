import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopPage from './pages/TopPage'
import AboutUs from './pages/AboutUs'
import Articles from './pages/Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <TopPage></TopPage>
      <AboutUs></AboutUs>
      <Articles></Articles>
    
     
    </div>
  )
}

export default App
