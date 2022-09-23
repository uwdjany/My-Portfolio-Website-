import React from 'react'
import{Container, Navbar,Nav, NavLink} from 'react-bootstrap'
import Home from './home'
import './navstyle.css'
const NavComponent = () => {

  const menuData =[
    {
      path:"/",
      name:"Home"

    },
    {
      path:"/about",
      name:"About"
    },
    {
      path:"/contact",
      name:"Contact"
    },
    {
      path:"/service",
      name:"Service"
    }
  ]
return(
  <>
  <Navbar className='navbar' expand="lg">
  <Container>
    <Navbar.Brand href="#home" className="brand">UwDjanati</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
     
        {
          menuData.map((item)=>(
<NavLink to ={item.path} key={item.name}>
  <div className='list_item'>{item.name}</div>

</NavLink>
          ))
        }
      </Nav>
      <Nav>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Home/>
</>

)
  
}

export default NavComponent;