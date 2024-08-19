import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 0;
  display: flex;
  align-items: center;
  border-bottom: solid #F1F1F1;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;

  > img {
    height: 80px;
  }

  h1 {
    margin-left: 1rem;
    color: #18A0FB;
    font-size: 20px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  line-height: 24px;
  align-items: baseline;

  span {
    color: #f4ede8;
  }

  strong {
    color: #18A0FB;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }
`;
