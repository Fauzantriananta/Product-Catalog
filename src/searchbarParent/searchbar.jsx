import React from 'react'
import './searchbar.css';
import searchLogo from '../assets/img/searchLogo.png'
import profil from '../assets/img/profil.png'

const searchbar = () => {
  return (
    <div id="search">
        <input type="text" id="input" placeholder="Search Product" />
        <img src={searchLogo} alt="" />

    <div class="profil">
        <img src={profil} alt="" />
    </div>
    </div>
  )
}

export default searchbar
