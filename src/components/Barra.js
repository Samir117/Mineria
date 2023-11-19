import React from "react";


export const Barra = () =>{
    return(
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/Inicio">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Dashboard">Dashboard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Admin">Admin</a>   
  </li>
</ul>
    );
}

export default Barra;