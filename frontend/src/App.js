import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react'
import Menu1 from "./links/Menu1"
import MenuStock from "./links/MenuStock"
import MenuFacturas from "./links/MenuFacturas"
import EmisionFac from "./links/EmisionFac"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu1/>}/>
        <Route path="/menustock" element={<MenuStock/>}/>
        <Route path="/menufacturas" element={<MenuFacturas/>}/>
        <Route path="/emisionfactura" element={<EmisionFac/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App