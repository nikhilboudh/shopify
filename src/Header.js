import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
function Header() {
    const [{basket, user}, dispatch] = useStateValue();

const handleAuthentication= () =>{
    if (user) {
auth.signOut();
    }
}

    return (
        <div className="header"> 
        <Link to="/">
<img
className="header_logo"

 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7mkEBKFBYU39BwXvygoy2TkjeTH1AKgaEA&usqp=CAU"/>

</Link> 

<div     className="header_search">
    <input className="header_searchInput" type="text"/>
 <SearchIcon className="header_searchIcon"/></div>
  
  <div className="header_nav">
  
  <Link to={!user && '/loginpage'}>

 <div onClick={handleAuthentication} className="header_option">
     <span className="header_optionLineOne">Hello guest</span>
     <span className="header_optionLineTwo">{user ?
     'Sign Out': 'Sign In'}</span>

 </div>
 </Link>
  
 


 

 <Link to="/Checkout">
     
<div className="header_optionbasket">
<ShoppingCartIcon/>
    <span className="header_optionLineTwo header_basketCount">{basket ?.length}</span>
</div>

 </Link>
 
  
  </div>
        </div>
    )
}

export default Header;
