import React from 'react'
import "./Footer.css"
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="content">
          <div className="footerbox1 footerbox">
            <Link className="companylogo footerlink">
              <img src={logo} alt="" />
              <h3>sprint</h3>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem suscipit quisquam aut ad dignissimos enim aperiam, illum odit at ducimus! Atque eveniet aut unde sunt harum id aliquam sit, soluta in quos adipisci cum repellat rem sint? Sequi, harum corrupti. Recusandae aperiam doloremque unde!</p>
          </div>
          <div className="footerbox2 footerbox">
            <h3>shop by category</h3>
            <Link className='footerlink'>T-shirt</Link>
            <Link className='footerlink'>shirt</Link>
            <Link className='footerlink'>jeans</Link>
            <Link className='footerlink'>trousers</Link>
            <Link className='footerlink'>jacket</Link>
            <Link className='footerlink'>shoes</Link>
            <Link className='footerlink'>sweater</Link>
            <Link className='footerlink'>accessories</Link>
          </div>
          <div className="footerbox3 footerbox">
            <h3>consumer Policy</h3>
            <Link className='footerlink'>privacy policy</Link>
            <Link className='footerlink'>terms & conditions</Link>
            <Link className='footerlink'>return policy</Link>
          </div>
          <div className="footerbox4 footerbox">
            <h3>contact</h3>
            <Link className='footerlink'><i className="fa-solid fa-envelope-open"></i> developwithdubey@gmail.com</Link>
            <Link className='footerlink'><i className="fa-solid fa-phone"></i> 7572077736</Link>
            <Link className='footerlink'><i className="fa-brands fa-whatsapp"></i> connect on whatsapp</Link>
            <Link className='footerlink'><i className="fa-regular fa-map"></i> MNIT Jaipur</Link>
          </div>
          <div className="footerbox5 footerbox">
            <h3>social</h3>
            <Link className='footerlink'><i className="fa-brands fa-github"></i>github</Link>
            <Link className='footerlink'><i className="fa-brands fa-linkedin"></i>linkedin</Link>
            <Link className='footerlink'><i className="fa-brands fa-instagram"></i>instagram</Link>
          </div>
        </div>
        <div className="rights"><p>all rights are reserved with sprint</p></div>
    </footer>
  )
}

export default Footer
