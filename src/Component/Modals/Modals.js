import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class Modals extends React.Component  {

    constructor(){
        super();
        this.state={
            show:false
        }
    }
    handleModal(){
        this.setState({show: !this.state.show})
    }
    render (){
    return (
        <div>
            <Button onClick={()=>this.handleModal()}>Buy Now</Button>
            <Modal show={this.state.show}>
                <Modal.Header>Modal Heading</Modal.Header>
                <Modal.Body>Thanks for perchuse this course</Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>this.handleModal()}>ok</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
    };
};

export default Modals;