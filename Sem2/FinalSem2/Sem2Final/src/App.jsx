
import Router from './routers/Router'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import Layout from './components/Layout';



function App() {

  return (
    <>
      {/* 0. routers */}

      {/* 1. header  */}
      <h1>#todo</h1>
      <Layout />
      <Routes>

        {Router.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={route.component}
              key={index} />
          )
        })}

      </Routes>

      
    </>
  )
}

export default App
