import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogCategoryByIdPage from './pages/BlogCategoryByIdPage';
import BlogDetailsByIdPage from './pages/BlogDetailsByIdPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/blogsByCategory/:categoryID' element={<BlogCategoryByIdPage/>}/>
      <Route path='/blogDetailsByID/:blogID' element={<BlogDetailsByIdPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App