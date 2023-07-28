Este é um projeto expositivo para aplicação e demonstração de conhecimentos básicos de [GitHub](https://github.com/), [Next](https://nextjs.org/), [React](https://react.dev/), [Tailwind](https://tailwindcss.com/), [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) e [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS).

## BRIEFING

A ideia era produzir uma página de prestação de serviços para os clientes fictícios Wallace e Gromit, personagens de um filme de desenho animado.

<img src="https://ik.imagekit.io/crtc/New_Folder/homepage.png?updatedAt=1690503959302">

## PLANEJAMENTO

Esboço para construção do projeto:

- Conhecer o cliente, seus serviços e sua marca empresarial.

- Entender os componentes necessários para atender ao briefing.

- Lançar as bases do projeto definindo e programando sua estrutura, criando um repositório no GitHub.

- Elaborar cada componente e acompanhar sucessivos feedbacks até a apresentação e entrega de projeto.

## CÓDIGO

O site é uma página única dividida em:

```bash
1. Navbar
2. Home
3. Sobre a Empresa
4. Serviços
5. Contato
6. Footer
```

Em suma, o código no arquivo principal, denominado page.tsx, ficou da seguinte maneira:

```bash
"use client";
import React, { useEffect, useLayoutEffect, useContext, createContext, forwardRef, useState, useRef } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Sobre } from "./components/Sobre";
import { Serviços } from "./components/Serviços";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
```

## DESAFIOS

Os maiores desafios na produção desse projeto se concentrou em alguns pontos específicos listados abaixo por ordem de dificuldade:

3º. Navbar: Tivemos problemas com a organização dos elementos, os comportamento não saiam conforme esperado...

2º. Carrossel: A nossa funcionalidade especial também causou dor de cabeça... Muitos "imports" e definições até então desconhecidas por nós.

1º. GitHub: Tivemos que fazer novo repositório com o tanto de problema que estávamos tendo... Os arquivos subiam, mas por alguma razão o "git pull" não trazia informações feitas pelo outro membro da equipe de projeto.

**Gostariam de ver o resultado final? Acesse nosso repositório:
[Wallace e Gromit](https://github.com/CarolinaRTC/WG.git).**

_Fica aqui nosso agradecimento aos mais experientes da Byron que tiveram a maior paciência para nos ensinarem! Rumo ao topo!_ 💙

<img src="https://ik.imagekit.io/crtc/New_Folder/WGterno.png?updatedAt=1690505592147">
