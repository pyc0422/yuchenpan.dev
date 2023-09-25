import React from 'react';
import photo from '../images/photo.jpeg'

function About () {
  return (
    <>
    <div className="separator">About Me</div>
    <div style={{width:"80vw", margin:"auto",marginTop:'2%', padding:'2%'}} >
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'50%',fontFamily:"Inknut Antiqua",fontWeight:500, marginTop:'auto', marginBottom:'2%'}}>
          <span style={{color:"red", fontSize:'3rem'}}>
            {"Raina Pan"}</span>
          <p style={{fontSize:'2rem'}}>a self-motivated <br/>Software Engineer <br/>based in Chicago, IL.</p>

        </div>
        <div style={{width:'50%', textAlign:"initial"}}>
         <img style={{width:'18rem', borderRadius:'50%', marginLeft:'auto'}} alt="yuchen" src={photo} />

        </div>
      </div>

      <div style={{ marginTop:'2%', fontFamily:"Lato", textAlign:'initial', fontSize:'1.2rem'}}>
        <li> At 18, nurtured the seed of interet in coding by creating my personal blog using HTML and CSS</li>
        <li> 2 years of coding experience specializing in JavaScript, React, and Node.</li>
        <li> Fast Learner and Self-taught. Worked as a Teaching Assistent at a coding bootcamp where I graduated from.</li>
        <li> Influencer with 75k followers on one social media platform.</li>
        <li> 7 years of experience in the banking industry, specializing in mortgage loans and personal banking.</li>

        <li> Passionate about baking and cooking. </li>
      </div>

    </div>
    </>
  )
}

export default About;