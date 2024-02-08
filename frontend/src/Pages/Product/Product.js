import React from 'react'
import "./Product.css"
import ItemCard from '../../Components/ItemCard/ItemCard'
function Product() {
  return (
    <div className='productpage'>
      <div className="bubblewapper">
        <div className="bubble bubble1">product</div>
        <div className="bubbles bubble1">product</div>
        <div className="bubble bubble2">product</div>
        <div className="bubbles bubble2">product</div>
        <div className="bubble bubble3">product</div>
        <div className="bubbles bubble3">product</div>
        <div className="bubble bubble4">product</div>
        <div className="bubbles bubble4">product</div>
        <div className="bubble bubbles5">Product</div>
        <div className="bubbles bubble5">Product</div>
        <div className="bubble bubble6">product</div>
        <div className="bubbles bubble6">product</div>
        <div className="bubble bubble7">product</div>
        <div className="bubbles bubble7">product</div>
        {/* <div className="bubble bubble8">product</div> */}
        {/* <div className="bubbles bubble8">product</div> */}
        {/* <div className="bubble bubble9">product</div> */}
        {/* <div className="bubbles bubble9">product</div> */}
        {/* <div className="bubble bubbles10">Product</div> */}
        {/* <div className="bubbles bubble510">Product</div> */}
      </div>
      <div className="productcontainer">
        <div className="filters">
          <div className="filterhead">
            <h4>filters</h4>
            <button>clear all</button>
          </div>
          <hr className='horizontalline' />
          <div className="price">
            <h4>Price</h4>
            <p>under 50</p>
            <p>under 50</p>
            <p>under 50</p>
            <p>under 50</p>
            <p>under 50</p>
            <p>under 50</p>
            <p>under 50</p>
          </div>
        </div>
        <div className="product">

          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
        
        </div>
      </div>

    </div>
  )
}

export default Product
