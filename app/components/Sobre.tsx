import React from "react";

export const Sobre = () => {
  return (
    <section id="sobre" className="text-xl">
      <div className="text-center">
        <h1 className="bg-orange-800 text-2xl lg:text-4xl text-gray-100 font-bold p-3">
          SOBRE A EMPRESA
        </h1>
        <div className="m-10 mt-0 mb-0 lg:ml-44 lg:mr-44">
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
            confiabilidade comprovada através de testes em situações diversas e
            de anos de experiência no ramo.
          </p>
          <p className="text-base text-center font-montserrat p-3 pb-2">
            Nossa empresa funciona bem em razão da forte base que seguimos:{" "}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <p className="bg-green-800 rounded-md text-xl text-gray-100 text-center font-montserrat font-italic font-bold py-3 px-2">
              SEGURANÇA
            </p>
            <p className="bg-green-800 rounded-md text-xl text-gray-100 text-center font-montserrat font-italic font-bold py-3 px-2">
              TRANSPARÊNCIA
            </p>
            <p className="bg-green-800 rounded-md text-xl text-gray-100 text-center font-montserrat font-italic font-bold py-3 px-2">
              HUMANIDADE
            </p>
          </div>
          <p className="text-base font-montserrat pt-4 p-3">
            A comunicação entre nosso time e o cliente é essencial, pois
            acreditamos que um serviço bem-feito só é possível quando executado
            com transparência, cuidado e excelência.
          </p>
          <p className="text-base text-center font-montserrat p-3 pb-4">
            Nossa satisfação é poder contribuir para o bem-estar daqueles que
            contratam nossos serviços!
          </p>

          <div className="flex items-center justify-center place-content-center">
            <img
              src="img/WGterno.png"
              alt="Wallace e Gromit de gravata sorrindo e brindando uma taça"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
