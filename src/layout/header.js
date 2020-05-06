import React,{useContext,useState} from "react"
import {Navbar,Collapse,NavbarToggler,NavbarBrand,NavItem,NavLink,Nav, NavbarText} from "reactstrap"
import { Link } from "react-router-dom"
import UserContext from "../context/usercontext"

const Header = () =>{
    const context = useContext(UserContext)
    const [isOpen ,setIsOpen] = useState(false)
    const toggler = () => setIsOpen(!false)


    return(
        <Navbar color="dark" light expand="md" className="shadow p-3">

            <NavbarBrand className="text-uppercase">
               <Link to="/signin" className="text-white">github search</Link>

            </NavbarBrand>
    <NavbarText className="text-white">{context.user?.email?context.user.email:""}</NavbarText>
            <NavbarToggler onClick={toggler}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto text-white" navbar>
                {context.user?(
                    <>
                <NavItem 
                >
                    <NavLink onClick={()=>{context.setUser(null)}} tag={Link} to="/" className="text-uppercase text-white">Log out</NavLink>
                </NavItem>
                </>):
                (
                    <>                
                    <NavItem  >
                    <NavLink tag={Link} to="/signin"className="text-uppercase text-white">Sign in</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/signup" className="text-uppercase text-white">Sign up</NavLink>
                </NavItem>
                </>
                )}
                
                
            </Nav>
            </Collapse>
        </Navbar>


    );
}
export default Header;
