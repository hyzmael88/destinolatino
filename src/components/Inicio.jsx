import React from "react";

import papelizq from "../assets/papelizq.png";
import papelder from "../assets/papelder.png";
import inicioImg from "../assets/inicio-img.png";
import bg from "../assets/inicio-bg.png";
import {Link} from 'react-router-dom'

function Inicio() {
  return (
    <div className="w-full h-[950px] pb-5 bg-[#190021] relative">
      <img className="w-full h-full object-cover " src={bg} />
      <img className="absolute w-1/3 top-0 left-0" src={papelizq} />
      <img className="absolute w-1/3  top-0 right-0" src={papelder} />
      <div className="text-white absolute top-[5%] flex flex-col  w-full justify-center items-center ">
        <h4 className="font-squada-one text-5xl text-[#F0BE04]">Día de </h4>
        <h2 className="font-squada-one text-7xl  text-[#F34D58]">Muertos</h2>
        <img className="w-[460px]" src={inicioImg} />
        <p className="font-poppins w-full md:w-[450px] mt-5 text-center">
        Cada sociedad afronta la muerte de maneras diferentes pero los mexicanos lo hacen de una manera muy particular. Son varios días de fiesta y ritual para recordar a seres queridos y familiares cuyas almas, según la costumbre, vuelven por una noche a compartir con el mundo de los vivos
        </p>
        <div className="mt-4 ">
          <Link to="/historia">
            <button className="bg-[#F34D58] hover:bg-[#F0BE04] mr-4 text-white font-bold py-2 px-4 border-b-4 rounded">
              Historia
            </button>
          </Link>
          <Link to="/tradicion">
            {" "}
            <button className="bg-[#F34D58] hover:bg-[#F0BE04] mr-4 text-white font-bold py-2 px-4 border-b-4 rounded">
              Tradicion
            </button>{" "}
          </Link>
          <Link to="/celebracion">
            {" "}
            <button className="bg-[#F34D58] hover:bg-[#F0BE04] text-white font-bold py-2 px-4 border-b-4 rounded">
              Celebracion
            </button>
          </Link>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Inicio;
