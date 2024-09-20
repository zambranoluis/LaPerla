// import Image from 'next/image';



const History = () => {

  const valores = [
    {
      id: "valor1",
      nombre: "Trabajo en Equipo",
      icono: "/historia/TRABAJO.png"
    },
    {
      id: "valor2",
      nombre: "Ética y Honestidad",
      icono: "/historia/ETICA.png"
    },
    {
      id: "valor3",
      nombre: "Excelencia Operacional",
      icono: "/historia/EXCELENCIA.png"
    },
    {
      id: "valor4",
      nombre: "Calidad",
      icono: "/historia/CALIDAD.png"
    },
  ]


  return (
    <main>
      <section style={{backgroundImage: "url(/historia/HISTORIA1-O.png)"}} className="z-[2] relative w-full h-[50vh] md:h-screen bg-cover bg-center bg-no-repeat text-[#193C34] flex flex-col pl-8 sm:pl-12 sm:pt-0 justify-center sm:items-start">
        <h2 className="text-3xl md:text-5xl font-bold font-[nohemi]">SOMOS</h2>
        <h1 className="text-5xl md:text-7xl font-black font-[alverata]">La Perla</h1>
        <p className=" text-justify text-sm md:text-lg  w-[50%]  lg:w-[35%] font-[nohemi]">Somos una empresa productora de bananos en el Occidente del país, inspirada por la confianza de clientes internacionales, el impulso del desarrollo sostenible y la generación de empleos directos e indirectos, mediante un sistema de comercio justo.</p>
      </section>

      <section className="bg-[#edefe1] flex flex-col relative gap-20 md:gap-14 pt-20 pb-52 md:py-0">

        <img
          src="/historia/HOJA2.svg"
          alt="Hoja de planta decorativa arriba"
          className="absolute z-[1] w-[100px] md:w-[100px] lg:w-[200px] top-[-50px] lg:top-[-160px] left-[80%] md:left-[40%] lg:left-[45%] rotate-[180deg] scale-x-[-1] "
        />

        <img
          src="/historia/HOJA4.svg"
          alt="Hoja de planta decorativa derecha"
          className="absolute  w-[50px] lg:w-[100px]  top-[35%] sm:top-[40%] md:top-[42%] lg:top-[5%] right-[0px] rotate-[-20deg]"
        />

        <img
          src="/historia/HOJA4-2.svg"
          alt="Hoja de planta decorativa izquierda"
          className="absolute w-[50px] lg:w-[80px] top-[72%] sm:top-[80%] md:top-[85%] lg:top-[81%] rotate-[155deg]"
        />
        


        <img
          src="/historia/HOJA2.svg"
          alt="Hoja de planta decorativa abajo"
          className=" absolute z-[0]  w-[140px] md:w-[100px] lg:w-[200px] bottom-[-100px] md:bottom-[-50px] lg:bottom-[-150px] left-[60%] md:left-[50%] lg:left-[40%] "
        />

        <img
          src="/historia/banana.png"
          alt="banana"
          className="absolute z-[1] w-[150px] lg:w-[200px] bottom-[-20px] left-[60%] md:left-[45%] lg:left-[40%] "
        />



        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 lg:gap-20">
          <div className="flex md:w-[50%]">
            <img
              src="/historia/HISTORIA2-O.png"
              alt="ImagenSiembra"
              className="object-cover w-full aspect-square rounded-l-[100px] p-2 rounded-r-[100px] md:rounded-l-[0px] md:p-0"
            />
          </div>
          <div className="w-[80%] md:w-[40%] lg:w-[35%] flex flex-col place-self-center text-[#193C34] gap-2 ">
            <p className="text-center font-bold text-4xl md:text-2xl md:text-left font-[alverata] ">Cultivar, cosechar y procesar productos del rubro bananero con los más altos estándares de calidad</p>
            <p className="text-center text-xl md:text-lg md:text-justify font-[nohemi]">Dignos de exportación y reconocimiento nacional e internacional, garantizando protección a nuestro ambiente, sirviendo de ejemplo y aporte importante al desarrollo de nuestro.</p>
          </div>
        </div>


        <div className="flex flex-col md:flex-row-reverse w-full gap-4 md:gap-8 lg:gap-20">
          <div className="flex md:w-[50%]">
            <img
              src="/historia/HISTORIA3-O.png"
              alt="ImagenHojasDeLaPlanta"
              className="object-cover w-full aspect-square rounded-l-[100px] p-2 rounded-r-[100px] md:rounded-r-[0px] md:p-0"
            />
          </div>
          <div className="w-[80%] md:w-[40%] flex flex-col place-self-center text-[#193C34] justify-center items-center md:justify-start md:items-start ">
            <h2 className="tet-center md:text-left text-3xl md:text-4xl font-bold font-[nohemi]">NUESTRA</h2>
            <h1 className="text-5xl md:text-7xl font-black font-[alverata]">Visión</h1>
            <p className="text-center text-xl md:text-lg md:text-justify lg:w-[80%] font-[nohemi]">Ser una corporación Bananera de reconocimiento nacional e internacional, por la excelente en la calidad de sus productos, el control y seguridad de sus operaciones.</p>
          </div>
        </div>

      </section>

      <section style={{backgroundImage: "url(/historia/HISTORIA5-O.png)"}} className="relative z-[2] min-h-[70vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-[#193C34] gap-16 py-20 ">
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold font-[nohemi]">NUESTROS</h2>
          <h1 className="text-6xl font-black font-[alverata]">Valores</h1>
        </div>
        <div className="flex  flex-col lg:flex-row  gap-10 ">
          {
            valores.map((valor, index) => (
              <div key={`valor${index}`} className="flex w-[220px] h-[200px]  flex-col  items-center gap-2 bg-[#edefe1] p-8 rounded-3xl hover:scale-105">
                <img 
                src={valor.icono} 
                alt={`${valor.icono}`} 
                className='w-[75px] h-[75px]'
                />
                <p className="text-lg font-bold w-[70%] text-center font-[nohemi]">{valor.nombre}</p>
              </div>
            ))
          }
        </div>

      </section>

      <section className="bg-[#edefe1] min-h-[50vh] text-[#193C34] flex flex-col justify-center items-center gap-14 py-24">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold font-['nohemi']">NUESTRAS</h2>
          <h1 className="text-5xl font-black font-['alverata']">Certificaciones</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center w-[90%] lg:w-[50%] ">
          <div className="lg:w-[40%] flex justify-center items-center p-4 bg-white rounded-3xl border border-[#7EA451]">
            <img
              src="/historia/GLOBALGAP.png"
              alt="certificaciones"
              className=" w-[200px]  object-contain"
            />
          </div>
          <div className="w-[60%] gap-2">
            <h2 className="text-center lg:text-left text-3xl font-bold font-['nohemi']">GLOBAL GAP</h2>
            <p className="text-center lg:text-left font-['nohemi'] ">Es la certificación líder mundial que aplica un sistema de normas para tres tipos de producciones: vegetal, animal y acuicultura, permitiendo asegurar objetivamente que los alimentos se han producido siguiendo unas directrices de calidad y buenas prácticas.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default History;
