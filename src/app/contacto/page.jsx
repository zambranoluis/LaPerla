const ContactUs = () => {
  return (
    <main>
      <section style={{backgroundImage: "url(/contacto/CONTACTO1.png)"}} className="flex min-h-screen bg-cover bg-no-repeat text-[#193C34] justify-center items-center py-[200px]">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-40 justify-center items-center w-[90%]">
          <div className="flex flex-col gap-12">
            <div className="">
              <h2 className="font-bold text-2xl">¿PREGUNTAS?</h2>
              <h1 className="font-black text-5xl">CONSULTAS<br/>GENERALES</h1>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-4 font-bold text-lg">
                <div className="bg-[#193C34]  w-[45px] h-[45px] flex justify-center items-center rounded-lg">
                  <img src="/contacto/CORREO.png" alt="icono de correo" className=" w-[30px] " />
                </div>
                <p>info@laperla.com.ve</p>
              </div>
              <div className="flex items-center gap-4 font-bold text-lg">
                <div className="bg-[#193C34]  w-[45px] h-[45px] flex justify-center items-center rounded-lg">
                  <img src="/contacto/TELEFONO.png" alt="icono de telefono" className=" h-[30px] w-[30px] " />
                </div>
                <p>(58) 412 123 4567</p>
              </div>
            </div>
          </div>
          <div className="bg-[#EDEFE1] p-10 rounded-3xl ">
            <form action="#EnviarConsulta" className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-col">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text"   className="rounded-md border border-[#BCD873] bg-[#EDEFE1]"/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="apellido">Apellido</label>
                  <input type="text"   className="rounded-md border border-[#BCD873] bg-[#EDEFE1]"/>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="correo">Correo</label>
                <input type="email"   className="rounded-md border border-[#BCD873] bg-[#EDEFE1]"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10" className="rounded-md border border-[#BCD873] bg-[#EDEFE1]"></textarea>
              </div>
              <div className="flex">
                <button type="submit" className="bg-[#F2CA33] px-2 py-1 rounded-full font-bold">Enviar Consulta</button>
              </div>
            </form>
          </div>
        </div>
      </section>


      <section className="py-[100px] bg-[#EDEFE1] rounded-t-[100px] mt-[-95px] flex flex-col justify-center items-center text-[#193C34]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          <div className=" ">
            <iframe className="rounded-3xl w-full sm:w-[500px] h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81672.1956355825!2d-71.04779848155599!3d9.411095896491565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e62fd971794637f%3A0x318eb2c26297e12e!2sHacienda%20La%20Perla!5e0!3m2!1ses!2sve!4v1726700369823!5m2!1ses!2sve"     ></iframe>
          </div>
          <div className="flex flex-col items-center justify-center  gap-6">
            <div>
              <h2 className="font-bold text-3xl">NUESTRA</h2>
              <h1 className="font-black text-5xl">Ubicación</h1>
            </div>
            <div className="flex justify-center items-center gap-4 ">
              <div className="bg-[#193C34]  w-[55px] h-[55px] flex justify-center items-center rounded-lg">
                <img src="/contacto/LOCATION.png" alt="icono de ubicacion" className="w-[40px] "/>
              </div>
              <p>Maracaibo, Venezuela</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
