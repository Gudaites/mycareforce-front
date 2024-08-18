import styled, { keyframes } from 'styled-components';

import SignIn from '../../assets/login-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);

  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      color: #18A0FB;
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      padding: 16px;
      border-radius: 10px;
      border: 1px solid #ddd;
      margin-bottom: 16px;
      background: #fff;
      transition: border-color 0.2s;

      &::placeholder {
        color: #aaa;
      }

      &:focus {
        border-color: #18A0FB;
        outline: none;
      }
    }

    button {
      margin-top: 16px;
    }

    a {
      color: white;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
    }
  }

  > a {
    color: #18A0FB;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignIn}) no-repeat center;
  background-size: cover;
`;
