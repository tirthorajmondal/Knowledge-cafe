import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './components/Posts/Posts'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {



  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Posts></Posts>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
