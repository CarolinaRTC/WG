import React from "react";

export const Sobre = () => {
  return (
    <section id="sobre" className="text-xl m-10">
      <div className="text-center">
        <h1 className="bg-orange-800 text-4xl text-gray-100 font-bold p-3">
          SOBRE A EMPRESA
        </h1>
        <p className="text-base font-montserrat pt-4 p-3">
          Somos uma equipe de dedetizadores que tem como objetivo promover
          ambientes, especialmente jardins e hortas, livres de "parasitas". Em
          grande parte nosso trabalho é focado na retirada e realocação de
          coelhos, uma vez que seus hábitos costumam trazer diversos prejuízos
          para as plantações.
        </p>
        <p className="text-base text-center font-montserrat p-3">
          Nosso time é altamente treinado para executar de forma rápida e
          eficiente, utilizando ferramentas e tecnologias autorais que tem sua
          confiabilidade comprovada através de testes em situações diversas e de
          anos de experiência no ramo.
        </p>

        <p className="text-base text-center font-montserrat pb-2">
          Nossa empresa funciona bem em razão da forte base que seguimos:{" "}
        </p>
        <div className="flex justify-center gap-4">
          <p className="bg-green-800 rounded-md text-xl text-gray-100 text-center font-montserrat font-italic font-bold py-3 px-2">
            SAFE
          </p>
          <p className="bg-green-800 rounded-md text-xl text-gray-100 text-center font-montserrat font-italic font-bold py-3 px-2">
            SECURE
          </p>
          <p className="bg-green-800 rounded-md text-xl text-gray-100 text-center font-montserrat font-italic font-bold py-3 px-2">
            HUMANE
          </p>
        </div>
        <p className="text-base text-center font-montserrat pt-2 pb-4">
          Acreditamos que um serviço bem-feito é aquele em que todas as partes
          envolvidas saem ganhando, por isso a comunicação com os clientes é
          muito importante para nós.
        </p>
        <div className="flex items-center justify-center place-content-center">
          <img
            src="img/WGterno.png"
            alt="Wallace e Gromit de gravata sorrindo e brindando uma taça"
          />
        </div>
      </div>
    </section>
  );
};
