import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import FeaturedImage from "./components/FeaturedImage";
import LinksPage from "./components/LinksPage";
import NavBar from "./components/NavBar";


import TopDetails from "./components/TopDetails";


const App=()=>{
  return (
    <>
    <Router>
      <NavBar/>
    
      <Routes>
        <Route path="/Dashboard" element={<TopDetails/>} />
        <Route path="/Posts" element={<FeaturedImage/>}/>
        <Route path="/links" element={<LinksPage/>}/>
      </Routes>
    </Router>
  
  
 

    </>
  )
}
export default App
