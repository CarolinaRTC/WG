import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-100 p-4 text-sm sm:text-base lg:text-lg">
      <div className="flex flex-col lg:justify-between lg:flex-row lg:space-x-6 lg:ml-44 lg:mr-44">
        <div>
          <h1 className="font-bold">Nossa localização:</h1>
          <p>Rua Caçando Coelhos, 123</p>
          <p>Vila Vegetais</p>
          <p>Cidade dos Coelhos</p>
        </div>
        <div>
          <h1 className="font-bold">Contato:</h1>
          <p>(99) 99999-9999</p>
          <p>antipesto@antipesto.com</p>
        </div>
        <div>
          <h1 className="font-bold">Navegue:</h1>
          <nav>
            <ul>
              <li className="space-x-2 lg:flex lg:flex-col lg:space-x-0">
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
    </footer>
  );
};
