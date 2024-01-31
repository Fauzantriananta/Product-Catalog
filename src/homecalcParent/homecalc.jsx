import React from 'react'
import './homecalc.css';
import homeLogo from '../assets/img/homeLogo.png'
import panah from '../assets/img/panah.png'

const homecalc = () => {
  return (
    <div class="home-calc">
        <div class="halaman">
            <p>VPN IP Dual Homing</p>
        </div>
        <div class="logo-home">
            <img src={homeLogo} alt=""  />
        </div>
        <div class="cursor-right">
            <img src={panah} alt="" />
        </div>
        <div class="calc">Calculator</div>
    </div>
  )
}

export default homecalc
