import { ProductsWrapper, Title } from './Wishlist.styled';
import { ProductCard } from '../ProductCard';
import { Product } from '../../models';
import { useContext } from 'react';
import { WishListContext } from '../../useContext';

export const Wishlist = () => {
  const {itemLists} = useContext(WishListContext);
  return (
    <>
      <Title>Wishlist</Title>
      <ProductsWrapper>
        {itemLists.map((item: Product, index: number) => (
          <ProductCard {...item} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
