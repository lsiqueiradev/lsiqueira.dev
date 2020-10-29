import styled from 'styled-components';

const Container = styled.div`

  @media (max-width: 768px){
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 576px){
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default Container;