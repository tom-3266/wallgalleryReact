import React from "react";
import './modal.css'

const Modal = ({selectedImg,setSelectedImg}) => {
  const handleEvent = (e) => {
    if(e.target.classList.contains('modal')){
      setSelectedImg(null)
    }
  }
  return (
    <div className="modal" onClick={handleEvent}>
      <img src={selectedImg} alt="modal pic" />
    </div>
  );
};

export default Modal;
