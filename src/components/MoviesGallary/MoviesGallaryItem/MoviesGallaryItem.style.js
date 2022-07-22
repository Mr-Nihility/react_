import styled from 'styled-components';

const MovieItem = styled.li`
  width: 350px;
  background: rgba(75, 22, 233, 0.34);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(75, 22, 233, 0.3);
  overflow: hidden;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const MovieSpan = styled.span`
  padding: 5px;
  display: inline-block;
  background-color: blueviolet;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

const MovieButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px 30px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 20px;
  background-color: red;
  transition-property: background-color;
  transition-timing-function: linear;
  transition-duration: 1000ms;
  transform-origin: left;
  &:hover {
    background-color: blueviolet;
  }
`;

export { MovieItem, Wrapper, MovieSpan, MovieButton };
