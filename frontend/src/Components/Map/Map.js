import React from 'react'
import "./Map.css"

const Map = () => {
  return (
    <div className='mapsection'>
        <div className="maptext">
        <i className="fa-solid fa-location-dot"></i>
        <h2> Store location</h2>
        </div>
        <iframe title='1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2622055555253!2d75.81377467624509!3d26.86340926220618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db72dfc7af075%3A0x2713db16c8b90987!2sVinodini%20%26%20Ganga%20hostel%20H14%20Malviya%20Institute%20of%20Technology%20(MNIT)%20Malviya%20Nagar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1705887572834!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
    </div>
  )
}

export default Map
