import {useState, useEffect} from 'react';
import {Form, Button, Spinner, Row, Col} from 'react-bootstrap';
import { Alert, AlertTitle } from '@mui/material'
import ResumeDL from './ResumeDL.js';
import gmail from '../images/gmail.png';
import './contact.css'

const init_input = {name:'', email:'', msg:''};

function Contact() {
  const [input, setInput] = useState(init_input);
  const [alert, setAlert] = useState(false)
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    if (alert) {
      setTimeout(()=>{
        setAlert(false)
      }, 3000)
    }
  }, [alert])
  const handleChange = (e) => {
    setInput({...input, [e.target.name]:e.target.value.trim()})
  }
  const sendMessage = (serviceId, templateId, variables) => {
    window.emailjs.send(
      serviceId, templateId, variables
    )
    .then(res => {
      console.log('send');
      setInput(init_input);
      setLoading(false)
      setAlert({...alert, variant:'success', msg:'Thank you for reaching out.'});
      setTimeout(() => {
        setValidated(false);
      },2000)
    })
    .catch(err => {
      setLoading(false)
      setAlert({...alert, variant:'error', msg:'Sorry. We cannot send email for the moment. Please try again later.'})
    });
  }
  // const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      const templateId = "template_p7b8iej";
      const serviceId="service_pw9rij5";
      setLoading(true)
      sendMessage(serviceId, templateId, { from_name: input.name, email:input.email, message:input.msg})
    }
  }
  return (
    <>
    <div className="separator">Contact</div>
    <div id="contact-container">
       <h3 style={{fontWeight:300}}>☕ Chat with me?</h3>
       <div style={{display:'flex', justifyContent:'center', margin:'5%'}}>
        <ResumeDL elem="contact"/>
        <Button className="contact-direct" style={{marginLeft:'5%'}} href="mailto:yuchenpan422@gmail.com">
          <img className="btn-img" src={gmail} alt="gmail"/>
          <span className="fs-sm-1">Email Me Directly</span>
        </Button>
       </div>
      {alert &&
      <Alert severity="success" onClose={() => setAlert(false)} style={{width:'100%'}}>
        <AlertTitle sx={{textAlign:'left'}}>Success!</AlertTitle>
         {"Thank you for reaching out. Really appriciate!"}
      </Alert>}
      {loading && <Spinner style={{display:'flex', margin:'auto'}} animation="border" variant="primary"/>}
      {(!alert && !loading) &&
      <Form noValidate validated={validated} onSubmit={handleSubmit} id='myForm'>

        <Row className="mb-2">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
             required
             type="text"
             name="name"
             placeholder="Your name"
             onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please provide your name!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" name="email"  placeholder="Your Email" onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">Please enter your email</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="vlidationCustomeMsg">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} required placeholder="Message..." onChange={handleChange} name="msg"/>
          <Form.Control.Feedback type="invalid">Please fill in your message!</Form.Control.Feedback>
        </Form.Group>

        <Button style={{margin:'4% auto'}} id="form-btn" type="submit">
          Send
        </Button>

        {/* </div> */}
      </Form>
    }
    </div>
    </>
  )
}

export default Contact;