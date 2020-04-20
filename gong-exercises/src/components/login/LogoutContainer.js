import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";

export default function LogoutContainer(props){
    const [isOpen, setIsOpen] = useState(true);

    const showModal = () => {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };

    return (
        <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
            <Modal.Title>Log out?</Modal.Title>
            </Modal.Header>
            <Modal.Body>hope you remember your pass to log back in.... </Modal.Body>
            <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button>Log out</button>
            </Modal.Footer>
        </Modal>
    );
}