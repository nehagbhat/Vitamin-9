import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="h5 mb-0">Cart ({totalQuantity} items)</h2>
          <button className="btn btn-sm btn-danger" onClick={handleClearCart} disabled={items.length === 0}>
            Clear Cart
          </button>
        </div>
        <div className="card-body">
          {items.length === 0 ? (
            <p className="text-muted mb-0">Your cart is empty.</p>
          ) : (
            <ul className="list-group list-group-flush mb-3">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          )}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fw-semibold">Total Price:</span>
            <span className="fs-5">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
