import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: ()=>void;
}

function Modal({children, isOpen, onClose}: IProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      className="bg-white w-5/12 h-screen overflow-y-auto fixed right-0 slide-in"
      htmlOpenClassName="overflow-hidden"
      overlayClassName="bg-black bg-opacity-70 w-full h-full fixed top-0 left-0 bottom-0 right-0"
      onRequestClose={onClose}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
