import React, { useState } from 'react';
import './Orderer.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface Props {
  onOrdererInput: (e: any) => void;
}
function Orderer({ onOrdererInput }: Props) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="orderer--container">
      <div className="orderer__header">
        주문자 정보
        {toggle ? (
          <IoIosArrowDown onClick={handleToggle} />
        ) : (
          <IoIosArrowUp onClick={handleToggle} />
        )}
      </div>
      <div className={toggle ? 'toggle-content' : ''}>
        <div className="orderer__info">
          <div className="orderer__info__label">보내는 분</div>
          <div className="toggle_content"></div>
          <input
            type="text"
            className="orderer__info__value"
            placeholder="이름을 입력해주세요"
            name="name"
            onChange={onOrdererInput}
          />
        </div>
        <div className="orderer__info">
          <div className="orderer__info__label">휴대폰</div>
          <input
            type="text"
            className="orderer__info__value"
            placeholder="'-' 없이 입력해주세요"
            name="phone"
            onChange={onOrdererInput}
          />
        </div>
        <div className="orderer__info">
          <div className="orderer__info__label">이메일</div>
          <input
            type="text"
            className="orderer__info__value"
            placeholder="이메일을 입력해주세요"
            name="email"
            onChange={onOrdererInput}
          />
        </div>
      </div>
    </div>
  );
}

export default Orderer;
