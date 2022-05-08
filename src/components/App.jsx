import { Routes, Route } from "react-router-dom";

import  Layout  from "Pages/Layout";
import  Home  from "Pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
      
    </Routes>
  );
};
