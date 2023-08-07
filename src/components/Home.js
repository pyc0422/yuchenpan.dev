import React, { useRef } from 'react';
import { Container} from 'react-bootstrap';
import {motion } from 'framer-motion';
import './Home.css';
import Work from './Work';
import Links from './Links';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Experiences from './Experiences';
import { useInView } from "framer-motion";
import { useLocation } from 'react-router';
function Section({ id, children }) {
  let location = useLocation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const sectionStyle = location.hash.slice(1)!== id ? {
    transform: isInView ? "none" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.5s cubic-bezier(0.75, 0.47, 0.55, 1) 0.5s"
  } : {};
  return (
    <section
     id={id}
     className="page"
     ref={ref}
     style={sectionStyle}
    >
        {children}
    </section>
  );
}

function Home() {
  return (
    <Container style={{textAlign:'center'}}>
      <section className="page"  id="home">
        <div className="bref">
          <motion.div
            className="vl"
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{ duration: 2, delay:1 }}
          />
          <div className="bref-intro">
            <motion.h1
              initial={{opacity:0,x:"-50vw"}}
              animate={{opacity:1,x: 0}}
              transition={{ duration: 1.1, delay:0.5 }}
            >
              Hello, I'm Yuchen (Raina) Pan
            </motion.h1>
            <motion.div
              initial={{opacity:0, x:'50vw'}}
              animate={{opacity:1, x:0}}
              transition={{ duration: 1.1, delay:0.5}}
            >
              <h3 style={{textAlign:'left'}}>A Full Stack engineer based in Chicago</h3>
              <div style={{textAlign: "left"}}>
                <Links />
              </div>
            </motion.div>
          </div>
        </div>
        <Skills />
        {/* {scroll && <Skills />} */}
      </section>
      <Section id="work">
          <Work />
      </Section>
      <Section id="about">
          <About />
      </Section>
      <Section id="experience">
        <Experiences />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Container>
  );
}

export default Home;