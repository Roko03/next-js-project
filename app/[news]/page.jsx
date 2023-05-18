import Header from "../components/Header";
import Image from "next/image";

export async function generateStaticParams(){
    const url = `https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&pageSize=3&apiKey=${process.env.API_KEY}`
    const response = await fetch(url);
    const data = await response.json();

    return data.articles.map((news) => ({
        news: toString(news.title)
    }))
}

export default async function NewsDetails({params}){

    const {news} = params;
    const url = `https://newsapi.org/v2/everything?q=${news}&from=2023-05-16&to=2023-05-16&sortBy=popularity&pageSize=1&apiKey=${process.env.API_KEY}`
    const response = await fetch(url);
    const data = await response.json();

    return (
        <>
            <main>
                <Header/>
                <div className="container">
                    <div className="article">
                        <div className="article-info">
                            <h3>{data.articles[0].title}</h3>
                            <Image src={data.articles[0].urlToImage} alt="Image" width={300} height={300}/>
                        </div>
                        <div className="article-author">
                            <h4>{data.articles[0].author}</h4>
                            <p>{data.articles[0].content}</p>
                        </div>  
                    </div>
                </div>
            </main>
        </>
    )
}