import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--black);
  color: white;
  font-size: 18px;
  padding-top: 3%;

    li {
        font-weight: 500;
        list-style: none;
    }

    nav {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }

    button {
        background-color: transparent;
        border: none; 
        color: var(--white);
        font-size: 20px;
    }

    .theme-dark {
        color: var(--black);
    }
`;

export const FlagStyle = styled.div`
        display: flex;
        width: 20%;
        justify-content: center;

        input {
            margin-Right: 5%;
        }
`;
