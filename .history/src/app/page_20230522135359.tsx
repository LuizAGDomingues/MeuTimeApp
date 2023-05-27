import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen">
        <Header />
        <div className="flex">
          <p className="text-xl text-center w-[410px] ml-[962px] mt-[480px]">Descubra as últimas notícias do seu time, conheça o elenco completo, acompanhe os próximos jogos e confira estatísticas detalhadas para entender melhor o desempenho da equipe. Com uma interface intuitiva e amigável, você terá uma experiência imersiva ao explorar as informações de cada time e jogador.</p>
          <div>
            <p className="text-xl text-center w-[356px] mt-[400px]">Cadastre-se agora e faça parte da comunidade Meu Time. Explore o mundo do futebol de uma maneira nova e emocionante, acompanhando seu clube do coração em cada jogada, gol e vitória. Não perca tempo, junte-se a nós e mostre todo o seu amor pelo futebol!"</p>
          </div>
        </div>
      </main>
      <section id="sobre" className="bg-[#d5e2f1]">
        Sobre
      </section>
    </>
  )
}
