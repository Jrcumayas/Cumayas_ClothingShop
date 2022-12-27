import { ProductsWrapper, Title } from './Cart.styled';
import { CartList } from '../CartList';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../useContext';

import {
  CheckOutButton
} from './Cart.styled';

export const Cart = () => {
  const {items, total, handleCheckOutButton} = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (items.length === 0){
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
  }
  }, [items])
  
  return (
    <>
      <div>
          <Title>Cart Total: ${total}.00</Title>
          <CheckOutButton isInCart={isEmpty} onClick = {handleCheckOutButton}>
              <p>Check Out</p>
          </CheckOutButton>
      </div>
      <ProductsWrapper>
        {items.map((data, index) => (
          <CartList key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
