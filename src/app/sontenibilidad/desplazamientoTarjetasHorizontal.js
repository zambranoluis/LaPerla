function desplazar(direccion) {
  console.log(`desplazar ${direccion}`)
  // const contenedor = document.getElementById('contenedor-desplazable'); // Reemplaza con el selector de tu contenedor
  // const desplazamiento = 300; // Ajusta la distancia de desplazamiento según tus necesidades

  // // Obtener la posición actual de desplazamiento
  // const scrollPos = contenedor.scrollLeft;

  // // Calcular la nueva posición de desplazamiento
  // let nuevaPos = scrollPos;
  // if (direccion === 'derecha') {
  //   nuevaPos += desplazamiento;
  // } else if (direccion === 'izquierda') {
  //   nuevaPos -= desplazamiento;
  // }

  // // Aplicar la nueva posición al contenedor
  // contenedor.scrollTo({
  //   left: nuevaPos,
  //   behavior: 'smooth' // Desplazamiento suave
  // });
}

export {
  desplazar
}