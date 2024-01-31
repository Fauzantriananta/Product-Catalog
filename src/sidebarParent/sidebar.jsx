import React from 'react'
import './sidebar.css';
import logo from '../assets/img/logo.png'

const sidebar = () => {
  return (
    <div class="sidebar">
            <div class="header">
                <div class="list-item">

                </div>
                <div class="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            
            <div class="main">
                <div class="list-item">
                    <a href="#">
                        <span class="description">Home</span>
                    </a>
                </div>
                <div class="list-item">
                    <a href="#">
                        <span class="description">Product By Category</span>
                    </a>
                </div>
                    <ul class="sub-menu">
                        <li class="option1"><a class="sub-menu1" href="#">Communication</a></li>
                        <li class="option2"><a class="sub-menu2" href="#">Datacomm</a></li>
                        <li class="option3"><a class="sub-menu3" href="#">Internet</a></li>
                        <li class="option4"><a class="sub-menu4" href="#">Wireless</a></li>
                    </ul>

                <div class="list-item">
                    <a href="#">
                        <span class="description">Product By CFU</span>
                    </a>
                </div>
                <ul class="sub-menu">
                    <li class="option5"><a class="sub-menu5" href="#">EBIS</a></li>
                    <li class="option6"><a class="sub-menu6" href="#">WIBS</a></li>
                    <li class="option7"><a class="sub-menu7" href="#">CONS</a></li>
                </ul>

                <div class="list-item">
                    <a href="#">
                        <span class="description">Discussion</span>
                    </a>
                </div>
                <div class="list-item">
                    <a href="#">
                        <span class="description">Product Competency Center</span>
                    </a>
                </div>
                <div class="list-item">
                    <a href="#">
                        <span class="description">Product Retirement</span>
                    </a>
                </div>
                <div class="list-item">
                    <a href="#">
                        <span class="description">Product Request</span>
                    </a>
                </div>
                <div class="list-item">
                    <a href="#">
                        <span class="description">Contact Us</span>
                    </a>
                </div>
            </div>
            
        </div>
  )
}

export default sidebar
