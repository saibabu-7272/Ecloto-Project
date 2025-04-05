import {useState} from 'react'

import './index.css'

import ProductCard from '../product-card';

import CartItem from '../cart-item';

const PRODUCTS = [
    { id: 1, name: "Laptop", price: 500, quantity : 0 },
    { id: 2, name: "Smartphone", price: 300, quantity : 0 },
    { id: 3, name: "Headphones", price: 100, quantity : 0 },
    { id: 4, name: "Smartwatch", price: 150, quantity : 0 },
  ];
  
  const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0, quantity : 1 };
  const THRESHOLD = 1000;

const ProductsPage = () => {
    const [products, updateProducts] = useState(PRODUCTS)

    const getCartList = () => {
        const findCartItems = products.filter(eachProduct => eachProduct.quantity >= 1)
        return findCartItems
    }

    const onIncreaseProductQuantity = (id) =>{
        updateProducts(() => products.map(eachProduct => { if(eachProduct.id === id){
            return {...eachProduct, quantity:eachProduct.quantity + 1}
        }else{
            return eachProduct
        }} ))
        
    }

    const onDecreaseProductQuantity = (id) =>{
        updateProducts(() => products.map(eachProduct => { if(eachProduct.id === id){
            return {...eachProduct, quantity:eachProduct.quantity - 1}
        }else{
            return eachProduct
        }} ))
        
    }

    const cartList = getCartList()

    const getCartPrice = cart =>{
        let total = 0 
        if(cart.length > 0){
            cart.map(eachItem => total += eachItem.quantity * eachItem.price)
        }
        return total

    }

    const totalCartPrice = getCartPrice(cartList)

    const WinPrize = totalCartPrice >= THRESHOLD

    return(
    <div className='products-page'>
        <h1 className='products-page-title'>Shopping Cart</h1>
        <h2>Products</h2>
        <ul className='products-container'>
            {products.map(eachProduct => 
            <ProductCard key={eachProduct.id} eachProduct={eachProduct} onIncreaseProductQuantity={onIncreaseProductQuantity} />
            )}
        </ul>
        <h2>Cart Summary</h2>
        <div className='cart-summary'>
            <div className='flex-space-between'>
                <p>Subtotal:</p>
                <p>₹{totalCartPrice}</p>
            </div>
            <hr/>
            {WinPrize ? <p>You got a free Wireless Mouse!</p> : <div className='progress-container'>
                <p className='note-text'>Add ₹{THRESHOLD - totalCartPrice} more to win FREE Wireless Mouse!</p>
                <progress max={`${THRESHOLD}`} value={`${totalCartPrice}`} className='progress-bar' />
            </div>}
            
        </div>
        {cartList.length > 0 ?  <><h2>Cart Items</h2>
        <ul className='cart-items-container'>{cartList.map(eachCartItem => <CartItem onDecreaseProductQuantity={onDecreaseProductQuantity} onIncreaseProductQuantity={onIncreaseProductQuantity} eachCartItem={eachCartItem} key={eachCartItem.id} />)}</ul>
        </>: 
        <div className='empty-card'>
            <p className='small-text'>Your cart is empty</p>
            <p className='small-text'>Add Items To Show Here!</p>
        </div> }
        {WinPrize && <div className='prize-card flex-space-between'>
            <span><p>{FREE_GIFT.name}</p>
            <p>₹{FREE_GIFT.price} x {FREE_GIFT.quantity} = ₹{FREE_GIFT.quantity * FREE_GIFT.price}</p></span>
            <p className='label-text'>FREE GIFT</p></div>}
        
    </div>)
}

export default ProductsPage
