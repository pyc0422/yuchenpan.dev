import { Button} from 'react-bootstrap';
//import Footer from './Footer';
import projects from './projects.js';
import docker from '../images/docker.svg';
import nginx from '../images/nginx.svg';
import aws from '../images/aws.svg';
import { useSearchParams } from 'react-router-dom';
import './Home.css'
const logo_img = {
  "docker": docker,
  "nginx": nginx,
  "aws": aws
};


function Project() {
  const [params] = useSearchParams();
  // console.log('i', params.get('id'))
  const project = projects[params.get('id') - 1];
  const github = `https://github.com/pyc0422/${project.name}`;
  console.log(project.name);
  const isBite = project.name === 'BiteShare';
  return (
    <div className="project">
      <h2 style={{textAlign:'center'}}>{project.showName || project.name}</h2>
      <span style={{margin:'auto',textAlign:"left", whiteSpace: "pre-line"}}>{project.describe}</span>
      <p style={{textAlign:'center', margin:'2%'}}>
        <span style={{textDecoration:'double underline', fontSize:'medium', fontWeight:600, marginRight:'1%'}}>
          Tech Stack:
        </span>

        {project.tech.map((n, i) =>{
            let img_src;
            if (n === 'Nginx') {
              img_src = logo_img[n.toLowerCase()]
            } else{
              img_src=`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${n.toLowerCase()}-colored.svg`
            }
            return (
              <img src={img_src} width="25" height="25" alt={n} title={n} style={{marginLeft:'1%'}}/>
            )
          })
        }
      </p>
      <div style={isBite ? {width:'80%', margin:'auto',display:'flex', justifyContent:'center', flexWrap:'wrap'} : {display:'flex', flexDirection:'column'}}>
        {project.image.map((arr, i) =>
          <div style={project.name === 'BiteShare' ? {flex:'50%', margin:'auto', display:'flex', justifyContent:'center'} : {margin:'auto'}}>
            <figure style={{display:'inline-block', padding:'5px', textAlign:'center'}}>
              <figcaption style={{fontFamily:'Lato', fontVariant:'small-caps'}}>{arr[1]}</figcaption>
              <img key={i} style={isBite ? { aspectRatio:9/16} : {maxHeight:'100%', maxWidth:'100%', padding:'1%'}} src={arr[0]} alt={project.name + i}/>
            </figure>
          </div>
        )}
      </div>



        <div id="btn-group">
          {project.deployed &&  <Button style={{backgroundColor:'orange', border:'none'}}href={project.deployed}>Try it Live</Button>}
          <Button href={github} variant="info">Github</Button>
        </div>



    </div>
  );
}

export default Project;