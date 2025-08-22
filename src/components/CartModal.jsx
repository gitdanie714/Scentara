// ...existing code...
import ReactModal from 'react-modal';
import { useState } from 'react';

function CartModal({ modalState, onRequestClose, className, overlayClassName, contentLabel }) {

  if(!modalState) {
    return null; // If modalState is false, do not render the modal
  }else{
  // Fetch cart items from localStorage or context
  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={onRequestClose}
      className={className}
      overlayClassName= {overlayClassName}
    > 
    </ReactModal>
  );
}
}

export default CartModal;