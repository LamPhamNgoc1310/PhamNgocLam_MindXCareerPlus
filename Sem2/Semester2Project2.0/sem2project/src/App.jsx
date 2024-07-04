import "./App.css";
import { Routes, Route } from "react-router";
import { publicRouter, privateRouter } from "./router/router";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        {publicRouter.map((route, index) => {
          return (
            <Route path={route.path} element={route.component} key={index} />
          );
        })}
        <Route path="/" element={<Layout />}>
          {privateRouter.map((route, index) => {
            return (
              <Route path={route.path} element={route.component} key={index} />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
