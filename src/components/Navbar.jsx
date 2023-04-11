import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="Nav" id="Nav">
      <NavLink className="Link" to="/Home">
        Inicio
      </NavLink>
      <NavLink className="Link" to="/Favorites">
        Favoritos
      </NavLink>
    </div>
  )
}

export default Navbar
