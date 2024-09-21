import Image from 'next/image';


const Footer = () => {
  
  return (
    <footer className="flex flex-col  justify-center items-center  bg-[#2A4F36] h-[300px] gap-12  relative overflow-hidden">
      <img src="/footer/planta.png" alt="Planta fondo Footer" className="absolute right-0 h-[600px] z-[0] opacity-5" />
      <div className="flex flex-col md:flex-row md:justify-evenly w-full justify-center items-center gap-4">
        <div className="flex justify-center items-center  ">
          <a href="/" className="flex justify-center items-center ">
            <img src="/LogoLaPerlaLong.png" className='w-[300px] hover:cursor-pointer z-[11]' alt="Logo La Perla Footer" />
          </a>
        </div>
        <div className=" flex items-center ">
          <p className="text-[#EDEFE1] font-[nohemi]">© 2024 La Perla. All Rights Reserved.</p>
        </div>
      </div>
      <div className="grid place-content-center">
        <h1 className="text-3xl  font-bold text-white text-center font-[alverata]">Sembramos oportunidades, cultivamos sueños.</h1>
      </div>
    </footer>
  );
};

export default Footer;
