import React from 'react'
import { Link } from 'react-router-dom'
import setCurrentProduct from '../actions/setCurrentProduct'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'

function IconList({product}) {
    let dispatch = useDispatch()

    let handleCurrentProduct = () =>{
        dispatch(setCurrentProduct(product))
    }

    let handleCart = () => {
        dispatch(addToCart(product))
        alert("item added to cart")
    }

    return (
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons" >
            
            <Link onClick={handleCurrentProduct} to={{pathname : '/details'}}>
                <li className="icon">
                    <span className="fas fa-expand-arrows-alt"></span>
                </li>
            </Link>
            
            <Link onClick={() => alert('wishlist')}>
                <li className="icon mx-3">
                    <span className="far fa-heart"></span>
                </li>
            </Link>
            
            
            <Link onClick={handleCart}>
                <li className="icon">
                    <span className="fas fa-shopping-bag"></span>
                </li>
            </Link>
        </ul>
    )
}

export default IconList