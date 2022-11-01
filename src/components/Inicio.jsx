import React from "react";

import papelizq from "../assets/papelizq.png";
import papelder from "../assets/papelder.png";
import inicioImg from "../assets/inicio-img.png";
import bg from "../assets/iniciobg.png";
import {Link} from 'react-router-dom'

function Inicio() {
  return (
    <div className="w-full h-full bg-[#190021] relative">
      <img className="w-screen h-screen object-cover " src={bg} />
      <img className="absolute w-1/3 top-0 left-0" src={papelizq} />
      <img className="absolute w-1/3  top-0 right-0" src={papelder} />
      <div className="text-white absolute top-[5%] flex flex-col  w-full justify-center items-center ">
        <h4 className="font-squada-one text-8xl text-[#F0BE04]">Día de </h4>
        <h2 className="font-squada-one text-9xl text-[#F34D58]">Muertos</h2>
        <img className="w-[460px]" src={inicioImg} />
        <p className="font-poppins w-[460px] mt-5 text-center">
          Día de Muertos, una celebración a la memoria y un ritual que
          privilegia el recuerdo sobre el olvido.
        </p>
        <div className="mt-4 mb-10">
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
