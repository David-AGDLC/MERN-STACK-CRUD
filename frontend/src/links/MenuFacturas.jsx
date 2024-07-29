import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './menufacturas.css';

function MenuFacturas() {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    const fetchFacturas = async () => {
      try {
        const response = await axios.get("http://localhost:4001/facturas");
        setFacturas(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFacturas();
  }, []);

  return (
    <div>
      <h1>Facturas</h1>
      <table className="facturas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Monto</th>
            <th>Idproducto</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((factura) => (
            <tr key={factura.ID}>
              <td>{factura.ID_F}</td>
              <td>{factura.Cliente}</td>
              <td>{factura.N_Producto}</td>
              <td>{factura.Cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button>
          <Link to="/">Pag principal</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/emisionfactura">Nueva Factura</Link>
        </button>
      </div>
    </div>
  );
};
export default MenuFacturas;