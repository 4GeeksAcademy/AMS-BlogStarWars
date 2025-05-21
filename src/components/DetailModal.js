import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DetailModal = ({ show, handleClose, entity }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{entity.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Description</h5>
                <p>{entity.description}</p>
                <h5>Details</h5>
                <ul>
                    {Object.entries(entity).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailModal;