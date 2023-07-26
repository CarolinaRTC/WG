import React from "react";

export const Contato = () => {
  return (
    <section className="m-10 flex flex-col space-y-4">
      <h1 className="font-bold text-xl">CONTATO</h1>
      <input
        type="Nome"
        placeholder="Nome"
        className="px-2 py-1 focus: outline-none border border-gray-200 focus:border-gray-500 rounded-md"
      />
      <input
        type="E-mail"
        placeholder="E-mail"
        className="px-2 py-1 focus: outline-none border border-gray-200 focus:border-gray-500 rounded-md"
      />
      <input
        type="Celular"
        placeholder="Telefone"
        className="px-2 py-1 focus: outline-none border border-gray-200 focus:border-gray-500 rounded-md"
      />
      <input
        type="Descrição"
        placeholder="Mensagem"
        className="h-20 px-2 py-1 focus: outline-none border border-gray-200 focus:border-gray-500 rounded-md"
      />
    </section>
  );
};
