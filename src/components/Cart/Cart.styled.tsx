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
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const CheckOutButton = styled.button<CheckOutButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -1.3cm;
  right: -9cm;
  border-radius: 10px;
  background: deepskyblue;
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
