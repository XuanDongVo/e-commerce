import React from 'react'
import './NewLetter.css'
const NewLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Ofers On You Email</h1>
            <p>Subscribe to our newletter and say updated</p>
            <div>
                <input type="email" placeholder='Your Email' />
                <button>Subscibe</button>
            </div>
        </div>
    )
}

export default NewLetter;