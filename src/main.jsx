import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductContainer from './components/ProductContainer.jsx'
import AboutPage from './components/AboutPage.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <App/>
      <Routes>
        <Route path='/' Component={ProductContainer}/>
        <Route path='/about' Component={AboutPage}/>
        <Route path='/profile' Component={ProfilePage}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
