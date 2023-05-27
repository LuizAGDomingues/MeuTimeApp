import Header from "@/components/Header";
import LoginDialog from "@/components/LoginDialog";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen">
        <Header />
        <div className="flex">
          <p className="text-xl text-center w-[410px] ml-[962px] mt-[480px]">Descubra as últimas notícias do seu time, conheça o elenco completo, acompanhe os próximos jogos e confira estatísticas detalhadas para entender melhor o desempenho da equipe. Com uma interface intuitiva e amigável, você terá uma experiência imersiva ao explorar as informações de cada time e jogador.</p>
          <div className="flex flex-col items-center w-[356px] ml-20 mt-[340px]">
            <p className="text-xl text-center ">Cadastre-se agora e faça parte da comunidade Meu Time. Explore o mundo do futebol de uma maneira nova e emocionante, acompanhando seu clube do coração em cada jogada, gol e vitória. Não perca tempo, junte-se a nós e mostre todo o seu amor pelo futebol!"</p>
            <LoginDialog text="Cadastre-se e explore o universo do seu time!" className="font-normal w-80 text-base border-2 border-[#6B622B] ml-16"/>
          </div>
        </div>
      </main>
      <section id="sobre" className="bg-[#d5e2f1]">
        Sobre
      </section>
    </>
  )
}
