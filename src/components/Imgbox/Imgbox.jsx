
import React from 'react'
import './Imgbox.scss'

const Imgbox = ({ url, cls }) => {
  return (
    <>
      <img src={url} alt="" className={`w100 ${cls}`} />
    </>
  )
}

export default Imgbox