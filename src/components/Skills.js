import './skills.css'
import docker from '../images/docker.svg';
import nginx from '../images/nginx.svg';
import aws from '../images/aws.svg';
import {motion} from 'framer-motion';

const logo_img = {
  "docker": docker,
  "nginx": nginx,
  "aws": aws
};

const mySkills = {
  frontend: ["javascript","react","redux", "jquery","html5","css3","materialui","bootstrap", "tailwindcss","vite","nextjs"],
  backend: ["nodejs", "express", "mongodb", "postgresql", "mysql", "docker","nginx", "firebase"],
  other:["webpack","babel","sass" ,"aws", "photoshop","premierepro", ]
}

function SkillImg ({skill,img}) {
  const srcImg = img ||`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${skill}-colored.svg`
  return (
    <figure className="skill-img" style={{display:'inline-block', padding:'5px', textAlign:'center'}}>
      <figcaption style={{fontVariant:'small-caps'}}>{skill}</figcaption>
      <img
       className="scaled-img"
       src={srcImg}
       alt={skill}
      />
    </figure>
  )
}
function Skills () {
  return (
    <motion.div
      id="skills"
      initial={{opacity:0, y:300}}
      animate={{opacity:1, y:0}}
      transition={{ duration: 1.1, delay:2 }}
    >
      <h5 style={{fontWeight:300}}>
        Welcome to my personal website! Here you can learn more about me and my work.
      </h5>
     <div style={{display:'flex', justifyContent:'space-between'}}>
      {Object.keys(mySkills).map((key, i) => {
        return(
        <div key={i} style={{width:"30vw"}}>
          <h4 className="skill-cat">{key+" skills"}</h4>
          <div className="skill-container">
          {mySkills[key].map((skill, j) => {
            let img_src;
            if (skill === 'nginx') {
              img_src = logo_img[skill]
            }
            return ( <SkillImg skill={skill} key={j} img={img_src} />)
            })
          }
          </div>
        </div>
        )
      })
      }
     </div>
   </motion.div>
  )
}

export default Skills;