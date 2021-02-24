import React from 'react';

import '../styles/components/Success.css'

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>GaBo, Gracias por tu Compra</h2>
        <span>Tu pedido llegará en 3 dia a tu dirección</span>
        <div className="Success-map">
          GoogleMaps
        </div>
      </div>
    </div>
  );
}

export default Success;