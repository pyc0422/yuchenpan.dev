
import React from 'react';
import Footer from './components/Footer';
import MyNavbar from './components/NavBar.js';
import Home from './components/Home';
import Project from './components/Project';
import { Routes, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
// import {motion} from 'framer-motion';


// const Loader = () => {
//   return (

//       <motion.div
//        variant={{y:'-80vh', opacity:1}}
//        animate={{y:0, opacity:0}}
//        transition={{ duration: 1, delay:1 }}
//        style={{minHeight:'100vh', width:'100vw',
//        backgroundColor:"#fdf7da",
//        textAlign:'center'}}>

//           <h2 style={{color:'#632B30'}}>Let's Get Ready!</h2>

//       </motion.div>

//   );
// };

function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {setLoading(false)}, 2000)
  // }, [])
  return (
    <Container fluid style={{backgroundColor:'#F8DFDB'}}>
       <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Container>

  );
}

export default App;
