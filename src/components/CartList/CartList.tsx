import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
  WishButton,
  Quantity,
  PlusButton,
  MinusButton
} from './CartList.styled';

import { BsCartCheck, BsCartX } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { Product } from '../../models';
import { useContext, useState, useEffect } from 'react'
import { CartContext, WishListContext } from '../../useContext';

export const CartList = ({ id, name, price, imageUrl, quantity }: Product) => {
  const {items, removeItemFromCart, updateCartQuantity} = useContext(CartContext);
  const {itemLists, addItemToWishlist, removeItemFromWishlist} = useContext(WishListContext)
  const [isItemInList, setIsItemInList] = useState(false);
  const [isItemInCart, setIsItemInCart] = useState(false);
  const item = { id, name, price, imageUrl, quantity };

  useEffect(() => {
    const itemsInCart = items.find((product: { name: string; }) => product.name === name);
    const itemsInWishList = itemLists.find((product: { name: string; }) => product.name === name);

    if (itemsInCart) {
      setIsItemInCart(true);
    } else {
      setIsItemInCart(false);
    }

    if (itemsInWishList) {
      setIsItemInList(true);
    } else {
      setIsItemInList(false);
    }
  }, [items, itemLists, name, price]);

  const handleCartButton = () => {
    removeItemFromCart(item);
    setIsItemInCart(false);
  }

  const handleWishButton = () => {
    if(isItemInList){
      removeItemFromWishlist(item);
      setIsItemInList(false);
    } else{
      addItemToWishlist(item);
      setIsItemInList(true);
    }
  }

  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isItemInCart} onClick={handleCartButton}>
        <p>{(isItemInCart) ? <BsCartX/ > : <BsCartCheck />}</p>
      </AddButton>
      <WishButton isInList={isItemInList} onClick={handleWishButton}>
        <p>{(isItemInList) ? <AiFillHeart color = "red" size = {25}/> : <AiOutlineHeart size = {25}/>}</p>
      </WishButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>${price}.00 {quantity}x</SubTitle>
        <Quantity>{quantity*price}</Quantity>
        <PlusButton onClick = {() => updateCartQuantity(item, '+')}><AiOutlinePlus /></PlusButton>
        <MinusButton onClick = {() => updateCartQuantity(item, '-')}><AiOutlineMinus /></MinusButton>
      </TextContainer>
    </Wrapper>
  );
};
