import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addOne, clearCart, remove } from '../features/cart/cartSlice'


const Shop = () => {
    const dispatch = useDispatch()
    const { cartItems, } = useSelector((state) => state.cart)
    const {amount, total} = useSelector((state) => state.cart)
    

    const navigate = useNavigate()

    const goToCart = () => {
        navigate("/cart")
    }

    return (
        <div>
            <div className='navbar'>
                <button onClick={goToCart}>({total}) cart items</button>

            </div>

            <div className='shop'>
                {cartItems.map((product) => (

              <div key={product.id} className='product-card'>
                        <div className='image-card'>
                            <img src={product.productImage} />
                        </div>
                        <h4>{product.productName}</h4>
                        <h4>{product.price}</h4>

                        <button onClick={() => {
                            dispatch(addOne(product.id))
                        }}>Add to cart ({amount})</button>


                    </div>
                ))}

            </div>
        </div>
    )
}

export default Shop