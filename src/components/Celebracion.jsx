import React from "react";
import bg from "../assets/inicio-bg.png";
import papelizq from "../assets/papelizq.png";
import papelder from "../assets/papelder.png";
import {Link} from 'react-router-dom'
import historiapicado from '../assets/historiapicado.png'
import historiaimg from '../assets/celebracion-img.png'

function Celebracion() {
  return (
    <div className="w-full h-[1050px] bg-[#190021] relative">
      <img className="w-screen h-screen object-cover " src={bg} />
      <img className="absolute w-1/3 top-0 left-0" src={papelizq} />
      <img className="absolute w-1/3  top-0 right-0" src={papelder} />
      <div className="text-white absolute top-[7%] flex flex-col  w-full justify-center items-center ">
      <h4 className="font-squada-one text-5xl text-[#F0BE04]">Celebración del</h4>
    <h2 className="font-squada-one text-6xl text-[#F34D58]">Día de Muertos</h2>
    <p className="font-poppins w-[340px] md:w-[450px] mt-5 text-center">
    En la Ciudad de México, en la Alcaldía de Tláhuac, se encuentra un pequeño poblado de nombre Mixquic, que significa “donde hay mezquite”, uno de los lugares más visitados durante estos días ya que su celebración se apega a las tradiciones mexicanas y se lleva a cabo conjuntamente con la feria del pueblo. El día 2 de noviembre se realiza “La Alumbrada”, donde miles de velas iluminan las tumbas decoradas con flores.
    </p>
        <img className="h-[400px] mt-5 mb-5"  src={historiaimg} />
        <div className="mt-4 mb-10">
          <Link to="/">
            <button className="bg-[#F34D58] hover:bg-[#F0BE04] mr-4 text-white font-bold py-2 px-4 border-b-4 rounded">
              Inicio
            </button>
          </Link>
          <Link to="/tradicion">
            <button className="bg-[#F34D58] hover:bg-[#F0BE04] mr-4 text-white font-bold py-2 px-4 border-b-4 rounded">
              Tradición
            </button>
          </Link>
          <Link to="/historia">
            <button className="bg-[#F34D58] hover:bg-[#F0BE04] text-white font-bold py-2 px-4 border-b-4 rounded">
              Historia
            </button>
          </Link>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Celebracion