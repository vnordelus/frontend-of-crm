import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Form, Col, NavLink, Button } from "react-bootstrap";
import PropTypes from 'prop-types'
import './Userlogin.css'
import ReactDOM from "react-dom";



const LoginPage =({storeInputHandler, email, username, password, changeForm})=>{
    
    LoginPage.propTypes ={
        storeInputHandler: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        changeForm: PropTypes.func.isRequired
    }


      const formSubmitHandler = event =>{
          event.preventDefault()
    
          if(!username || !password){
               alert ("Please input enter a password and username!")
          } 
          
         // TODo Call API to submit the form
  }
   const formResetSubmitHandler =(event)=>{
      event.preventDefault()

      if(!email){
        alert ("You must enter your email!")
      } 
      console.log(email)
     // TODo Call API to submit the form 
      }
    
    return(
        <Container className="can">
          <Row>
             <Col>   
               <Form onSubmit={formSubmitHandler} className="form">
                 <Container>
                 <br/><br/>
                  <h2>Gale Health Login</h2>
                   <hr/>            
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control 
                         className="text" 
                         type="text"
                         value={username}
                         name="username"
                         onChange={storeInputHandler}
                         placeholder="Enter user name" 
                         required
                      />
                   </Form.Group>
                   <Form.Group 
                        className="mb-3" 
                        controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                         className="text" 
                         type="password" 
                         onChange={storeInputHandler}
                         value={password}
                         name="password"
                         placeholder="Password" 
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
                    Login
                  </Button>
                  <hr/>
                 { /*User will be redirected to his page to reset password*/}

                  <a href="#!"onClick={()=>changeForm('reset')}>Forgot Password?</a>
                  
                  <br/>
                   <br/>
                 </Container>
                </Form>                         
             </Col>     
         </Row> 
       </Container>        
      )
    }
  

export default LoginPage