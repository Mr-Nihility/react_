import { Component } from "react";
import { Backdrop,ModalDiv,ImageStyle } from "./Modal.styles";

export class Modal extends Component{

    componentDidMount() {
    window.addEventListener('keydown', this.handleCloseByEsc)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseByEsc)
    }
    handleCloseByEsc = event => {
        if (event.code === 'Escape') {
            this.props.close()
        }
    };
    
    render() {
        const { image,close } = this.props;
        return (
            <Backdrop>
                <ModalDiv>
                    <ImageStyle src={`https://image.tmdb.org/t/p/w500${image}`}
        width="350"
                        alt="Picture" />
                    <button type="button" onClick={close}>x</button>
            </ModalDiv>
           </Backdrop> 
        )

    }
}