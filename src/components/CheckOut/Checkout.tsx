import { ImageWrapper, ProductsWrapper, Title, Description, Item, CheckOutButton } from './Checkout.styled';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../useContext';
import { Product } from '../../models';

export const Checkout = () => {
  const {items, total, checkOutList, handlePlaceOrder} = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(true);

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
          <Title>Check Out</Title>
          <CheckOutButton name = "placeOrder" disabled = {isEmpty} isInCart={isEmpty} onClick = {handlePlaceOrder}>
              <p>Place Order</p>
          </CheckOutButton>
      </div>
      <ProductsWrapper>
      {
        checkOutList.map((data: Product, index:any) => {
          return (
            <Item key = {index}>
              <ImageWrapper src = {data.imageUrl} alt = "image" />
              <Description>
                <h3>{data.name}</h3>
                <p>Price: ${data.price}.00</p>
                <p>Quantity: {data.quantity}</p>
                <p id = "item-total">${data.price * data.quantity}.00</p>
              </Description>
            </Item>
          )
        })
      }
      {
        (checkOutList.length === 0) 
        ? 
          "" 
        :
        <div>
          <div id = "underline"></div>
          <p id = "cart-total">Total: ${total}.00</p>
        </div>
      }
      </ProductsWrapper>
      
    </>
  );
};
