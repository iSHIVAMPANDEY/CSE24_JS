import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' , display: 'flex', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' , border: '1px solid #000000' }}>
            <Link to="/" style={{ margin: '0 10px' , textDecoration: 'none' , color: '#000000' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px' , textDecoration: 'none' , color: '#000000' }}>About</Link>
            <Link to="/contact" style={{ margin: '0 10px' , textDecoration: 'none' , color: '#000000' }}>Contact</Link>  
        </nav>
    )
}

export default Navbar