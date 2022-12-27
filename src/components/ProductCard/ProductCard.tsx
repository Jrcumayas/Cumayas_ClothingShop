import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
  WishButton,
} from './ProductCard.styled';

import { BsCartCheck, BsCartX } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { Product } from '../../models';
import { useContext, useState, useEffect } from 'react'
import { CartContext, WishListContext } from '../../useContext';

export const ProductCard = ({ id, name, price, imageUrl, quantity }: Product) => {
  const {items, addItemToCart, removeItemFromCart} = useContext(CartContext);
  const {itemLists, addItemToWishlist, removeItemFromWishlist} = useContext(WishListContext)
  const [isItemInList, setIsItemInList] = useState(false);
  const [isItemInCart, setIsItemInCart] = useState(false);

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
    const item = { id, name, price, imageUrl, quantity }
    if(isItemInCart){
      removeItemFromCart(item);
      setIsItemInCart(false);
    } else{
      addItemToCart(item);
      setIsItemInCart(true);
    }
  }

  const handleWishButton = () => {
    const item = { id, name, price, imageUrl, quantity }
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
        <SubTitle>${price}.00</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};