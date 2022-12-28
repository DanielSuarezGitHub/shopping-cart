import React from 'react'
import checkoutSvg from  '../assets/cart.svg'
import mapleSvg from '../assets/600px-Maple_Leaf.svg.png'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Head() {
  return (
    <div className='Head'>
    <nav>
        <ul>
            <li><Link to='/'><img src={mapleSvg} alt="" /><span>Worlds Watches</span></Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/checkout'><img src={checkoutSvg} alt="Checkout"/></Link></li>
        </ul>
    </nav>
    </div>
  )
}
