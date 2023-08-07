import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import Links from './Links'


function Footer () {
  let location = useLocation().pathname;
  return (
    <div style={{textAlign:'center'}}>
      {(location === '/project') &&
      <Button href={`/#work`} style={{marginBottom:'2%',fontSize:'larger', color:'black', backgroundColor:'transparent', border:'none', textDecoration:'underline'}}>{'>> Back'}</Button>
     }
     <div id="footer" >
      <div style={{display:'flex', justifyContent:'center'}}>
        <Links />
      </div>
      {'Copyright © Yuchen '}{new Date().getFullYear()}
    </div>
    </div>

 )
}

export default Footer;

      // (<div id="buttons">
      //   <Button href="https://docs.google.com/document/d/1WAeQwufi4KDar42VdbDMyeywFEoWkmri6z69kMffGr4/edit?usp=sharing">Resume</Button>
      //   <Button style={{marginLeft:'5%'}} href="/contact" variant="warning">Contact</Button>
      // </div>)
      // :