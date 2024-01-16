import styled from 'styled-components';

const AucunFavorisDisponibleWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100%;
  text-align: center;
  padding: ${({ theme }) => theme.sizes.size_24} ${({ theme }) => theme.sizes.size_24};
`;

export default AucunFavorisDisponibleWrapper;
