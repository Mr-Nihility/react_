import { useEffect, useState } from 'react';
import {Text, Backdrop, ModalDiv, Button } from './Modal.styles';

export const Modal = ({ close, image, data }) => {
  useEffect(() => {
    const handleCloseByEsc = e => {
      if (e.code === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleCloseByEsc);
    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  });
const onClickBackdrop=(evt)=>{
  if (evt.currentTarget === evt.target) {
    close();
  }
}
  const { original_title, popularity, release_date } = data;
  return (
    <Backdrop onClick={onClickBackdrop}>
      <ModalDiv>
        <Text>Title: {original_title}</Text>
        <Text>Popularity: {popularity}</Text>
        <Text>Release date: {release_date}</Text>
        <Button type="button" onClick={close}>
          x
        </Button>
      </ModalDiv>
    </Backdrop>
  );
};

// export class Modal extends Component{

//     componentDidMount() {
//     window.addEventListener('keydown', this.handleCloseByEsc)
//     }
//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleCloseByEsc)
//     }
//     handleCloseByEsc = event => {
//         if (event.code === 'Escape') {
//             this.props.close()
//         }
//     };

//     render() {
//         const { image,close } = this.props;
//         return (
//             <Backdrop>
//                 <ModalDiv>
//                     <ImageStyle src={`https://image.tmdb.org/t/p/w500${image}`}
//         width="350"
//                         alt="Picture" />
//                     <button type="button" onClick={close}>x</button>
//             </ModalDiv>
//            </Backdrop>
//         )

//     }
// }
