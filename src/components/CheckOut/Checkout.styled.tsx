import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

type CheckOutButtonProps = {
  isInCart: boolean;
};


export const ProductsWrapper = styled.div`
  display: block;
  width: fit-content;
  gap: 20px;

  #cart-total {
    color: grey;
    margin-left: 7.95cm;
    font-size: 22px;
  }

  #underline {
    height: 2px;
    background: darkslategray;
  }
`;

export const CheckOutButton = styled.button<CheckOutButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -1.3cm;
  right: -8.3cm;
  border-radius: 10px;
  background: slateblue;
  border-color: transparent;
  width: 3.8cm;
  height: 30px;
  padding: 5px;
  cursor: pointer;

  :hover {
    transform: scale(1.115);
    transition: 0.3s;
  }

  :disabled {
    background: transparent;
    border-color: transparent;
  }

  p {
    font-size: 17px;
    margin: 0;
    color: white;
  }
`;

export const ImageWrapper = styled.img`
  height: 3cm;
  width: 2cm;
  margin: 0;
  margin-bottom: 0.5cm;
  border-radius: 10px;
`;

export const Description = styled.div`
  margin: 0;
  padding: 0cm;

  h3 {
    font-size: 17px;
    margin: 0;
    margin-top: 0.3cm;
    margin-left: 0.3cm;
    margin-bottom: 0.3cm;
    font-weight: normal;
    padding: 0;
  }

  p {
    color: grey;
    font-size: 14px;
    margin: 0;
    margin-bottom: 0.2cm;
    margin-left: 0.3cm;
  }

  #item-total{
    margin-top: -0.3cm;
    margin-left: 7.5cm;
    font-size: 22px;
  }

  #cart-totals{
    color: transparent;
  }
`;

export const Item = styled.div`
  display: flex;
`;