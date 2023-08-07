import {Button} from 'react-bootstrap';
import download from '../images/resumeDL.png'
function ResumeDL ({elem}) {
  const onResumeClick = () => {
    fetch('Raina Pan Resume.pdf')
    .then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Rain Pan Resume.pdf';
        alink.click();
      })
    })
  }
  if (elem === 'nav') {
    return (
    <Button className="contact-direct single" onClick={onResumeClick}>
      Resume
    </Button>
    )
  } else {
    return (

      <Button className="contact-direct" style={{width:'100%'}} onClick={onResumeClick}>
        <img className="btn-img" src={download} alt="downlow"/>
        <span className="fs-sm-1">Download My Resume</span>
      </Button>
    )
  }

}

export default ResumeDL;