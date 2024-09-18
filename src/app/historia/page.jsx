import Image from 'next/image';



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
    <>
      <section style={{backgroundImage: "url(/historia/HISTORIA1.png)"}} className="z-[2] relative w-full h-[50vh] md:h-screen bg-cover bg-center bg-no-repeat text-[#193C34] flex flex-col   pl-8  sm:pl-12 sm:pt-0 justify-center sm:items-start">
        <h2 className="text-3xl md:text-5xl font-bold">SOMOS</h2>
        <h1 className="text-5xl md:text-7xl font-black">La Perla</h1>
        <p className=" text-justify text-sm md:text-lg  w-[50%]  lg:w-[35%]">Somos una empresa productora de bananos en el Occidente del país, inspirada por la confianza de clientes internacionales, el impulso del desarrollo sostenible y la generación de empleos directos e indirectos, mediante un sistema de comercio justo.</p>
      </section>
      <section className="bg-[#edefe1] relative">
        <Image
          src="/historia/HOJA2.svg"
          alt="HojaDePlantaDecorativa_Arriba"
          width={100}
          height={100}
          className="absolute w-[400px] h-[400px] top-[-150px] z-[1] left-[35%] rotate-[180deg] scale-x-[-1] "
        />
        <Image
          src="/historia/HOJA2.svg"
          alt="HojaDePlantaDecorativa_Abajo"
          width={100}
          height={100}
          className=" absolute w-[400px] h-[400px] bottom-[-150px] z-[1] left-[43%]  "
        />


        <Image
          src="/historia/HOJA4-2.svg"
          alt="HojaDePlantaDecorativa_Izquierda"
          width={100}
          height={100}
          className="absolute top-[70%] rotate-[155deg]"
        />
        
        <Image
          src="/historia/HOJA4.svg"
          alt="HojaDePlantaDecorativa_Derecha"
          width={100}
          height={100}
          className="absolute top-[10%] right-0 rotate-[-20deg]"
        />

        <Image
          src="/historia/banana.png"
          alt="banana"
          width={290}
          height={650}
          className="absolute  bottom-[0px] z-[1] left-[43%]  "
        />



        <div className="flex w-full gap-32">
          <div className="flex w-[45%]">
            <Image
              src="/historia/HISTORIA2.png"
              alt="ImagenSiembra"
              width={400}
              height={400}
              className="object-cover w-full aspect-square rounded-r-[100px] "
            />
          </div>
          <div className="w-[30%] flex flex-col place-self-center text-[#193C34]">
            <p className=" font-bold text-2xl">Cultivar, cosechar y procesar productos del rubro bananero con los más altos estándares de calidad</p>
            <p className=" text-xl text-justify">Dignos de exportación y reconocimiento nacional e internacional, garantizando protección a nuestro ambiente, sirviendo de ejemplo y aporte importante al desarrollo de nuestro.</p>
          </div>
        </div>


        <div className="flex flex-row-reverse w-full gap-32">
          <div className="flex w-[45%]">
            <Image
              src="/historia/HISTORIA3.png"
              alt="ImagenHojasDeLaPlanta"
              width={400}
              height={400}
              className="object-cover w-full aspect-square rounded-l-[100px]"
            />
          </div>
          <div className="w-[35%] flex flex-col place-self-center text-[#193C34]">
            <h2 className="text-3xl md:text-5xl font-bold">NUESTRA</h2>
            <h1 className="text-5xl md:text-7xl font-black">Visión</h1>
            <p className="text-justify text-sm md:text-lg">Ser una corporación Bananera de reconocimiento nacional e internacional, por la excelente en la calidad de sus productos, el control y seguridad de sus operaciones.</p>
          </div>
        </div>

      </section>

      <section style={{backgroundImage: "url(/historia/HISTORIA5.png)"}} className="relative z-[2] min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-[#193C34] gap-16">
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">NUESTROS</h2>
          <h1 className="text-5xl font-black">Valores</h1>
        </div>
        <div className="flex  gap-10">
          {
            valores.map((valor, index) => (
              <div key={`valor${index}`} className="flex w-[30%] flex-col  items-center gap-2 bg-[#edefe1] p-8 rounded-3xl">
                <Image 
                src={valor.icono} 
                alt={`${valor.icono}`} 
                width={75} 
                height={75}
                />
                <p className="text-lg font-bold w-[70%] text-center">{valor.nombre}</p>
              </div>
            ))
          }
        </div>

      </section>

      <section className="bg-[#edefe1] min-h-[50vh] text-[#193C34] flex flex-col justify-center items-center gap-20 py-24">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">NUESTRAS</h2>
          <h1 className="text-5xl font-black">Certificaciones</h1>
        </div>
        <div className="flex gap-10 justify-center items-center w-[50%] ">
          <div className="w-[40%] flex justify-center items-center p-4 bg-white rounded-3xl border border-[#7EA451]">
            <Image
              src="/historia/GLOBALGAP.png"
              alt="certificaciones"
              width={200}
              height={150}
              className=" object-contain"
            />
          </div>
          <div className="w-[60%]">
            <h2 className="text-3xl font-bold">GLOBAL GAP</h2>
            <p className="text-left ">Es la certificación líder mundial que aplica un sistema de normas para tres tipos de producciones: vegetal, animal y acuicultura, permitiendo asegurar objetivamente que los alimentos se han producido siguiendo unas directrices de calidad y buenas prácticas.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
