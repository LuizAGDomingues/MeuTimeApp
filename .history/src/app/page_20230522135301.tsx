import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen">
        <Header />
        <div className="flex">
          <p className="text-xl text-center w-[410px] ml-[962px] mt-[480px]">Descubra as últimas notícias do seu time, conheça o elenco completo, acompanhe os próximos jogos e confira estatísticas detalhadas para entender melhor o desempenho da equipe. Com uma interface intuitiva e amigável, você terá uma experiência imersiva ao explorar as informações de cada time e jogador.</p>
          <div>
            <p></p>
          </div>
        </div>
      </main>
      <section id="sobre" className="bg-[#d5e2f1]">
        Sobre
      </section>
    </>
  )
}
