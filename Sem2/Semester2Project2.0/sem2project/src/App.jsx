import "./App.css";
import { Routes, Route } from "react-router";
import { publicRouter, privateRouter } from "./router/router";

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
          );
        })}

        {privateRouter.map((route, index) => {
          return (
            <Route 
            path={route.path} 
            element={route.component} 
            key={index} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
