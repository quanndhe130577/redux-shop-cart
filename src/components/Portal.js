import React from "react";
import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
  const domElement = document.getElementById('portal');

  return (
    ReactDOM.createPortal(children, domElement)
  );
}

export default Portal;