import Header from "./components/Header";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";

//nepotreban url, makni ga
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

//nepotreban url, makni ga
const url2 =
  "https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&pageSize=3&apiKey=52a73d04b88e4d7588a5bcfdbebe2bbb";

//bilo bi lipse kad bi definira url sam za sebe i ove stvari dodava ka query parametre
//isto tako url nebi triba bit definiran ode
const url1 = `https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&pageSize=3&apiKey=bb2485dcd35545a0ba22522679b9c0fe`;

export default async function Home() {
  //bilo bi bolje da je fetch maknut u posebnu funkciju, ako ti na drugom pageu bude triba fetch, moras kopirat logiku
  // isto tako, ako zelis prominit nesto na fetchu, mora bi minjat na 32 mista
  const response = await fetch(url1);
  const data = await response.json();

  return (
    <>
      <main>
        {/* nije definirano, ali pametnije je stavljat header u layout.jsx jer ti se onda prikaze na svakom pageu */}
        <Header />
        <Hero />
        {/* lose ime za komponentu */}
        <Parallax data={data} />
      </main>
    </>
  );
}
