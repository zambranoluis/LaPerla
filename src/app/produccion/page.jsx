import {
  produccion
} from "./produccion.js"

const Produccion = () => {

  

  return (
    <main>
      <section style={{backgroundImage: "url(/produccion/PRODUCCION1-O.png)"}} className="h-screen bg-cover bg-center bg-no-repeat text-[#193C34] flex flex-col justify-center items-center">
        <div className="w-[90%] sm:w-[80%] md:w-[50%] xl:w-[40%] flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl font-bold font-['nohemi']">QUE PRODUCE</h2>
          <h1 className="text-6xl font-black font-['alverata']">La Perla</h1>
          <p className="text-center text-lg font-['nohemi']">Cultivamos productos del rubro bananero con los más altos estándares de calidad, dignos de exportación y reconocimiento nacional e internacional, garantizado protección a nuestro ambiente, sirviendo de ejemplo y aporte importante al desarrollo de nuestro.</p>
        </div>
      </section>

      <section className="min-h-screen relative w-full bg-[#edefe1] rounded-t-[50px] md:rounded-t-[100px] mt-[-95px] text-[#193C34] flex flex-col justify-center items-center">
        
        <img src="./produccion/HOJA4.png" alt="Hoja de planta decorativa derecha 1" 
        className="absolute w-[80px] top-0 right-[-10px] rotate-[-25deg] md:top-[40px]"
        />
        <img src="./produccion/HOJA4.png" alt="Hoja de planta decorativa derecha 2" 
        className="absolute w-[80px] rotate-[-25deg] right-[-10px] top-[49%]"
        />

        <img src="./produccion/HOJA3.png" alt="Hoja de planta decorativa izquierda 1" 
        className="absolute w-[120px] lg:w-[160px]  left-[-20px] rotate-[180deg] top-[39%] md:top-[22%] lg:top-[20%]"
        />
        <img src="./produccion/HOJA3.png" alt="Hoja de planta decorativa izquierda 2" 
        className="absolute w-[120px] lg:w-[160px] rotate-[180deg] left-[-20px] top-[70%] top:-[]"
        />

        <img src="./produccion/HOJA2.png" alt="Hoja de planta decorativa centro 1" 
        className="max-[1200px]:hidden absolute w-[120px] left-[50%] top-[33%] "
        />
        <img src="./produccion/HOJA2.png" alt="Hoja de planta decorativa centro 2" 
        className="max-[1200px]:hidden absolute w-[120px] left-[50%] top-[83%] "
        />
        
        
        <div className="flex flex-col w-full justify-center items-center   gap-8 py-10">
          {
            produccion.map((produccion, index) => (
              <div key={produccion.id} stle={(index%2 === 0) ? {flexDirection: "row"} : {flexDirection: "row-reverse"}} className={(index%2 === 0) ? "flex flex-col md:flex-row justify-center items-center w-[90%]  gap-4 py-4 " : "flex flex-col md:flex-row-reverse justify-center items-center  w-[90%]  gap-4 py-4 "}>
                <div className="flex justify-center items-center md:w-[50%]">
                  <img src={produccion.imagen} className="h-[470px]" alt={`Imagen de ${produccion.nombre}`} />
                </div>
                <div 
                className={(index%2 === 0) 
                ? " flex flex-col gap-4 justify-center items-center md:w-[50%] md:justify-start md:items-start lg:w-[40%]   xl:pr-[150px]" : "flex flex-col gap-4 justify-center items-center md:w-[50%] md:justify-start md:items-start lg:w-[40%]  xl:pl-[150px] "}>
                  <div className="flex md:flex-col gap-2 justify-center items-center md:justify-start md:items-start ">
                    <img src={produccion.icono} className="w-[60px] h-[60px]" alt={`Icono de ${produccion.nombre}`} />
                    <h1 className="text-4xl font-black font-['alverata']">{produccion.nombre}</h1>
                  </div>
                  <div className="  ">
                    <p className=" text-md text-center md:text-left">{produccion.texto}</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center md:justify-start gap-4">
                    {produccion.etiquetas.map((etiqueta, index) => (
                      <span key={`etiqueta-${produccion.nombre}-${index}`} className="bg-[#F2CA33] rounded-full px-2 py-1 font-bold text-sm">{etiqueta}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  );
};

export default Produccion;
