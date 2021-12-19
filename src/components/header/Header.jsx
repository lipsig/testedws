import React from 'react'
import '../../styles/components/header/header.css'
import Searchbar from './searchBar/searchBar'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const query = new URLSearchParams(location.search);    
    const sQuery = query.get('album')

    return (
        <div className='Header'>
            <Searchbar sQuery={sQuery}></Searchbar>
            <a href='/'>
                <img className='Logo' alt="logo" src={Logo}></img>
            </a>
        </div>
    )
}

export default Header
