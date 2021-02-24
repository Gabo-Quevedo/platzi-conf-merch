import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;

  const form = useRef(null);

  const handleSubmit = () => {
    const formDaa = new FormData(form.current);
    const buyer = {
      name: formDaa.get('name'),
      email: formDaa.get('email'),
      address: formDaa.get('address'),
      apto: formDaa.get('apto'),
      city: formDaa.get('city'),
      country: formDaa.get('country'),
      state: formDaa.get('state'),
      cp: formDaa.get('cp'),
      phone: formDaa.get('phone'),
    };
    addToBuyer(buyer);
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de Contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="qddress" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="cp" />
            <input type="text" placeholder="Tléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
