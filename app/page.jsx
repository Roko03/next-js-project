import Header from "./components/Header"
import Hero from "./components/Hero"
import Parallax from "./components/Parallax"

const url = "https://pokeapi.co/api/v2/pokemon/ditto"

const url2 = "https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&pageSize=3&apiKey=52a73d04b88e4d7588a5bcfdbebe2bbb"

const url1 = `https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&pageSize=3&apiKey=${process.env.API_KEY}`;

export default async function Home() {

  const response = await fetch(url1);
  const data = await response.json()

  return (
    <>
      <main>
        <Header/> 
        <Hero/>
        <Parallax data={data}/>
      </main>

    </>
  )
}
