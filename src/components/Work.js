
import projects from './projects.js';
import biteshare from "../images/biteshare.gif";
import backend from '../images/backend.jpg';
import frontend from '../images/frontend-demo.gif'


const bgImgs = {
  'BiteShare':biteshare,
  'Atelier-backend': backend,
  'Atelier-frontend':frontend,
  'mockStockMarket': "https://user-images.githubusercontent.com/86500068/224576379-199ef255-7ae8-4611-aedc-e4ebbc00de8e.GIF",
  'neway-receipt-project':""
}

function Work () {

  return (
    <>

     <div className="separator">
      My work
     </div>
     <nav className='nav-section' >
        <div style={{fontSize:"20px", fontWeight:300,margin:"8%"}}>
          A collection of my recently projects. Contains front-end, back-end and full-stack projects.
        </div>
        <div id="work-session">
        {projects.map((project, i) =>
          <a key={i} className="project-item row" href={`/project?id=${i+1}`}>
            {/* <div className="project-img"> */}
             <img className="project-img col-sm-6" src={bgImgs[project.name]}  alt={project.name}/>
            {/* </div> */}
            <div className="project-intro col-sm-6">
              <div className="project-name fs-sm-1">{project.showName || project.name}</div>
              <div className="proejct-bref fs-sm-4" style={{margin:"5% 0"}}>{project.bref}</div>
              <div className="fs-sm-3">{project.position}</div>
            </div>
          </a>


        )}
        </div>
      </nav>
      </>
  )
}

export default Work;
