import './index.css'

const ProductCard = (props) =>{
    const {eachProduct,onIncreaseProductQuantity} = props
    const onAddProduct = ()=> {
        onIncreaseProductQuantity(eachProduct.id)
    }
    return (
            <li className='product-card'>
                <p className='product-name'>{eachProduct.name}</p>
                <p>₹{eachProduct.price}</p>
                <button onClick={onAddProduct} className='add-cart-btn' type="button">Add To Cart</button>
            </li>
    )
}

export default ProductCard

