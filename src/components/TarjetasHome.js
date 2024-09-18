import { stringify } from "postcss"

function clickTarjeta (itemId) {
  console.log(`tarjeta clickaeada ${itemId} `)

  const tarjeta = document.getElementById(itemId)
  const imagen = document.getElementById(`imagen${itemId}`)
  const texto = document.getElementById(`contenedorTexto${itemId}`)
  const contenedor = document.getElementById(`contenedor${itemId}`)


  texto.classList.toggle("hidden")
  contenedor.classList.toggle("contenedorCerrado");
  contenedor.classList.toggle("contenedorAbierto");


  

}

export {
  clickTarjeta
}