import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    //in this case the dispatch is not necessary
    const [{basket, user}] = useStateValue();
    console.log("user is: ", user)

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
            console.log("user is now", user);
        }
    }
    
    return(
        <div className="header">

            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon's logo" className="header_logo"/>
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>


            <div className="header_nav">

                <Link to={!user && '/login'}>
                    <div className="header_option" onClick={handleAuthentication}>
                        {/* <span className="header_optionLineOne"> Hello, {user ? user.email : 'Guest'} </span> */}
                        <span className="header_optionLineOne"> Hello, Guest </span>
                        <span className="header_optionLineTwo"> {user ? 'Sign Out' : 'Sign in'} </span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne"> Returns </span>
                    <span className="header_optionLineTwo"> & Orders </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne"> Your </span>
                    <span className="header_optionLineTwo"> Prime </span>
                </div>

                <Link to="/Checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />  
                        <span className="header_optionLineTwo header_basketCount"> {basket?.length} </span>
                    </div>
                </Link>

            </div>

        </div>

    );
}

export default Header;