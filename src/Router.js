import { Routes, Route } from "react-router-dom";

import Loginpage from "./Halaman/Loginpage";
import Registerpage from "./Halaman/Registerpage";

import Home from "./Halaman/Home";

import Blog from "./Halaman/Blog";
import About from "./Halaman/About";
import All_Course from "./Halaman/All_course";
import HomeCourse from "./Halaman/HomeCourse";
import CoursePage from "./Halaman/CoursePage";
import Landingpage from "./Halaman/Landingpage";


const Routerapp = () => {
  return (
    <div>
      <Routes>
   
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allcourse">
          <Route path="" element={<All_Course />} />
          <Route path=":Title/:id">
            <Route path="" element={<HomeCourse />} />
            <Route path=":Title/:id" element={<CoursePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Routerapp;
