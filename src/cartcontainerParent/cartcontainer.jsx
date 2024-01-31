import React from 'react'
import './cartcontainer.css';
import shoppingcart from '../assets/img/shoppingcart.png'
import wallet from '../assets/img/wallet.png'
import plus from '../assets/img/plus.png'

const cartcontainer = () => {
  return (
    <div class="cart-container">
        <div class="cart-text">
            <img src={shoppingcart} alt="" />
            <div class="text01">
            <p class="text-bold">VPN IP Dual Homing</p>
            <p class="text-light">Cart</p>
            </div>
        </div>
        <div class="cart-text">
            <img src={wallet} alt="" />
            <div class="text01">
            <p class="text-bold">Total</p>
            <p class="text-light">Total Cart</p>
            </div>
        </div>
        <div class="cart-text">
            <img src={plus} alt="" />
        </div>
    </div>
  )
}

export default cartcontainer
