import styled from 'styled-components';

type WrapperProps = {
  background: string;
};

type AddButtonProps = {
  isInCart: boolean;
};

type WishButtonProps = {
  isInList: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 340px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

export const AddButton = styled.div<AddButtonProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.isInCart ? '#E55336' : '#60c95d')};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 0.3s;
  }

  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;

export const WishButton = styled.div<WishButtonProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 60px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 0.3s;
  }`;

export const TextContainer = styled.div`
  display: grid;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  width: 100%;
  padding: 10px;
  padding-left: 20px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  margin: 0;
  color: #ffffff;
`;

export const SubTitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

export const Quantity = styled.p `
  font-weight: bolder;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

export const MinusButton = styled.button `
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 85px;
right: 90px;
width: 30px;
height: 30px;
background: white;
border-radius: 50%;
border-color: transparent;
padding: 5px;
cursor: pointer;

:hover {
  transform: scale(1.2);
  transition: 0.3s;
}`;

export const PlusButton = styled.button `
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 85px;
right: 45px;
width: 30px;
height: 30px;
background: white;
border-radius: 50%;
border-color: transparent;
padding: 5px;
cursor: pointer;

:hover {
  transform: scale(1.2);
  transition: 0.3s;
}`;
