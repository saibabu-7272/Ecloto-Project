import './index.css'

const CartItem = (props) => {
    const {eachCartItem,onDecreaseProductQuantity,onIncreaseProductQuantity} = props
    const onDecrease = () => {
        onDecreaseProductQuantity(eachCartItem.id)
    }
    const onIncrease = () => {
        onIncreaseProductQuantity(eachCartItem.id)
    }
    return (<li className='cart-item'>
        <span><p className='product-name'>{eachCartItem.name}</p>
        <p className='price-text'>₹{eachCartItem.price} x {eachCartItem.quantity} = ₹{eachCartItem.quantity * eachCartItem.price}</p></span>
        
        <span className='buttons-container'><button className='decrease-btn' type="button" onClick={onDecrease}>-</button>{eachCartItem.quantity}<button className='increase-btn' type="button" onClick={onIncrease}>+</button></span>
        </li>)
}

export default CartItem