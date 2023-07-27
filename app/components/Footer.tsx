import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-100 p-4">
      <div className="flex flex-col justify-center gap-5">
        <div>
          <h1 className="font-bold">Nossa localização:</h1>
          <p>Rua Caçando Coelhos, 123 - Vila dos Vegetais</p>
          <p>Cidade dos Coelhos</p>
        </div>
        <div>
          <h1 className="font-bold">Contato:</h1>
          <p>(99) 99999-9999</p>
          <p>antipesto@antipesto.com</p>
        </div>
        <div>
          <h1 className="font-bold">Navegue:</h1>
        </div>
      </div>
    </footer>
  );
};
