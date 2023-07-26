import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Sobre } from "./components/Sobre";
import { Serviços } from "./components/Serviços";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";

const page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <Header />
      <div>
        <Home />
        <Sobre />
        <Serviços />
        <Contato />
      </div>
      <Footer />
    </main>
  );
};

export default page;
