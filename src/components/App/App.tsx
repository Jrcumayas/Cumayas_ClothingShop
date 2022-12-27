import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { CartContext, WishListContext } from '../../useContext';
import { useReducer, useState, useEffect } from 'react';
import { add, emptyCart, initialState, remove, shopReducer, update, update_quantity } from "../../useReducer";
import { Product } from '../../models';
import { ShopState, WishState } from '../../useReducer';
import { Wishlist } from '../Wishlist';
import { Checkout } from '../CheckOut'

export const App = () => {
  const [cartList, cartDispatch] = useReducer(shopReducer, initialState);
  const [wishList, wishlistDispatch] = useReducer(shopReducer, initialState)
  const [checkOutList, setCheckOutList] = useState([]);

  useEffect(() => {
    var storedItems = JSON.parse(localStorage.getItem('listItems')!);
    var wishList = JSON.parse(localStorage.getItem('wishItems')!);
      if(storedItems){
        updatePrice(storedItems);
        cartDispatch(add(storedItems));
      }
      if(wishList){
        wishlistDispatch(add(wishList));
      }
  }, [])

  const addItemToCart = (product: Product) => {
    const newList = cartList.items.concat(product);
    updatePrice(newList);
    cartDispatch(add(newList));
    localStorage.setItem('listItems', JSON.stringify(newList));
  }

  const addItemToWishlist = (product: Product) => {
    const newList = wishList.items.concat(product);
    wishlistDispatch(add(newList));
    localStorage.setItem('wishItems', JSON.stringify(newList));
  }

  const removeItemFromCart = (product: Product) => {
    const newList = cartList.items.filter((item: Product) => item.name !== product.name)
    updatePrice(newList)
    cartDispatch(remove(newList))
    localStorage.setItem('listItems', JSON.stringify(newList));
  }

  const removeItemFromWishlist = (product: Product) => {
    const newList = wishList.items.filter((item: Product) => item.name !== product.name)
    wishlistDispatch(remove(newList))
    localStorage.setItem('wishItems', JSON.stringify(newList));
  }

  const updatePrice = (items: any) => {
    let total = 0;
    items.forEach((product: Product) => total = total + (product.price * product.quantity));
    cartDispatch(update(total));
  }

  const handleCheckOutButton = () => {
    setCheckOutList(cartList.items);
  }

  function updateCartQuantity(item: Product, sign: any){
    const temp = [...cartList.items];
    const filter = temp.filter(product => product.name === item.name);
    const index = temp.indexOf(filter[0]);
    if ( sign === '+'){
      temp[index].quantity = temp[index].quantity + 1;
      cartDispatch(update_quantity([...temp]));
    } else {
      if (!(temp[index].quantity - 1 === 0)) {
        temp[index].quantity = temp[index].quantity - 1;
        cartDispatch(update_quantity([...temp]));
      }
    }
    updatePrice(cartList.items);
    localStorage.setItem('listItems', JSON.stringify([...temp]));
  }

  const handlePlaceOrder = () => {
    setCheckOutList([]);
    cartDispatch(emptyCart(0));
    localStorage.setItem('listItems', JSON.stringify([]));
    alert("Order has been placed. Check email for confirmation.");
  }
  
  const cartValues: ShopState = {
    items: cartList.items,
    total: cartList.total,
    handlePlaceOrder: handlePlaceOrder,
    checkOutList: checkOutList,
    handleCheckOutButton: handleCheckOutButton,
    updateCartQuantity: updateCartQuantity,
    addItemToCart,
    removeItemFromCart
  }

  const wishListValues: WishState = {
    itemLists: wishList.items,
    total: wishList.total,
    addItemToWishlist: addItemToWishlist,
    removeItemFromWishlist: removeItemFromWishlist
  }
  
  return (
    <CartContext.Provider value={cartValues}>
      <WishListContext.Provider value = {wishListValues}>
        <Wrapper>
          <TitleWrapper>
            <h1>Clothing Shop Starter Project</h1>
          </TitleWrapper>
          <LinksWrapper>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/wishlist'>Wishlist</Link>
            <Link to='/checkout'>Check out</Link>
          </LinksWrapper>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>
        </Wrapper>
      </WishListContext.Provider>
    </CartContext.Provider>
  );
};
