import React from 'react'

import "./Feature.css"
import ItemCard from '../ItemCard/ItemCard'

const Feature = () => {
  return (
    <div className='feature'>
        <h2>featured product</h2>
        <div className="featureproduct">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
           
          
        </div>
      
    </div>
  )
}

export default Feature
