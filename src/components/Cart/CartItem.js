import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../state/cart-slice';

const CartItem = (props) => {
  const { name, quantity, totalPrice, price } = props.item;
  const disptch = useDispatch();

  const removeCartItemHandler = () => {
    disptch(cartActions.removeItemFromCart(props.item.id));
  }

  const addCartItemhandler = () => {
    disptch(cartActions.addItemToCart({ ...props.item, quantity: 1 }));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItemHandler}>-</button>
          <button onClick={addCartItemhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
