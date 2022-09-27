import Button from 'react-bootstrap/Button';
import Col, { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavFunction=()=> {
  return (
    <Navbar  bg="light" expand="lg" style={{padding:0,margin:0,height:'50px'}}>
      <Container >
        <Navbar.Brand href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="blue" class="mercado-match" width="40" height="40" focusable="false">
  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
</svg>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between'>
        <Form.Row style={{borderradius:1, backgroundColor:"#eef3f8", height:'40px'}}>
                    <Form.Group >
                        <InputGroup >
                            <InputGroup.Prepend>
                                <InputGroup.Text style={{backgroundColor:"#eef3f8", height:'40px'}}>
                                <FaSearch/>
                                  </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text" style={{height:'40px'}}
                                placeholder="Search"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',marginLeft:0 }}
            navbarScroll
          >
            <Nav.Link href="#action1" >
                <div className='mt-3 position-relative'>
                    <div className='mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" data-supported-dps="24x24" fill="currentColor" className="mercado-match align-bottom" width="30px" height="30px" focusable="false">
  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
</svg>
                    </div>
<h6  style={{fontSize:'12px'}}>home</h6>
                </div>
                </Nav.Link>
            <Nav.Link href="#action2">
                <div className='position-relative mt-3'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
</svg>
                    </div>
               
<h6   style={{fontSize:'12px'}}>
    my network
</h6>
                </div>
            </Nav.Link>
           <Nav.Link>
            <div className='position-relative mt-3' >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3V8.54l1.3 3A4 4 0 007 14z"></path>
</svg>
<h6  style={{fontSize:'12px'}}>
    Jobs
</h6>
            </div>
           </Nav.Link>
           <Nav.Link>
            <div className='position-relative mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
</svg>
<h6  style={{fontSize:'12px'}}>
    messages
</h6>
            </div>
           </Nav.Link>
           <Nav.Link>
            <div className='position-relative mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z"></path>
</svg>
<h6  style={{fontSize:'12px'}}>
    notifications
</h6>
            </div>
           </Nav.Link>
          
            <NavDropdown className='btn position-relative mt-2' title={
                <>
                <div>
                <img width="24" style={{borderRadius:12}} src="https://media-exp1.licdn.com/dms/image/C4D03AQEcB_fj3rDIDg/profile-displayphoto-shrink_100_100/0/1645373970103?e=1669852800&amp;v=beta&amp;t=ouL_3xtMaDnvqOSJlD9D0QmvYzQX4lpfITvqp4cOe30" height="24" alt="mohammad jan nazami" id="ember19" class="global-nav__me-photo ember-view"/>
               <div>
                <span  style={{fontSize:'12px'}}>Me</span>
               </div>
                </div>
                </>
            } id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='text-dark' style={{width:'250px', margin:'0px',padding:'0px',backgroundColor:'white'}} >{
                <>
                <div className='container' style={{marginLeft:'10px',padding:'0px'}} >
                    <div className='row' style={{margin:'0px',padding:'0px'}}>
                        <div className='col-2' style={{marginLeft:'2px',padding:'0px'}}>
                        <img width="30" style={{borderRadius:15}} src="https://media-exp1.licdn.com/dms/image/C4D03AQEcB_fj3rDIDg/profile-displayphoto-shrink_100_100/0/1645373970103?e=1669852800&amp;v=beta&amp;t=ouL_3xtMaDnvqOSJlD9D0QmvYzQX4lpfITvqp4cOe30" height="30" alt="mohammad jan nazami" id="ember19" class="global-nav__me-photo ember-view"/>
                        </div>
                        <div className='col-9' style={{marginLeft:'5px',padding:'0px'}} >
                        <h5 style={{fontSize:'15px',fontWeight:'bold',padding:'0px'}}>mohammad jan Nazami</h5>
                        <h6 style={{fontSize:'12px',padding:'0px'}}>software developer</h6>
                        <h6 style={{fontSize:'12px',padding:'0px'}}>Electrical engineer</h6>
                        </div>
                    </div>
                    <button className='text-primary border border-primary bg-white font-weight-bold' style={{fontSize:'15px', borderRadius:'15px',height:'25px', width:'200px'}}>View profile</button>
                    <div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <div style={{marginLeft:'10px',fontWeight:'bold'}}>
                    <a>Account</a>
                    </div>
                    <div flex>
                    <a style={{marginLeft:'10px'}} className='text-underline-hover text-dark'>try premium for free</a>
                    </div>
                    <div>
                    <a style={{marginLeft:'10px'}} className='text-underline-hover text-dark'>setting and privacy</a>
                    </div>
                    <div>
                    <a style={{marginLeft:'10px'}} className='text-underline-hover text-dark'>help</a>
                    </div>
                    <div>
                    <a style={{marginLeft:'10px'}} className='text-underline-hover text-dark'>language</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div style={{marginLeft:'10px',fontWeight:'bold'}}>
                    <a>Manage</a>
                    </div>
                    <div flex>
                    <a style={{marginLeft:'10px'}} className='text-underline-hover text-dark'>Posts & activity</a>
                    </div>
                    <div>
                    <a style={{marginLeft:'10px'}} className='text-underline-hover text-dark'>Job posting account</a>
                    </div>
                </div>
                <hr />
                <div>
                    <a style={{marginLeft:'10px'}}>
                        Sign Out
                    </a>
                </div>
                </>

                }</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown className='btn position-relative mt-2' title={
                <>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
</svg>
                  <div>
                <span  style={{fontSize:'12px'}}>Work</span>
               </div>
                </div>
                </>
            } id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" style={{width:'250px', margin:'0px',padding:'0px'}}>{
                <>
                <div className='container' style={{marginLeft:'10px',padding:'0px'}} >
                    <div className='row' style={{margin:'0px',padding:'0px'}}>
                        <div className='col-2' style={{marginLeft:'2px',padding:'0px'}}>
                        <img width="24" style={{borderRadius:12}} src="https://media-exp1.licdn.com/dms/image/C4D03AQEcB_fj3rDIDg/profile-displayphoto-shrink_100_100/0/1645373970103?e=1669852800&amp;v=beta&amp;t=ouL_3xtMaDnvqOSJlD9D0QmvYzQX4lpfITvqp4cOe30" height="24" alt="mohammad jan nazami" id="ember19" class="global-nav__me-photo ember-view"/>
                        </div>
                        <div className='col-9' style={{marginLeft:'5px',padding:'0px'}} >
                        <h5 style={{fontSize:'15px',fontWeight:'bold',padding:'0px'}}>mohammad jan Nazami</h5>
                        <h6 style={{fontSize:'12px',padding:'0px'}}>software developer</h6>
                        <h6 style={{fontSize:'12px',padding:'0px'}}>Electrical engineer</h6>
                        </div>
                        
                    </div>
                </div>
               
                
                <hr></hr>
                <div>
                    <div style={{marginLeft:'10px',fontWeight:'bold'}}>
                    <a>Account</a>
                    </div>
                    <div flex>
                    <a style={{marginLeft:'10px'}}>try premium for free</a>
                    </div>
                    <div>
                    <a style={{marginLeft:'10px'}}>setting and privacy</a>
                    </div>
                    <div>
                    <a style={{marginLeft:'10px'}}>help</a>
                    </div>
                    <div>
                    <a style={{marginLeft:'10px'}}>language</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div style={{marginLeft:'10px',fontWeight:'bold'}}>
                    <a>Manage</a>
                    </div>
                    <div flex>
                    <a style={{marginLeft:'10px'}}>Posts & activity</a>
                    </div>
                    <div>
                    <a style={{marginLeft:'10px'}}>Job posting account</a>
                    </div>
                </div>
                <hr />
                <div>
                    <a style={{marginLeft:'10px'}}>
                        Sign Out
                    </a>
                </div>
                </>

                }</NavDropdown.Item>
            
            </NavDropdown>
            <Nav.Link href="#" style={{color:'#915907', textDecoration:'underline'}} className='postion-relative mt-4'>
              try Primium for <br/> free
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavFunction;