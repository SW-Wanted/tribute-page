function TributeTitle() {
  return (
    <section id="tribute-title">
      <h1 id="title">Lionel Andrés Messi Cuccittini</h1>
      <p id="description">O melhor jogador de futebol de toda a história</p>
    </section>
  );
}

function TributeImg() {
  return (
    <section id="tribute-img">
      <figure id="img-div">
        <img
          id="image"
          src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-09/nba-plain--fa9027e5-61b3-42ed-8b99-ba7019915682.png?itok=fpJ32aqH"
          alt=""
        />
        <figcaption id="img-caption">
          Lionel Messi com argentina na Copa do Mundo FIFA 2022
        </figcaption>
      </figure>
    </section>
  );
}

function TributeInfo() {
  return (
    <section id="tribute-info">
      <article id="profile">
        <h2>Perfil</h2>
        <p>
          <span className="bold">Nome completo:</span>{" "}
          <span>Lionel Andrés Messi Cuccittini</span>
        </p>
        <p>
          <span className="bold">Data de nascimento:</span>{" "}
          <span>24 de junho de 1987</span>
        </p>
        <p>
          <span className="bold">Local de nascimento:</span>{" "}
          <span>Rosario, Argentina</span>
        </p>

        <p>
          Lionel Messi é amplamente reconhecido como um dos maiores jogadores de
          futebol de todos os tempos. Sua habilidade técnica, visão de jogo e
          capacidade de driblar adversários com facilidade o tornaram uma lenda
          no esporte. Desde cedo, Messi demonstrou um talento excepcional, e sua
          carreira no futebol é marcada por uma combinação de determinação,
          humildade e sucesso extraordinário, tanto em clubes quanto na seleção
          argentina.
        </p>
      </article>

      <article id="achievment">
        <h2>Conquistas</h2>
        <p>
          Ao longo de sua brilhante carreira, Lionel Messi acumulou uma série de
          conquistas notáveis que o colocam no panteão dos grandes do futebol
          mundial:
        </p>
        <ul>
          <li>
            7 vezes vencedor da Bola de Ouro (2009, 2010, 2011, 2012, 2015,
            2019, 2021), um recorde para qualquer jogador de futebol.
          </li>
          <li>
            Campeão da Copa do Mundo FIFA 2022 com a seleção da Argentina,
            conquistando o tão sonhado título mundial.
          </li>
          <li>
            4 vezes vencedor da Liga dos Campeões da UEFA com o FC Barcelona
            (2006, 2009, 2011, 2015).
          </li>
          <li>10 vezes campeão da La Liga Espanhola com o FC Barcelona.</li>
          <li>
            3 vezes vencedor da Supercopa da UEFA e 3 vezes vencedor da Copa do
            Mundo de Clubes da FIFA.
          </li>
          <li>
            Maior artilheiro da história do Barcelona e da La Liga, com mais de
            600 gols marcados pelo clube.
          </li>
          <li>
            Vencedor de diversas copas nacionais e títulos internacionais ao
            longo de sua carreira no Barcelona e PSG.
          </li>
        </ul>
      </article>

      <article id="timeline">
        <h2>Linha do Tempo</h2>
        <ul>
          <li>1987: Lionel Messi nasce em Rosario, Argentina.</li>
          <li>
            2000: Aos 13 anos, Messi muda-se para Barcelona, Espanha, para
            ingressar na famosa academia La Masia do FC Barcelona.
          </li>
          <li>
            2004: Faz sua estreia na equipe principal do Barcelona, marcando o
            início de uma era de sucesso.
          </li>
          <li>
            2009: Vence sua primeira Bola de Ouro, após ajudar o Barcelona a
            conquistar o "triplete" — Liga Espanhola, Copa do Rei e Liga dos
            Campeões.
          </li>
          <li>
            2012: Marca 91 gols em um único ano civil, quebrando recordes
            mundiais.
          </li>
          <li>2015: Conquista sua quarta Liga dos Campeões com o Barcelona.</li>
          <li>
            2021: Transfere-se para o Paris Saint-Germain (PSG), após mais de 20
            anos no Barcelona.
          </li>
          <li>
            2022: Conquista a Copa do Mundo com a Argentina, após uma campanha
            histórica no Catar.
          </li>
        </ul>
      </article>

      <article id="legacy">
        <h2>Legado</h2>
        <p>
          Lionel Messi deixou um impacto indelével no mundo do futebol. Seu
          estilo de jogo, caracterizado por dribles curtos e rápidos, passes
          precisos e uma incrível capacidade de finalização, inspirou uma
          geração de fãs e jogadores ao redor do mundo. Além de suas habilidades
          em campo, Messi é admirado por sua humildade e trabalho árduo,
          raramente ostentando o status de celebridade que seu talento lhe
          proporcionou.
        </p>
        <p>
          Seu legado vai muito além dos títulos e recordes: ele é um embaixador
          do futebol e um exemplo para futuras gerações, tanto pela maneira como
          joga quanto pelo comportamento dentro e fora dos gramados. Messi não
          só ajudou a redefinir o que significa ser um jogador de futebol de
          elite, mas também uniu fãs de diferentes culturas e regiões através de
          seu amor pelo esporte.
        </p>
      </article>
      <p id="seemore">
        Para mais informações sobre Lionel Messi{" "}
        <a
          id="tribute-link"
          href="https://en.wikipedia.org/wiki/Lionel_Messi"
          target="_blank"
          className="bold"
        >
          clique aqui
        </a>
      </p>
    </section>
  );
}

export default function App() {
  return (
    <main id="main">
      <TributeTitle />
      <TributeImg />
      <TributeInfo />
    </main>
  );
}
