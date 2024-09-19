'use client'

import ReactMarkdown from 'react-markdown';

import { useState } from 'react';

import {desplazar} from './desplazamientoTarjetasHorizontal'

const Sustainability = () => {




  const sostenibilidad = [
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




  return (
    <main>
      <section style={{backgroundImage: "url(/sostenibilidad/SOSTENIBILIDAD1.png)"}} className="min-h-screen bg-cover bg-no-repeat text-[#193C34] flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-black font-['alverata']">Sostenibilidad</h1>
        <p className="text-lg w-[500px] text-center">En Inversiones Agropecuaria La Perla S.A., estamos comprometidos a garantizar la inocuidad alimentaria, la cual se aplique y mantenga en todos nuestros procesos de producción.</p>
      </section>
      <section  className="flex relative bg-[#EDEFE1] min-h-screen ">
        <img src="/sostenibilidad/SOSTENIBILIDAD2.png" alt="Planta con racimo de Banano" className="w-[50%] object-cover rounded-r-[100px] "/>
        <div className="flex gap-8 place-self-end  w-full justify-end pr-[100px] pb-[50px]   z-[2]">
          <img src="/sostenibilidad/FLECHA.png" className="h-[50px] rotate-180 hover:cursor-pointer" alt="Icono Flecha Desplazamiento Izquierda" onClick={(e) => {e.preventDefault(); desplazar('izquierda')}} />
          <img src="/sostenibilidad/FLECHA.png" className="h-[50px] hover:cursor-pointer" alt="Icono Flecha Desplazamiento Derecha" onClick={(e) => {e.preventDefault(); desplazar('derecha')}} />
        </div>
        <div id="contenedor-desplazable"  className=" flex flex-col absolute h-full  bg-rose-800">
          <div  className="flex justify-center items-center  h-full gap-8  pl-[450px]  ">
            {
              sostenibilidad.map((sostenibilidad) => (
                <div className=" flex flex-col w-[600px] h-[500px] justify-start items-start gap-4 bg-[#BCD873] text-[#193C34] p-8 rounded-3xl" key={sostenibilidad.id}>
                  <img src={sostenibilidad.icono} alt={sostenibilidad.titulo} className="w-[50px]"/>
                  <h2 className="text-3xl font-bold">{sostenibilidad.titulo}</h2>
                  <ReactMarkdown className="text-lg">{sostenibilidad.texto}</ReactMarkdown>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustainability;
