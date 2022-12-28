import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Shopitem({handleCartUpdate}) {
  const location = useLocation()
  return (
    <div className='itemPage'>
      <div className="wrapper">
        <img src={location.state.img} alt="" />
        <h2>Brand</h2>
        <div>Watch Model</div>
        <div>{'$' + location.state.price}</div>
        <div className="buttons">
        <button onClick={() => {handleCartUpdate(location.state.index, false)}}>-</button>
        <button onClick={() => {handleCartUpdate(location.state.index, true)}}>+</button>
        </div>
        <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime qui tenetur, nostrum blanditiis voluptas. Suscipit, quaerat! Veritatis, cupiditate omnis.</div>
      </div>
    </div>
  )
}

