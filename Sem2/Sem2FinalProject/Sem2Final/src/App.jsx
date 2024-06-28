
import React from 'react'
import { useState } from 'react'
import './App.css'
import { privateRouter, publicRouter } from './routers/Router'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        {publicRouter.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={route.component}
              key={index} />
          )
        })}

        {privateRouter.map((route, index) => {
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
