import React, { useState, useEffect } from 'react';
import './Payment.scss';

interface Props {
  price: number;
}

const Payment = ({ price }: Props) => {
  const [fee, setFee] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // 총 상품금액이 30000원 이상일 때 배송비 추가
    if (price >= 30000) {
      setTotalPrice(price);
      setFee(false);
    } else {
      setTotalPrice(price + 3000);
      setFee(true);
    }
  }, [price]);

  return (
    <div className="payment--container">
      <div className="payment__price">
        <div className="payment__price__label">총 상품금액</div>
        <div className="payment__price__value">{price} 원</div>
      </div>
      <div className="payment__price">
        <div className="payment__price__label">할인금액</div>
        <div className="payment__price__value">0 원</div>
      </div>
      <div className="payment__price">
        <div className="payment__price__label">배송비</div>
        <div className="payment__price__value">
          {fee ? '+3,000 원' : '0 원'}
        </div>
      </div>
      <div className="payment__notice">30,000원 이상 구매 시, 무료배송</div>
      <div className="payment__price total">
        <div className="payment__price__label">결제예정금액</div>
        <div className="payment__price__value">{totalPrice} 원</div>
      </div>
      <div className="payment__btn">{totalPrice}원 주문하기</div>
    </div>
  );
};

export default Payment;
