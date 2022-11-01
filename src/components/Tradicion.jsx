import React from "react";
import bg from "../assets/inicio-bg.png";
import papelizq from "../assets/papelizq.png";
import papelder from "../assets/papelder.png";
import inicioImg from "../assets/inicio-img.png";
import {Link} from 'react-router-dom'
import historiapicado from '../assets/historiapicado.png'
import historiaimg from '../assets/tradicion-imagen.png'

function Tradicion() {
    return (
        <div className="w-full h-[1150px] bg-[#190021] relative">
          <img className="w-full h-full object-cover " src={bg} />
          <img className="absolute w-1/3 top-0 left-0" src={papelizq} />
          <img className="absolute w-1/3  top-0 right-0" src={papelder} />
          <div className="text-white absolute top-[7%] flex flex-col  w-full justify-center items-center ">
          <h4 className="font-squada-one text-5xl text-[#F0BE04]">Tradiciones del</h4>
        <h2 className="font-squada-one text-6xl text-[#F34D58]">Día de Muertos</h2>
        <p className="font-poppins w-[340px] md:w-[450px] mt-5 text-center">
        Cada año muchas familias colocan ofrendas y altares decorados con flores de cempasúchil, papel picado, calaveritas de azúcar, pan de muerto, mole o algún platillo que le gustaba a sus familiares a quien va dedicada la ofrenda, y al igual que en tiempos prehispánicos, se coloca incienso para aromatizar el lugar.        </p>
            <img className="h-[100px] mt-4 mb-4" src={historiapicado} />
            <img className="h-[400px]"  src={historiaimg} />
            <div className="mt-4 mb-10">
              <Link to="/">
                <button className="bg-[#F34D58] hover:bg-[#F0BE04] mr-4 text-white font-bold py-2 px-4 border-b-4 rounded">
                  Inicio
                </button>
              </Link>
              <Link to="/historia">
                <button className="bg-[#F34D58] hover:bg-[#F0BE04] mr-4 text-white font-bold py-2 px-4 border-b-4 rounded">
                  Historia
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

export default Tradicion