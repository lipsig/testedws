import React from 'react'
import '../../styles/components/header/header.css'
import Searchbar from './searchBar/searchBar'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <Searchbar></Searchbar>
            <a href='/'>
            <img className='Logo' alt="logo" src={Logo}></img>
            </a>
        </div>
    )
}

export default Header
