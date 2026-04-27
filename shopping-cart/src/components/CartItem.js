import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-1">{item.name}</h6>
          <p className="mb-1 text-muted">${item.price.toFixed(2)} each</p>
          <p className="mb-0">Quantity: {item.quantity}</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-sm btn-secondary" onClick={handleDecrease}>
            -
          </button>
          <button className="btn btn-sm btn-secondary" onClick={handleIncrease}>
            +
          </button>
          <button className="btn btn-sm btn-danger" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
