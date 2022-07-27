import styled from 'styled-components';

const Backdrop = styled.div`
  /* position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); */
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const ModalDiv = styled.div`
  width: 100%;
  max-width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px;
  background-color: rgba(51, 37, 37, 0.34);
  transform: translateX(-50%) translateY(-50%) translateZ(0);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const ImageStyle = styled.img`
  display: block;
  margin: 0 auto;
`;

// const CloseBtn = styled.button`
//   position: absolute;
//   right: 32px;
//   top: 32px;
//   width: 0px;
//   height: 0px;
//   opacity: 0.7;
//   &:hover {
//     opacity: 1;
//   }
//   &:before,
//   &:after {
//     position: absolute;
//     left: 15px;
//     content: '';
//     height: 33px;
//     width: 2px;
//     background-color: #333;
//   }
//   &:before {
//     transform: rotate(45deg);
//   }
//   &:after {
//     transform: rotate(-45deg);
//   }
// `;

export { Backdrop, ModalDiv, ImageStyle };
