import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './emisionfac.css';

function EmisionFac() {
  const [cliente, setCliente] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [productos, setProductos] = useState([]);
  const [idProducto, setIdProducto] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4001/facturas", {
        cliente,
        cantidad,
        id_producto: idProducto
      });
      alert("Factura creada");
      setCliente('');
      setCantidad(1);
      setIdProducto('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Crear Factura</h1>
      <form onSubmit={handleSubmit} className="factura-form">
        <div>
          <label>
            Nombre del Cliente: <input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Cantidad: <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              min="1"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Producto:<select
              value={idProducto}
              onChange={(e) => setIdProducto(e.target.value)}
              required
            >
              <option value="">Selecciona un producto</option>
              {productos.map((producto) => (
                <option key={producto.Nombre} value={producto.Nombre}>
                  {producto.Nombre}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Crear Factura</button>
      </form>
      <div>
        <button>
          <Link to="/menufacturas">BACK</Link>
        </button>
      </div>
    </div>
  );
}

export default EmisionFac;
