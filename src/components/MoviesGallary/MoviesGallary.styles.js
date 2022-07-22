import styled from 'styled-components';

const MoviesGallaryStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 20px 20px;
`;

export { MoviesGallaryStyles };
