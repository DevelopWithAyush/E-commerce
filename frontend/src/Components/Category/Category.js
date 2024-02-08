import React from 'react'
import { Link } from 'react-router-dom'
import "./Category.css"
const Category = () => {
  return (
    <div className='category'>
        <h2>Category</h2>
        <div className="categorybox">
            <Link className="categorycard">
                <img className='categoryimg' src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className='linkbox'><Link className='catlink'>T-shirt</Link></div>
            </Link>
            <Link className="categorycard">
                <img className='categoryimg' src="https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fHww" alt="" />
                <div className='linkbox'><Link className='catlink'>shirt</Link></div>
            </Link>
            <Link className="categorycard">
                <img className='categoryimg' src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amVhbnN8ZW58MHx8MHx8fDA%3D" alt="" />
                <div className='linkbox'><Link className='catlink'>jeans</Link></div>
            </Link>
            <Link className="categorycard">
                <img className='categoryimg' src="https://images.unsplash.com/photo-1624378442362-d3247e8126ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyb3VzZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                <div className='linkbox'><Link className='catlink'>trousers</Link></div>
            </Link>
            <Link className="categorycard">
                <img className='categoryimg' src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fHww" alt="" />
                <div className='linkbox'><Link className='catlink'>jacket</Link></div>
            </Link>
            <Link className="categorycard">
                <img className='categoryimg' src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww" alt="" />
                <div className='linkbox'><Link className='catlink'>shoes</Link></div>
            </Link>
            <Link className="categorycard">
                <img className='categoryimg' src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className='linkbox'><Link className='catlink'>sweater</Link></div>
            </Link>
            <Link className="categorycard">
                <img className='categoryimg' src="https://images.unsplash.com/photo-1526492664619-72c7c4c62835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className='linkbox'><Link className='catlink'>accessories</Link></div>
            </Link>
     
        </div>
      
    </div>
  )
}

export default Category
