'use client'

import ReactMarkdown from 'react-markdown';

import {
  sostenibilidad1,
  sostenibilidad2,
  desplazar
} from './sostenibilidad'

const Sostenibilidad = () => {


  return (
    <main>
      <section style={{backgroundImage: "url(/sostenibilidad/SOSTENIBILIDAD1.png)"}} className="min-h-screen bg-cover bg-no-repeat text-[#193C34] flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-black font-['alverata']">Sostenibilidad</h1>
        <p className="text-lg w-[500px] text-center">En Inversiones Agropecuaria La Perla S.A., estamos comprometidos a garantizar la inocuidad alimentaria, la cual se aplique y mantenga en todos nuestros procesos de producción.</p>
      </section>

      <section  className="flex relative bg-[#EDEFE1] min-h-screen max-h-screen">
        <img src="/sostenibilidad/SOSTENIBILIDAD(2).png" alt="Planta con racimo de Banano" className="w-[50%] object-cover rounded-r-[100px] "/>
        <div className="flex gap-8 place-self-end  w-full justify-end pr-[100px] pb-[50px] z-[2]">
          <img src="/sostenibilidad/FLECHA.png" className="h-[50px] rotate-180 hover:cursor-pointer" alt="Icono Flecha Desplazamiento Izquierda" onClick={(e) => {e.preventDefault(); desplazar('izquierda')}} />
          <img src="/sostenibilidad/FLECHA.png" className="h-[50px] hover:cursor-pointer" alt="Icono Flecha Desplazamiento Derecha" onClick={(e) => {e.preventDefault(); desplazar('derecha')}} />
        </div>
        
        <div id="contenedor-desplazable"  className=" flex absolute top-[20%] left-[30%] gap-8 ">
          {
            sostenibilidad1.map((sostenibilidad) => (
              <div className=" flex flex-col w-[600px] h-[500px] justify-start items-start gap-4 bg-[#BCD873] text-[#193C34] p-8 rounded-3xl" key={sostenibilidad.id}>
                <img src={sostenibilidad.icono} alt={sostenibilidad.titulo} className="w-[50px]"/>
                <h2 className="text-3xl font-bold">{sostenibilidad.titulo}</h2>
                <ReactMarkdown className="text-lg">{sostenibilidad.texto}</ReactMarkdown>
              </div>
            ))
          }
        </div>
      </section>

      <section style={{backgroundImage: "url(/sostenibilidad/SOSTENIBILIDAD3.png)"}} className='min-h-screen bg-cover bg-no-repeat relative text-[#193C34]'>
        <div className='flex flex-col gap-8 pl-32 pt-20'>
          <div className='flex flex-col gap-2'>
            <h2 className="text-3xl font-bold font-['nohemi']">SOSTENIBILIDAD</h2>
            <h1 className="text-5xl font-black font-['alverata']">Cultivando un<br />Futuro Responsable</h1>
          </div>
          <div className='flex max-h-[60vh] overflow- gap-8'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <img src="/sostenibilidad/FLECHA.png" className="w-[50px] -rotate-90 hover:cursor-pointer" alt="Icono Flecha Desplazamiento Arriba" />
              <img src="/sostenibilidad/FLECHA.png" className="w-[50px] rotate-90 hover:cursor-pointer" alt="Icono Flecha Desplazamiento Abajo" />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center  pt-[450px]'>
              {
                sostenibilidad2.map((sostenibilidad) => (
                  <div className=" flex w-[600px] h-[100px] justify-center items-center gap-4 bg-[#BCD873] text-[#193C34] p-8 rounded-3xl" key={sostenibilidad.id}>
                    <img src={sostenibilidad.icono} alt={sostenibilidad.titulo} className="w-[50px]"/>
                    <p>{sostenibilidad.titulo}: <span>{sostenibilidad.texto}</span></p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {/* <div className="flex absolute right-0">
          <img src="/sostenibilidad/PALMAS.png" className='w-[600px] ' alt="Palmas en Sostenibilidad" />
        </div> */}
      </section>

      <section className="min-h-[60vh]  bg-[#EDEFE1] flex flex-col justify-center items-center gap-4 text-[#193C34] relative ">
        <img src="/sostenibilidad/LOGOICONO.png" className='w-[100px] z-[1]' alt="Logo La Perla en Sostenibilidad" />
        <p className='text-center w-[40%] z-[1]'>En La Perla Nos comprometernos a atender los ámbitos de la Responsabilidad Social Empresarial (RSE), siendo responsables con nuestros grupos de interés, cumplir los requisitos legales que nos aplican y buscar la transparencia, confianza, rendición de cuentas y combatir prácticas de corrupción interna y externamente</p>
          <img src="/sostenibilidad/PALMAS.png" className='absolute w-[600px] z-[0] top-[0%] right-0 opacity-10' alt="Palmas en Sostenibilidad" />
      </section>
    </main>
  );
};

export default Sostenibilidad;
