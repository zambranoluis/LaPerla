const Production = () => {

  const produccion = [
    {
      id:"produccion1",
      nombre: "Siembra",
      icono: "/produccion/SIEMBRA.png",
      imagen: "/produccion/SIEMBRA1.png",
      texto: "Cultivamos banano con los más altos estándares de calidad, garantizando productos dignos de exportación y reconocimiento internacional. Implementamos prácticas agrícolas responsables que protegen el medio ambiente y contribuyen al desarrollo de nuestra comunidad.",
      etiquetas: ["Drenaje", "Selección del Clon", "Cablevías", "Densidad de Siembra"]
    },
    {
      id:"produccion2",
      nombre: "Cultivo",
      icono: "/produccion/CULTIVO.png",
      imagen: "/produccion/CULTIVO1.png",
      texto: "Nos enfocamos en el cuidado integral del cultivo de banano, desde la fertilización hasta el control de plagas y enfermedades. Implementamos prácticas agrícolas sostenibles que garantizan la salud y productividad de las plantas.",
      etiquetas: ["Fertilización", "Protección de Racimo", "Control de Densidad", "Control de Malas Hierbas y Plagas"]
    },
    {
      id:"produccion3",
      nombre: "Cosecha",
      icono: "/produccion/COSECHA.png",
      imagen: "/produccion/COSECHA1.png",
      texto: "Cosechamos el banano en el momento óptimo de maduración, asegurando la máxima calidad y sabor de los frutos. Implementamos prácticas de cosecha cuidadosas para evitar daños a las plantas y garantizar la integridad de los productos.",
      etiquetas: ["Corte de Fruta", "Transporte a Empacadora", "Programación de Cosecha"]
    },
    {
      id:"produccion4",
      nombre: "Empaque",
      icono: "/produccion/EMPAQUE.png",
      imagen: "/produccion/EMPAQUE1.png",
      texto: "Empacamos el banano de acuerdo a los más altos estándares de calidad e higiene. Utilizamos materiales de empaque biodegradables y resistentes que protegen los frutos durante el transporte y almacenamiento.",
      etiquetas: ["Recibo de Frutas", "Selección de Fruta", "Desmane", "Lavado y Tratamiento de Corona", "Rotulado", "Pesaje", "Empaque"]
    }
  ]

  return (
    <main>
      <section style={{backgroundImage: "url(/produccion/PRODUCCION1.png)"}} className="h-screen bg-cover bg-center bg-no-repeat text-[#193C34] flex flex-col justify-center items-center">
        <div className="w-[90%] sm:w-[80%] md:w-[50%] xl:w-[40%] flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl font-bold font-['nohemi']">QUE PRODUCE</h2>
          <h1 className="text-6xl font-black font-['alverata']">La Perla</h1>
          <p className="text-center text-lg font-['nohemi']">Cultivamos productos del rubro bananero con los más altos estándares de calidad, dignos de exportación y reconocimiento nacional e internacional, garantizado protección a nuestro ambiente, sirviendo de ejemplo y aporte importante al desarrollo de nuestro.</p>
        </div>
      </section>

      <section className="min-h-screen w-full bg-[#edefe1] rounded-t-[100px] mt-[-95px] text-[#193C34] flex flex-col justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center   gap-4 py-10">
          {
            produccion.map((produccion, index) => (
              <div key={produccion.id} stle={(index%2 === 0) ? {flexDirection: "row"} : {flexDirection: "row-reverse"}} className={(index%2 === 0) ? "flex flex-col md:flex-row justify-center items-center w-[90%]  gap-4 py-4 " : "flex flex-col md:flex-row-reverse justify-center items-center  w-[90%]  gap-4 py-4 "}>
                <div className="flex justify-center items-center md:w-[50%]">
                  <img src={produccion.imagen} className="h-[470px]" alt={`Imagen de ${produccion.nombre}`} />
                </div>
                <div className={(index%2 === 0) ? "flex flex-col gap-4 justify-center items-center md:w-[50%] md:justify-start md:items-start lg:w-[40%]   pr-[100px]" : "flex flex-col gap-4 justify-center items-center md:w-[50%] md:justify-start md:items-start lg:w-[40%]  xl:pl-[100px] "}>
                  <div className="flex md:flex-col gap-2  ">
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

export default Production;
