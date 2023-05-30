import Header from "@/components/Header";
import LoginDialog from "@/components/LoginDialog";

export default function Home() {
  return (
    <main className="landingpage w-full h-screen relative overflow-auto">
      <Header />
      <div className="flex w-full">
        <p className="text-xl text-center w-[25.5rem] hidden 2xl:block 2xl:ml-[60rem] 2xl:mt-[30rem]">Descubra as últimas notícias do seu time, conheça o elenco completo, acompanhe os próximos jogos e confira estatísticas detalhadas para entender melhor o desempenho da equipe. Com uma interface intuitiva e amigável, você terá uma experiência imersiva ao explorar as informações de cada time e jogador.</p>
        <div className="flex flex-col w-[22.2rem] mt-[20rem] md:ml-[30rem] lg:ml-[50rem] lg:mt-[24rem] xl:ml-[60rem] xl:mt-[23rem] 2xl:ml-20">
          <p className="text-xl text-center text-white md:text-black">Cadastre-se agora e faça parte da comunidade Meu Time. Explore o mundo do futebol de uma maneira nova e emocionante, acompanhando seu clube do coração em cada jogada, gol e vitória. Não perca tempo, junte-se a nós e mostre todo o seu amor pelo futebol!"</p>
          <LoginDialog text="Cadastre-se e explore o universo do seu time!" className="font-normal w-80 text-base border-2 border-[#6B622B] ml-8"/>
        </div>
      </div>
    </main>
  )
}
