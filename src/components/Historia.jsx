import React from "react";
import bg from "../assets/inicio-bg.png";
import papelizq from "../assets/papelizq.png";
import papelder from "../assets/papelder.png";
import inicioImg from "../assets/inicio-img.png";
import {Link} from 'react-router-dom'
import historiapicado from '../assets/historiapicado.png'
import historiaimg from '../assets/historia-img.png'



function Historia() {
    return (
        <div className="w-full h-full bg-[#190021] relative">
          <img className="w-full h-[1050px] object-cover " src={bg} />
          <img className="absolute w-1/3 top-0 left-0" src={papelizq} />
          <img className="absolute w-1/3  top-0 right-0" src={papelder} />
          <div className="text-white absolute top-[7%] flex flex-col  w-full justify-center items-center ">
          <h4 className="font-squada-one text-5xl text-[#F0BE04]">Celebremos el</h4>
        <h2 className="font-squada-one text-5xl text-[#F34D58]">Día de Muertos</h2>
        <p className="font-poppins w-[340px] md:w-[450px] mt-5 text-center">
        Se festeja desde el 31 de octubre, y el 1 y 2 de noviembre, ya que el primer día, de acuerdo con el calendario católico, corresponde a Todos los Santos, dedicado a los muertos niños; y el primero, a los Fieles Difuntos, es decir, a los adultos fallecidos. El dos de noviembre las almas visitantes emprenden el retorno
        </p>
            <img className="h-[100px] mt-4 mb-4" src={historiapicado} />
            <img className="h-[400px]"  src={historiaimg} />
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
              <Link to="/celebracion">
                <button className="bg-[#F34D58] hover:bg-[#F0BE04] text-white font-bold py-2 px-4 border-b-4 rounded">
                  Celebración
                </button>
              </Link>
            </div>
          </div>
    
          <div></div>
        </div>
      );
}

export default Historia