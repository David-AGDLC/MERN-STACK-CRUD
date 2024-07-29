import React from 'react'
import { Link } from 'react-router-dom';

function main() {
  return (
    <div>HOLA
    <div>
    <button>
      <Link to = "/menustock">Pag Stock</Link>
    </button>
  </div>
  <div>
    <button>
      <Link to = "/menufacturas">Facturas</Link>
    </button>
  </div>
  
  </div>
  )
}

export default main