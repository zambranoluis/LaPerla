const AsideLeft = () => {

  const links = [
    { id: 0, label: "Inicio", path: "/" },
    { id: 1, label: "Historia", path: "/historia" },
    { id: 2, label: "Producción", path: "/produccion" },
    { id: 3, label: "Sostenibilidad", path: "/sontenibilidad" },
    // { id: 4, label: "Contacto", path: "/contacto" },
  ];

  return (
    <aside id="aside" className=" hidden absolute z-[2] w-[170px] flex h-[50vh] border-white rounded-br-md border-b-2 border-r-2 backdrop-blur-sm">
      <ul className="flex  flex-col px-4 py-2 gap-2 h-[40%] w-[170px] bg-[#193C34] justify-center items-center ">
          {links.map((link) => (
            <li key={link.id} className="flex  justify-center items-center ">
              <a href={link.path} className="text-md text-[#EDEFE1] font-bold">{link.label}</a>
            </li>
          ))}
        </ul>
    </aside>
  )
}

export default AsideLeft