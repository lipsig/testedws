import React from 'react'
import '../../styles/components/header/header.css'
import Searchbar from './searchBar/searchBar'
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='Header'>
            <Searchbar></Searchbar>
            <img className='Logo' alt="logo" src={Logo}></img>
        </div>
    )
}

export default Header
