import React from 'react';
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import './CartItem.scss';

interface item {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  checked: boolean;
  amount: number;
}

interface Props {
  item: item;
  isCart?: boolean;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function CartItem({
  item,
  isCart,
  onIncrease,
  onDecrease,
  onToggle,
  onRemove,
}: Props) {
  return (
    <div className="cart-item--container">
      <div className="cart-item__top">
        {isCart && (
          <div
            className="cart-item__top__checkbox"
            onClick={() => onToggle(item.id)}
          >
            {item.checked ? (
              <AiFillCheckCircle color="#34cdab" />
            ) : (
              <AiOutlineCheckCircle />
            )}
          </div>
        )}
        <div className="cart-item__top__name">{item.name}</div>
        {isCart && (
          <div
            className="cart-item__top__remove"
            onClick={() => onRemove(item.id)}
          >
            <AiOutlineClose />
          </div>
        )}
      </div>
      <div className="cart-item__info">
        <img className="cart-item__info__image" src={item.thumbnail} alt="" />
        <div className="cart-item__info__wrap">
          <div className="wrap__price">{item.price}원</div>
          <div className="wrap__amount">
            <button
              className="decrease-btn"
              onClick={() => onDecrease(item.id)}
            >
              <AiOutlineMinus />
            </button>
            <input type="text" value={item.amount} />
            <button
              className="increase-btn"
              onClick={() => onIncrease(item.id)}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
      {/* <ul className="cart-item__info__options">
        {items[0].options.map((option) => (
          <li className="options__option">{option}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default CartItem;
