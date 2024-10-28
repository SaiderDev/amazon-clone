import { useContext } from 'react';
import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AuthContext from '../../Context/authContext.js';
import ShoppingContext from '../../Context/Shopping/shoppingContext.js';



const Header = () => {
    const newContext =useContext(AuthContext)
    const shoppingContext = useContext(ShoppingContext)
    const {basket} = shoppingContext

  return (
      <header className="header">
            <Link to="/">
            <img className='header_logo'
                 src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                 alt="Amazon logo"/>
            </Link>
                <div className="header_search">
                    <input className="header_input" type='text'/>
                    <SearchIcon className="search_icon"/>
                </div>
                <div className='header_nav'>
                    {newContext.isLoggedIn?(<Link to="/">
                        <div className='header_option' onClick={newContext.onLogout}>
                            <span className='header_optionOne'>Hello User</span>
                            <span className='header_optionTwo'>Sign Out</span>
                        </div>
                    </Link>):(<Link to="/login">
                        <div className='header_option'>
                            <span className='header_optionOne'>Hello Guest</span>
                            <span className='header_optionTwo'>Sign In</span>
                        </div>
                    </Link>)}
    
                    <Link to='/order'>
                    <div className='header_option'>
                        <span className='header_optionOne'>Returns</span>
                        <span className='header_optionTwo'>& Orders</span>
                    </div>
                    </Link>
                    <div className='header_option'>
                        <span className='header_optionOne'>Your</span>
                        <span className='header_optionTwo'>Prime</span>
                    </div>
    
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className='header_optionTwo header_basketCount'>{basket?.length}</span>
                    </div>
    
                </div>
        </header>
        

  
  )
  
}

export default Header