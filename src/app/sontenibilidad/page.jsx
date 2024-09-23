'use client'

import ReactMarkdown from 'react-markdown';

import {
  sostenibilidad1,
  sostenibilidad2,
  desplazamientoHorizontal,
  desplazamientoVertical
} from './sostenibilidad'


const Sostenibilidad = () => {


  return (
    <main>

      <section style={{backgroundImage: "url(/sostenibilidad/SOSTENIBILIDAD1-O.png)"}} className="min-h-screen bg-cover bg-no-repeat text-[#193C34] flex flex-col justify-center items-center gap-4">
        <div className='flex flex-col gap-4 w-[90%] sm:w-[60%] lg:w-[50%] justify-center items-center'>
          <h1 className="text-5xl font-black font-['alverata']">Sostenibilidad</h1>
          <p className="text-lg  text-center xl:w-[80%]">En Inversiones Agropecuaria La Perla S.A., estamos comprometidos a garantizar la inocuidad alimentaria, la cual se aplique y mantenga en todos nuestros procesos de producción.</p>
        </div>
      </section>






      

      <section className="bg-center bg-no-repeat bg-cover relative h-[750px] md:h-[650px] lg:h-[900px]" >

        <div className='flex w-full '>
          <img src="/sostenibilidad/SOSTENIBILIDAD2-O.png" alt="Planta con racimo de Banano" className="absolute top-0 object-cover w-full h-full lg:w-[60%] lg:rounded-r-[100px] z-[-1]" />
        </div>

        <div id="contenedor-desplazable1" className="flex justify-start items-center w-full gap-4 p-1 sm:p-4 md:p-8 min-[900px]:pl-[200px] lg:pl-[400px] xl:pl-[450px]   overflow-x-auto scrollbar-hide z-[2] ">
          {
            sostenibilidad1.map((sostenibilidad) => (
              <div key={sostenibilidad.id} className='lg:pt-[15%] opacity5'>
                <div className=" flex flex-col  w-[380px] sm:w-[450px] md:w-[550px] h-[650px] md:h-[500px] lg:h-[600px]  bg-[#BCD873] text-[#193C34] p-8 rounded-3xl gap-2" >
                  <img src={sostenibilidad.icono} alt={sostenibilidad.titulo} className="w-[50px]" />
                  <h2 className="text-3xl lg:text-5xl font-bold font-['alverata']">{sostenibilidad.titulo}</h2>
                  <ReactMarkdown className="text-lg font-['nohemi']">{sostenibilidad.texto}</ReactMarkdown>
                </div>
              </div>
            ))
          }
        </div>

        <div className=" flex gap-4 md:justify-end justify-center items-center p-2 md:pr-10">
          <img src="/sostenibilidad/FLECHA.png" className="h-[50px] rotate-180  cursor-pointer" onClick={(e) => { e.preventDefault(); desplazamientoHorizontal('izquierda') }} />
          <img src="/sostenibilidad/FLECHA.png" className="h-[50px] cursor-pointer" alt="Icono Flecha Desplazamiento Derecha" onClick={(e) => { e.preventDefault(); desplazamientoHorizontal('derecha') }} />
        </div>

        

      </section>


      



      <section style={{backgroundImage: "url(/sostenibilidad/SOSTENIBILIDAD3-O.png)"}} className='relative  h-[750px] mt-[-1px] bg-cover bg-no-repeat bg-center  text-[#193C34]'>
        <div className='flex flex-col gap-8 lg:pl-40 pt-20  md:w-full justify-center items-center lg:justify-start lg:items-start'>
          <div className='flex flex-col gap-2 max-md:justify-center max-md:items-center'>
            <h2 className="text-2xl md:text-3xl font-bold font-['nohemi'] max-md:text-center">SOSTENIBILIDAD</h2>
            <h1 className="text-4xl md:text-5xl font-black font-['alverata'] max-md:text-center">Cultivando un<br />Futuro Responsable</h1>
          </div>
          <div className='flex h-full gap-4 md:gap-8 overflow-hidden'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <img src="/sostenibilidad/FLECHA.png" className="w-[50px] -rotate-90 hover:cursor-pointer" alt="Icono Flecha Desplazamiento Arriba" onClick={(e) => {e.preventDefault(); desplazamientoVertical('arriba')}} />
              <img src="/sostenibilidad/FLECHA.png" className="w-[50px] rotate-90 hover:cursor-pointer" alt="Icono Flecha Desplazamiento Abajo" onClick={(e) => {e.preventDefault(); desplazamientoVertical('abajo')}}/>
            </div>
            <div id="contenedor-desplazable2" className='flex-none z-[1] h-[450px] md:h-[350px] flex-col gap-4  justify-center items-center  overflow-y-hidden scrollbar-hide'>
              {
                sostenibilidad2.map((sostenibilidad) => (
                  <div className='flex-none pb-[10px]' key={sostenibilidad.id}>
                    <div className=" flex w-[300px] md:w-[500px] h-[200px] md:h-[100px] justify-center items-center gap-4 bg-[#BCD873] text-[#193C34] p-8 rounded-3xl" >
                      <img src={sostenibilidad.icono} alt={sostenibilidad.titulo} className="w-[50px]"/>
                      <p className="text-sm font-bold font-['nohemi']">{sostenibilidad.titulo}: <span className='font-normal'>{sostenibilidad.texto}</span></p>
                    </div>
                  </div>
                ))
              }
            </div>
            <img src="/sostenibilidad/PALMAS.png" className="max-md:hidden md:flex bottom-[-100px] absolute h-full md:h-[60%] md:bottom-[-170px] lg:h-full md:right-0 lg:bottom-[-300px] min-[1300px]:right-[100px] z-[0] " alt="" />
          </div>
        </div>
      </section>





      <section className="min-h-[60vh] lg:min-h-[50vh] bg-[#EDEFE1] flex flex-col justify-center items-center  text-[#193C34] relative ">
        <div className='flex flex-col gap-2 justify-center items-center w-[90%]'>
          <img src="/sostenibilidad/LOGOICONO.png" className='w-[100px] z-[1]' alt="Logo La Perla en Sostenibilidad" />
          <p className='text-center z-[1] md:w-[50%] '>En La Perla Nos comprometernos a atender los ámbitos de la Responsabilidad Social Empresarial (RSE), siendo responsables con nuestros grupos de interés, cumplir los requisitos legales que nos aplican y buscar la transparencia, confianza, rendición de cuentas y combatir prácticas de corrupción interna y externamente</p>
        </div>
        <img src="/sostenibilidad/PALMAS.png" className='absolute z-[0] w-[600px]  md:w-[500px] lg:w-[450px] top-[0%]   lg:right-0  lg:bottom-[-250px] opacity-10' alt="Palmas en Sostenibilidad" />
      </section>
    </main>
    
  );
};

export default Sostenibilidad;
