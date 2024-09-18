'use client'


import Image from 'next/image';

import "./TarjetaHome.css"


import {clickTarjeta} from "./TarjetasHome.js";


const TarjetasHome = () => {

  const items = [
    { id: 0, titulo: "Siembra", text: ["Drenaje","Selección del Clon","Cables vías","Densidad de siembra"], imagen: "/home/imagenTarjeta1.png", icono: "/home/icono1.png"},
    { id: 1, titulo: "Cultivo", text: ["Fertilización","Protección de Racimo","Control de Densidad","Control de Malas Hierbas y Plagas"], imagen: "/home/imagenTarjeta2.png", icono: "/home/icono2.png"},
    { id: 2, titulo: "Cosecha", text: ["Corte de Fruta","Transporte a empacadora","Programación de Cosecha"], imagen: "/home/imagenTarjeta3.png", icono: "/home/icono3.png"},
    { id: 3, titulo: "Empaque", text: ["Recibo de Frutas","Selección de Fruta","Desmane","Lavado y Tratamiento de Corona"], imagen: "/home/imagenTarjeta4.png", icono: "/home/icono4.png"},
  ];


  return (
    <>
      <div className="gap-14 py-20 p-12 grid md:grid-cols-2 xl:grid-cols-4 place-content-center place-items-center">
        {items.map((item) => (
          <div key={`tarjeta${item.id}`}  id={`tarjeta${item.id}`} 
          className="flex flex-col justify-center items-start border-2 border-[#7EA451]  rounded-xl hover:cursor-pointer select-none"
          onMouseEnter={(e) => { e.preventDefault();clickTarjeta(`${item.id}`);
          }}
          onMouseLeave={(e) => { e.preventDefault();clickTarjeta(`${item.id}`);
          }}
          >
            <div className="">
              <Image
                id={`imagen${item.id}`}
                src={item.imagen}
                alt={`${item.titulo}Image`}
                className="w-[290px] h-[330px] rounded-xl "
                width={1000}
                height={1000} 
              />
            </div>
            <div className="flex relative  flex-col justify-center items-start min-w-full">
              <div id={`contenedor${item.id}`}  className="contenedorCerrado ">
                <Image
                  src={item.icono}
                  alt={`${item.titulo}Icon`}
                  className="w-[80px]  h-[80px] iconoTarjeta"
                  width={100}
                  height={100}
                />
                <h1 className="text-[#193C34] mt-2 font-bold text-3xl tituloTarjeta">{item.titulo}</h1>
                <div id={`contenedorTexto${item.id}`} className="hidden">
                {
                  item.text.map((text, index) => (
                    <p key={`text${item.id}_${index}`} id={`text${item.id}`} className="text-[#193C34] font-bold text-lg  parrafoTarjeta ">{text}</p>
                  ))
                }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TarjetasHome