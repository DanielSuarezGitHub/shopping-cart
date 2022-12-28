import React from 'react'
import { Link } from 'react-router-dom'
import { watchAssets } from '../watchimages'



export default function Shop({handleCartUpdate}) {
  const watches = watchAssets.map((watch, indx) => {
    return {img: watch, price: 10000, index: indx}
  })
  return (
    <div id='Store'>
    {watches.map((watch) => {
      return(
            <div className='storeItem' key={watch.index}>
              <Link to={{pathname: `/shop/${watch.index}`}} state={watch}><img src={watch.img} alt="" /></Link>
              <div className="price">$ {watch.price}</div>
              <button onClick={() => {handleCartUpdate(watch.index, true)}}>Add To Cart</button>
            </div>
      )
    })}
    </div>
  )
}
