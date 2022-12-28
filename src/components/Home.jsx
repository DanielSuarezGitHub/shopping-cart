import React from 'react'
import { Link } from 'react-router-dom'
import rolexVideo from '../assets/classic-watches-day-date-2022-cover-video.mp4'

export default function Home() {
  return (
    <>
      <video playsInline={true} autoPlay={true} loop={true} muted={true} src={rolexVideo} ></video>
      <div className='hero'>
        <h1>Time Redefined</h1>
        <button><Link to='/shop'>Shop Now</Link></button>
      </div>
    </>
  )
}
