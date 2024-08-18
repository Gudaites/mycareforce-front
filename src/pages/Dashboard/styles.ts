import styled from 'styled-components';

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 64px 0px 64px;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #18A0FB;
  font-weight: 700;
  line-height: 22.4px;
  text-align: left;

`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;  /* Alinha horizontalmente */
  margin: 64px auto;
  max-width: 1120px;
`;

export const ListCards = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;  /* Alinha horizontalmente */
  flex-wrap: wrap;
  max-width: 1120px;
`;
