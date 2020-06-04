import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  img {
    height: 50px;
  }
`;

export const Copyright = styled.div`
  span {
    color: #c2c2c2;
  }
  a {
    text-decoration: none;
    color: #48157e;
    transition: color 0.2s;
    &:hover {
      color: ${darken(0.03, '#48157e')};
    }
  }
`;
