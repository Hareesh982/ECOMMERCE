import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    const cartCounter = useSelector(state => state.cart.cartCounter);
    return (
        <div style={{marginBottom:'100px'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className='rounded' src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=400x300&vertical=center" 
                        alt="" width="75px" />
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link className="nav-link active" aria-current="page" to="/">All</Link>
                                <Link className="nav-link" aria-current="page" to="/men">Men</Link>
                                <Link className="nav-link" aria-current="page" to="/women">Women</Link>
                                <Link className="nav-link" aria-current="page" to="/kids">Kids</Link>
                                <Link className="nav-link" aria-current="page" to="/beauty">Beauty</Link>
                                <Link className="nav-link" aria-current="page" to="/living">Home & Living</Link>
                                <Link className='icon mt-2 px-3' to="/cart" >   
                                    <span className='fas fa-shopping-bag'></span> {cartCounter}
                                </Link>
                        </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Navbar