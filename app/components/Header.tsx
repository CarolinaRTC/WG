import React from "react";

export const Header = () => {
  return (
    <header className=" bg-orange-800 h-24 p-4 text-gray-100 font-bold drop-shadow-lg text-sm sm:text-base lg:text-xl fixed w-full z-10">
      <div className="lg:ml-44 lg:mr-44 ">
        <div className="flex justify-between">
          <div>
            <img
              className="max-h-16"
              src="img/logoantipesto.png"
              alt="Logo AntiPesto"
            />
          </div>
          <div className="max-h-16 flex flex-wrap items-center">
            <nav>
              <ul>
                <li className="space-x-2">
                  <a className="hover:text-gray-400" href="#home">
                    Home
                  </a>
                  <a className="hover:text-gray-400" href="#sobre">
                    Empresa
                  </a>
                  <a className="hover:text-gray-400" href="#serviços">
                    Serviços
                  </a>
                  <a className="hover:text-gray-400" href="#contato">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
