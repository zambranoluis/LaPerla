// import Image from 'next/image';

import TarjetasHome from '../components/TarjetasHome.jsx';



const Inicio = () => {
  return (
    <main>
      <section   className="flex relative w-full ">
        <img
            src="/home/plantaVideo1.png"
            alt="Hojas de Plantas Derecha"
            loading='lazy'
            className=" absolute object-contain bottom-[-7%] sm:bottom-[-15%] md:bottom-[-10%] right-0 sm:h-[350px] sm:w-[250px] md:h-[420px] md:w-[300px] lg:h-[500px] lg:w-[350px]"
          />
        
        <img
            src="/home/plantaVideo2.png"
            alt="Hojas de Plantas Izquierda"
            loading='lazy'
            className=" absolute object-contain bottom-[-5%] sm:bottom-[-20%] md:bottom-[-10%] sm:h-[350px] sm:w-[250px] md:h-[350px] md:w-[300px] lg:h-[500px] lg:w-[400px]"
          />
        <div className="z-0 absolute w-full h-full bg-white/30  flex flex-col justify-start  items-center gap-4">
          <p className="z-2 text-5xl min-[600px]:text-6xl sm:text-7xl   lg:text-8xl   font-black text-[#193C34] text-center mt-[20%] min-[600px]:mt-[10%] font-['alverata']">Sembramos <br className="" />oportunidades,</p>
          <p className="font-medium text-3xl min-[600px]:text-4xl md:text-5xl lg:text-6xl  text-[#193C34] text-center font-['nohemi']">cultivamos sueños</p>
        </div>
        <video
          autoPlay
          muted
          loop
          className="object-cover min-h-[50vh] "
        >
          <source src="/home/laPerlaVideoHome.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

      </section>

      <section className="mt-[-5%] md:mt-[-7%] relative z-[2] bg-[#EDEFE1] rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[60px] lg:rounded-t-[100px] h-[370px]   sm:h-[450px]  md:h-[600px]   lg:h-[700px] xl:h-[800px] min-[1400px]:h-[850px] flex " >
        <img
            src="/home/chicaConPlantas.png"
            alt="mujerConPlantas"
            loading='lazy'
            className=" absolute w-full object-contain bottom-0 "
        />
        <div className="absolute flex flex-col top-0 text-[#193C34] bg-pink-500/0 w-[60%] pt-[10%] pl-[8%] min-[500px]:pt-[10%] min-[500px]:pl-[10%] justify-start items-start">
          <h2 className="font-bold text-2xl sm:text-2xl md:text-4xl font-[nohemi]">SOMOS</h2>
          <h1 className="font-black text-5xl sm:text-5xl md:text-7xl font-[alverata]">La Perla</h1>
          <p className="text-[12px] sm:text-[16px] md:text-[20px] text-left font-medium  mt-2 font-[nohemi]">Somos una empresa productora de bananos en el Occidente del país, inspirada por la confianza de clientes internacionales, el impulso del desarrollo sostenible y la generación de empleos directos e indirectos, mediante un sistema de comercio justo.</p>
          <button className="flex place-self-start text-[#193C34] bg-[#F2CA33] mt-4 px-4 py-1 rounded-full text-[10px] sm:text-[16px] font-bold"><a href="/historia">Leer más</a></button>
        </div>
      </section>

      <section style={{backgroundImage: "url(/home/HOME3-O.png)"}} className="bg-cover bg-no-repeat min-h-[50vh]">
        <h1 className="text-center text-[#193C34] font-black text-6xl pt-[80px] font-[alverata]"><span className="font-bold font[nohemi]">Somos</span><br/>Producción</h1>
        <div className="flex justify-center items-center ">
          <TarjetasHome />
        </div>
      </section>

      <section className=" relative flex justify-center items-center bg-[#EDEFE1] h-[500px]">
        <div id="hojasLastPlantas" className=" ">
          <img
            src="/home/plantaTopLeft.png"
            loading='lazy'
            alt="hojasLastPlantas" 
            className=" absolute w-[100px]   top-0 left-[10%]"
          />
          <img
            src="/home/plantaBottomLeft.png"
            alt="hojasLastPlantas"
            loading='lazy'
            className=" absolute w-[150px] lg:w-[200px]   bottom-0 left-[5%] "
          />
          <img
            src="/home/plantaTopRight.png"
            alt="hojasLastPlantas"
            loading='lazy'
            className=" absolute w-[150px] lg:w-[200px] top-0 right-[10%] "
          />
          <img
            src="/home/plantaRight.png"
            alt="hojasLastPlantasRight"
            loading='lazy'
            className=" absolute h-[100px] right-0 top-[70%] lg:top-[50%] "
          />
          
        </div>
        <div className="min-[400px]:px-[10%] mt-[10%] sm:mt-0 gap-4 flex flex-col  text-[#193C34]   justify-center items-center">
          <h2 className="font-bold text-3xl md:text-4xl font-[nohemi]">NUESTRA</h2>
          <h1 className="font-black text-5xl md:text-6xl font-[alverata]">Sostenibilidad</h1>
          <p className="text-sm sm:text-lg lg:text-xl   w-full lg:w-[70%]  text-center md:font-medium font-[nohemi]">En Inversiones Agropecuarias La Perla S.A., estamos comprometidos a garantizar la inocuidad alimentaria, la cual se aplique y mantenga en todos nuestros procesos de producción.</p>
          <button className="text-[#193C34] bg-[#F2CA33] mt-2 md:mt-5 px-4 py-1 rounded-full text-md font-bold md:text-xl "><a href="/sontenibilidad">Leer más</a></button>
        </div>
      </section>

    </main>
  );
};

export default Inicio;
