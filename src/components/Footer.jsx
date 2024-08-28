import Image from 'next/image';


const Footer = () => {
  
  return (
    <footer className="flex flex-col  justify-center items-center  bg-[#2A4F36] h-[300px] gap-12 ">
      <div className="flex flex-col md:flex-row md:justify-evenly w-full justify-center items-center gap-4">
        <div className="flex justify-center items-center  ">
          <a href="/" className="flex justify-center items-center">
            <Image
              src="/LogoLaPerlaLong.png"
              alt="LaPerlaLogoFooter"
              className=""
              width={200}
              height={50}
            />
          </a>
        </div>
        <div className=" flex items-center ">
          <p className="text-[#EDEFE1] ">© 2024 La Perla. All Rights Reserved.</p>
        </div>
      </div>
      <div className="grid place-content-center">
        <h1 className="text-2xl  font-bold text-white text-center">Sembramos oportunidades, cultivamos sueños.</h1>
      </div>
    </footer>
  );
};

export default Footer;
