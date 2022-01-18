import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Form, Col, Button, NavLink } from "react-bootstrap";
import PropTypes from 'prop-types'
import './Userlogin.css'


const ResetPassword =({storeInputHandler, email, password, formResetSubmitHandler})=>{
    
    ResetPassword.propTypes ={
        storeInputHandler: PropTypes.func.isRequired,
        formResetSubmitHandler: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired,
        
    }


      const formSubmitHandler = event =>{
          event.preventDefault()
    
          if(!email || !password){
               alert ("You must enter a password and username!")
          } 
         // TODo Call API to submit the form
  }

    return(
        <Container className="can">
          <Row>
             <Col>   
               <Form onSubmit={formResetSubmitHandler} className="form">
                 <Container>
                 <br/><br/>
                  <h2>Gale Health Login</h2>
                   <hr/>            
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                         className="text" 
                         type="text"
                         value={email}
                         name="email"
                         onChange={storeInputHandler}
                         placeholder="Enter email address" 
                         required
                      />
                   </Form.Group>
                
                  <Form.Group 
                         className="mb-3" 
                         controlId="formBasicCheckbox">
                       <Form.Check 
                          type="checkbox" 
                          label="Check me out" />
                  </Form.Group>
                  <Button 
                         className="login" 
                         variant="primary" 
                         type="submit">
                    Reset Password
                  </Button>
                  <hr/>
                  <NavLink>Login Now</NavLink>
                  <br/>
                   <br/>
                 </Container>
                </Form>                         
             </Col>     
         </Row> 
       </Container>      
      )
    }

export default ResetPassword