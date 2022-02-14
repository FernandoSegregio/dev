import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 18px;
  padding-top: 3%;

    li {
        font-weight: 500;
        list-style: none;
    }

    nav {
        display: flex;
        width: 70%;
        justify-content: space-evenly;
    }

    button {
        background-color: transparent;
        border: none; 
        color: ${(props) => props.theme.text};
        font-size: 20px;
        width: 10%;
    }
`;

export const FlagStyle = styled.div`
        display: flex;
        width: 20%;
        justify-content: center;
        column-gap: 5%;
`;
