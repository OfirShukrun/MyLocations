import React from 'react'
import './popup.css'

const PopupProperties = ({ name, address, longitude, latitude, selectedCategory, closePopup }) => 
(
    <div className='popup'>
        <div className='popup_inner'>
            <p>Name : { name }</p>
            <p>Address : { address }</p>
            <p>Longitude : { longitude }</p>
            <p>Latitude : { latitude }</p>
            <p>Selected category : { selectedCategory }</p>
            <button onClick={ closePopup }>Close</button>
        </div>
    </div>
)

export default PopupProperties
