import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react'


export const Serviços = () => {
const data = [
  {id: '1', image: 'https://ik.imagekit.io/x5s4extzn/REABILITA%C3%87%C3%83O%20DE%20CATIVOS.png?updatedAt=1690401968539'},
  {id: '2', image: 'https://ik.imagekit.io/x5s4extzn/gnomoativado.png?updatedAt=1690401747144'},
  {id: '3', image: 'https://ik.imagekit.io/x5s4extzn/Capturas.png?updatedAt=1690401967537'},
]

  return (
    <section className=" text-xl m-10 w-xl w-max-sm">
      <h1 className="bg-orange-800 text-4xl text-gray-100 font-bold p-3">SERVIÇOS</h1>
      <Swiper
      slidesPerView={1}
      pagination={{ clickable:true }}
      navigation

      >
        {data.map( (item)=> (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt="slider"
              className="w-full h-22"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center text-xl">
      <h1 className="bg-orange-800 text-xl text-gray-100 font-bold p-3">Reabilitação de cativos</h1>
        <p className="text-base font-montserrat p-3">
        Depois da captura, a Anti-pesto realoca todos os cativos em sua sede, contudo, após enfrentar problemas de espaço, nossa empresa decidiu que precisávamos liberar essas criaturas, mas somente com uma transformação em seus hábitos prejudiciais a Tottington. Foi aí que nasceu uma nova máquina: Manipulation-o-Matic.</p>

        <p className="text-base font-montserrat p-3"> Conectando a Manipulation-o-Matic ao BV6000, e com a ajuda das ondas lunares para intensificar as ondas cerebrais, é possível passar afirmações aos coelhos. As mais certeiras que utilizamos são: "Vegetais são ruins" e "Diga não às cenouras, aos alfaces e às couve-flores".</p>

        <h1 className="bg-orange-800 text-xl text-gray-100 font-bold p-3">Câmeras 24/7</h1>
        <p className="text-base font-montserrat p-3">
        Está buscando uma segurança para seus momentos de sono e distração? A Anti-pesto conta com um sistema de câmeras perfeito para isso!</p> 
        <p className="text-base font-montserrat p-3">Disfarçadas de gnomos de jardim e munidas de sensores que captam movimentos suspeitos, as câmeras estão diretamente conectadas à sede da nossa empresa, de forma que, ao menor risco de integridade a sua plantação, nossa equipe já está pronta para agir.</p>

        <h1 className="bg-orange-800 text-xl text-gray-100 font-bold p-3">Capturas</h1>
        <p className="text-base font-montserrat p-3">
        Mais de 700 capturas foram bem-sucedidas na Vila Tottington, sendo previsto um aumento exponencial desse número com a aproximação da Competição Anual de Vegetais Gigantes de Tottington. Mas, como elas são realizadas?</p>

        <p className="text-base font-montserrat p-3 pb-4">Prezando pelos nossos valores, a equipe Anti-pesto optou pela captura mais humana possível. A nossa máquina de maior confiança é a BunVac 6000, indispensável para as criaturas que insistem em permanecer dentro de algum buraco de terra, que conta com o poder de sucção espetacular de 25 mil rpm, rabbits per minute. Ainda com uma tecnologia única tão avançada, gostamos de contar com nosso próprio cuidado e delicadeza ao usar ferramentas manuais para captura.</p>
      </div>
    </section>
  );
};