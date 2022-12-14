import Article from "../components/Article";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
const Blog = () => {
    return (
        <motion.div
        animate={{
          x: "0",
            opacity: 1
        }}
        initial={{opacity: 0,  x: -40}}
        
        exit={{opacity: 1,  x: 40}}
        transition={{ 
          type: "tween",
          duration: 1,
        }}>
        <Navbar/>
        <Intro heading={"Artikel"} description={"Lebih dalam mengenal seni"} />
        <Article />
        <Footer/>
        </motion.div>

      
    );
  };
  export default Blog;
  