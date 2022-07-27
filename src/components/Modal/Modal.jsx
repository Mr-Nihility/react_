import { useEffect, useState } from 'react';
import { Backdrop, ModalDiv, ImageStyle } from './Modal.styles';

export const Modal = ({ close, image }) => {
  const [loaded, setLoaded] = useState(false);

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
  const loadedHandler = () => {
    setLoaded(true);
  };
  return (
    <Backdrop>
      <ModalDiv>
        <ImageStyle
          src={`https://image.tmdb.org/t/p/w500${image}`}
          width="350"
          alt="Picture"
          onLoad={loadedHandler}
        />
        {!loaded && (
          <h3
            style={{
              fontSize: 50,
              color: 'white',
            }}
          >
            Loading...
          </h3>
        )}
        <button type="button" onClick={close}>
          x
        </button>
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
