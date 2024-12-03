
import React from 'react'
import './Glassmorph.scss'

const Glassmorph = ({ uri }) => {
  return (
    <>
      <img
        src={uri}
        alt=""
        className="detailbg"
      />
    </>
  )
}

export default Glassmorph