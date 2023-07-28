import React from "react";

export const Contato = () => {
  return (
    <section
      id="contato"
      className="m-10 flex flex-col space-y-4 lg:ml-44 lg:mr-44"
    >
      <h1 className="font-bold text-2xl text-center">CONTATO</h1>
      <input
        type="Nome"
        placeholder="Nome"
        className="px-2 py-1 focus:outline-none border border-gray-200 focus:border-gray-500 rounded-md"
      />
      <input
        type="E-mail"
        placeholder="E-mail"
        className="px-2 py-1 focus:outline-none border border-gray-200 focus:border-gray-500 rounded-md"
      />
      <input
        type="Celular"
        placeholder="Telefone"
        className="px-2 py-1 focus:outline-none border border-gray-200 focus:border-gray-500 rounded-md"
      />
      <input
        type="Descrição"
        placeholder="Mensagem"
        className="h-20 px-2 py-1 focus:outline-none border border-gray-200 focus:border-gray-500 rounded-md"
      />
      <div className="flex justify-center">
        <button className=" bg-orange-800 px-4 py-2 rounded-full text-gray-100 hover:bg-orange-900 font-bold text-md transition hover:scale-110">
          ENVIAR
        </button>
      </div>
    </section>
  );
};
