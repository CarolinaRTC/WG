import React from "react";

export const Header = () => {
  return (
    <header className="bg-orange-800 h-24 p-4 text-gray-100 font-bold drop-shadow-lg text-sm fixed w-full z-10">
      <div className="w-1/2 flex justify-between">
        <div>
          <img
            className="max-h-16"
            src="img/logoantipesto.png"
            alt="Logo AntiPesto"
          />
        </div>
        <div className="w-1/2 max-h-16 flex items-center">
          <nav>
            <ul>
              <li className="space-x-2">
                <a className="hover:text-gray-400" href="">
                  Home
                </a>
                <a className="hover:text-gray-400" href="">
                  Empresa
                </a>
                <a className="hover:text-gray-400" href="">
                  Serviços
                </a>
                <a className="hover:text-gray-400" href="">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
