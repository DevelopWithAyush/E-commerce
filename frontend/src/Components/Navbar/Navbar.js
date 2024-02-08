import React, { useState } from 'react'
import logo from "../Assets/logo.png"
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"
// import { AlertContext } from '../../Context/Alertcontext/AlertState'
function Navbar() {

    const location = useLocation()
  

    const [transform, setTransform] = useState({ transform: "scaleX(1)" })
    const [rotate1, setRotate1] = useState({ transform: "rotate(0deg)" })
    const [rotate2, setRotate2] = useState({ transform: "rotate(0deg)" })
    const [btn1, setbtn1] = useState({ width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
    const [btn2, setbtn2] = useState({ width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
    const [btn3, setbtn3] = useState({ width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
    const [btn4, setbtn4] = useState({ width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
    const [btn5, setbtn5] = useState({ width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
    const [wapper, setWapper] = useState({ bottom: "-100%" })
    const handlemenubtn = () => {
        if (transform.transform === "scaleX(1)") {
            setTransform({ transform: "scaleX(0)" })
            setRotate1({ transform: "rotate(45deg)" })
            setRotate2({ transform: "rotate(-45deg)" })
            setbtn1({ fontSize: "2rem", width: "100px", height: "100px", transform: "translate(-200%,0%)" })
            setbtn2({ fontSize: "2rem", width: "170px", height: "170px", transform: "translate(-150%,-150%)" })
            setbtn3({ fontSize: "2rem", width: "120px", height: "120px", transform: "translate(50%,-350%)" })
            setbtn4({ fontSize: "2rem", width: "150px", height: "150px", transform: "translate(200%,-200%)" })
            setbtn5({ fontSize: "2rem", width: "150px", height: "150px", transform: "translate(200%,-50%)" })
            setWapper({ bottom: "0%" })
        } else {
            setTransform({ transform: "scaleX(1)" })
            setRotate1({ transform: "rotate(0deg)" })
            setRotate2({ transform: "rotate(0deg)" })
            setbtn1({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
            setbtn2({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
            setbtn3({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
            setbtn4({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
            setbtn5({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
            setWapper({ bottom: "-100%" })
        }
    }
    const handleclosemenubtn = () => {
        setTransform({ transform: "scaleX(1)" })
        setRotate1({ transform: "rotate(0deg)" })
        setRotate2({ transform: "rotate(0deg)" })
        setbtn1({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
        setbtn2({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
        setbtn3({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
        setbtn4({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
        setbtn5({ fontSize: "1rem", width: "55px", height: "55px", transform: "translate(-50%,-50%)" })
        setWapper({ bottom: "-100%" })
    }
    const [search, setSearch] = useState({ transform: "scaleX(0)" })
    return (
        <>
            <header className="head">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <form className='search' style={search}>
                    <input type="text" className='searchbox' />
                    <button className='searchbtn' onClick={(e) => {
                        e.preventDefault()
                        setSearch({ transform: "scaleX(0)" })
                    }}>search</button>

                </form>

                <div className="btn">
                    <button className="fa-solid fa-magnifying-glass"
                        onClick={() => { search.transform === 'scaleX(0)' ? setSearch({ transform: "scaleX(1)" }) : setSearch({ transform: "scaleX(0)" }) }} ></button>
                    <Link className='link fa-solid fa-cart-shopping' to="/cart" ></Link>
                    <Link className= {`link login ${location.pathname ==="/loginsignup"?"loginactive":""}`} to="/loginsignup">login</Link>

                </div>
            </header>
            <div className="wapper" onClick={handleclosemenubtn} style={wapper} ></div>
            <div className="menustyle">
                <div className="menubtn" onClick={handlemenubtn}>
                    <span className='firstline line' style={transform}></span>
                    <div className="secondline">
                        <span className="secondline1 line" style={rotate1}></span>
                        <span className="secondline2 line" style={rotate2}></span>
                    </div>
                    <span className='thirdline line' style={transform}></span>
                </div>
                <Link className="btn1 menubtnbubble" onClick={handlemenubtn} to="/" style={btn1} >home</Link>
                <Link className="btn2 menubtnbubble" onClick={handlemenubtn} to="/product" style={btn2}>product</Link>
                <Link className="btn3 menubtnbubble" onClick={handlemenubtn} to="/contact" style={btn3}>contact</Link>
                <Link className="btn4 menubtnbubble" onClick={handlemenubtn} to="/about" style={btn4}>about us</Link>
                <Link className="btn5 menubtnbubble" onClick={handlemenubtn} to="/service" style={btn5}>services</Link>
            </div>
        </>
    )
}

export default Navbar
