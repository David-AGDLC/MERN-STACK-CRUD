import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './menustock.css';

const MenuStock = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://localhost:4001/productos");
        setProductos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductos();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <table className="productos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.ID}>
              <td>{producto.ID}</td>
              <td>{producto.Nombre}</td>
              <td>{producto.Precio}</td>
              <td>{producto.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button>
          <Link to="/">Pag principal</Link>
        </button>
      </div>
    </div>
  );
};

export default MenuStock;
