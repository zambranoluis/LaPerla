const sostenibilidad1 = [
  {
    id: "sostenibilidad1",
    icono: "/sostenibilidad/ICONO.png",
    titulo: "Cumplimiento e implementación de la normativa vigente",
    texto: "En La Perla, nos adherimos estrictamente a todas las leyes, regulaciones y estándares relevantes para la producción y comercialización del banano. Nos mantenemos actualizados sobre los cambios en la normativa y trabajamos en estrecha colaboración con las autoridades gubernamentales para asegurar el cumplimiento total."
  },
  {
    id: "sostenibilidad2",
    icono: "/sostenibilidad/ICONO.png",
    titulo: "Adopción de prácticas de producción responsables y certificación",
    texto: "Implementamos las mejores prácticas agrícolas en todas nuestras operaciones, desde el manejo del suelo y el agua hasta el control de plagas y enfermedades. Estamos orgullosos de estar certificados bajo la última versión de la norma **Global GAP**  de aseguramiento integrado de fincas, una de las normas de certificación más reconocidas a nivel mundial en materia de agricultura sostenible."
  },
  {
    id: "sostenibilidad3",
    icono: "/sostenibilidad/ICONO.png",
    titulo: "Compromiso inquebrantable con los principios de inocuidad alimentaria",
    texto: "Implementamos un sistema de gestión de inocuidad alimentaria de última generación que abarca todos los aspectos de la producción, desde la siembra hasta el empaque. Nos aseguramos de que nuestros productos cumplan con los más altos estándares de calidad e higiene para garantizar la seguridad de nuestros consumidores."
  },
  {
    id: "sostenibilidad4",
    icono: "/sostenibilidad/ICONO.png",
    titulo: "Proporcionar los recursos necesarios para garantizar la inocuidad alimentaria",
    texto: "Invertimos continuamente en la capacitación de nuestro personal, la implementación de nuevas tecnologías y la mejora de nuestros procesos para garantizar la inocuidad alimentaria en todos los niveles de la organización. Creemos que la inocuidad alimentaria es una responsabilidad compartida y estamos comprometidos a proporcionar a nuestros empleados los recursos y el apoyo que necesitan para cumplir con los más altos estándares."
  }
]

const sostenibilidad2 = [
  {
    id: "sostenibilidad5",
    icono: "/sostenibilidad/ICONO.png",
    titulo: "Cumplimiento e implementación de la normativa vigente",
    texto: "Adhesión estricta a las leyes, regulaciones y estándares relevantes para la producción y comercialización del banano."
  },
  {
    id: "sostenibilidad6",
    icono: "/sostenibilidad/ICONO2.png",
    titulo: "Prácticas agrícolas responsables",
    texto: "Implementación de las mejores prácticas agrícolas para la salud del planeta y el bienestar de las personas."
  },
  {
    id: "sostenibilidad7",
    icono: "/sostenibilidad/ICONO3.png",
    titulo: "Certificación Global GAP",
    texto: "Cumplimiento de la última versión de la norma Global GAP de aseguramiento integrado de fincas."
  },
  {
    id: "sostenibilidad8",
    icono: "/sostenibilidad/ICONO.png",
    titulo: "Inocuidad alimentaria",
    texto: "Compromiso inquebrantable con los principios de seguridad y calidad de los productos."
  },
  {
    id: "sostenibilidad9",
    icono: "/sostenibilidad/ICONO2.png",
    titulo: "Recursos para la inocuidad",
    texto: "Inversión continua en capacitación, tecnología y mejora de procesos para garantizar la seguridad alimentaria."
  },
  {
    id: "sostenibilidad10",
    icono: "/sostenibilidad/ICONO3.png",
    titulo: "Gestión ambiental",
    texto: "Protección del medio ambiente a través del manejo sostenible del suelo, agua, energía y residuos."
  },
  {
    id: "sostenibilidad11",
    icono: "/sostenibilidad/ICONO.png",
    titulo: "Bienestar social",
    texto: "Promoción del desarrollo social y económico de las comunidades con las que trabajamos."
  },
  {
    id: "sostenibilidad12",
    icono: "/sostenibilidad/ICONO2.png",
    titulo: "Transparencia y comunicación",
    texto: "Compromiso con la transparencia y la comunicación abierta con nuestros stakeholders."
  }

]


// function desplazar(direccion) {
//   console.log(`desplazar ${direccion}`)

// }

const desplazamientoHorizontal = (direccion) => {
  console.log("desplazar", direccion);
  const contenedor = document.getElementById('contenedor-desplazable1');
  const tarjetaWidth = contenedor.querySelector('div').offsetWidth + 16; // Ancho de la tarjeta + margen

  if (direccion === 'derecha') {
    contenedor.scrollBy({ left: tarjetaWidth, behavior: 'smooth' });
  } else if (direccion === 'izquierda') {
    contenedor.scrollBy({ left: -tarjetaWidth, behavior: 'smooth' });
  }
};

const desplazamientoVertical = (direccion) => {
  const contenedor = document.getElementById('contenedor-desplazable2');
  const tarjetaHeight = 2*(contenedor.querySelector('div').offsetHeight) + 16; // Altura de la tarjeta + margen

  if (direccion === 'abajo') {
    contenedor.scrollBy({ top: tarjetaHeight, behavior: 'smooth' });
  } else if (direccion === 'arriba') {
    contenedor.scrollBy({ top: -tarjetaHeight, behavior: 'smooth' });
  }
};


export {
  sostenibilidad1,
  sostenibilidad2,
  desplazamientoHorizontal,
  desplazamientoVertical
}