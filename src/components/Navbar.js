import React,{useState,Fragment} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
  
const Index=(props)=> {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Fragment>
             <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
             </ul>
        </Fragment>
    )
}

export default Index;