import React from 'react'
import { watchAssets } from '../watchimages'

export default function Checkout({handleCartUpdate, cart}) {
let cartArray = Object.entries(cart)
const sum = Object.values(cart).reduce((partialSum, a) => partialSum + a, 0);
  return (
    <div id='Checkout'>
      {cartArray.map((item, indx) => {
        return (
          <div key={indx} className='item'>
            <img src={watchAssets[item[0]]} alt="" />
            <div className='info'>
              <div className="quantity">Quantity {item[1]}</div>
              <div className="price">{`Price: $${item[1] * 10000}`}</div>
            </div>
          </div>
        )
      })}
      <div className="total">Total: ${sum * 10000}</div>
      <button className="checkout">Checkout</button>
    </div>
  )
}
