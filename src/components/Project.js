import { Button} from 'react-bootstrap';
//import Footer from './Footer';
import projects from './projects.js';
import nginx from '../images/nginx.svg';
import jest from '../images/jest-color.svg';
import testing from '../images/testinglibrary-color.svg';
import tsnode from '../images/tsnode-color.svg'
import { useSearchParams } from 'react-router-dom';
import './Home.css'
const logo_img = {
  "nginx": nginx,
  "jest":jest,
  "testing-library":testing,
  "tsnode":tsnode
};


function Project() {
  const [params] = useSearchParams();
  // console.log('i', params.get('id'))
  const project = projects[params.get('id') - 1];
  const github = `https://github.com/pyc0422/${project.name}`;

  return (
    <div className="project">
      <h2 style={{textAlign:'center'}}>{project.showName || project.name}</h2>
      <span style={{margin:'auto',textAlign:"left", whiteSpace: "pre-line"}}>{project.describe}</span>
      <p style={{textAlign:'center', margin:'2%'}}>
        <span style={{textDecoration:'double underline', fontSize:'medium', fontWeight:600, marginRight:'1%'}}>
          Tech Stack:
        </span>

        {project.tech.map((n, i) =>{
            let img_src = logo_img[n.toLowerCase()] || `https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${n.toLowerCase()}-colored.svg`;
            return (
              <img key={i} src={img_src} width="25" height="25" alt={n} title={n} style={{marginLeft:'1%'}}/>
            )
          })
        }
      </p>
      <div style={{width:'80%', margin:'auto',display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        {project.image.map((arr, i) =>
          <div key={i} style={project.name === 'BiteShare' ? {flex:'50%', margin:'auto', display:'flex', justifyContent:'center'} : {margin:'auto'}}>
            <figure style={{display:'inline-block', padding:'5px', textAlign:'center'}}>
              <figcaption style={{fontFamily:'Lato', fontVariant:'small-caps'}}>{arr[1]}</figcaption>
              {project.name === 'fetch-exercise' || 'jc-frontend' ? <video alt={project.name + i} src={arr[0]} autoPlay={true} />
              :<img style={ {maxHeight:'100%', maxWidth:'100%', padding:'1%'}} src={arr[0]} alt={project.name + i}/>}
            </figure>
          </div>
        )}
      </div>
      <div id="btn-group">
        {project.deployed &&  <Button style={{backgroundColor:'orange', border:'none'}} href={project.deployed}>Try it Live</Button>}
        <Button href={github} variant="info">Github</Button>
      </div>
    </div>
  );
}

export default Project;