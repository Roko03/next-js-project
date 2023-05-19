import Header from "../components/Header";
import Image from "next/image";

export async function generateStaticParams(){
    const url = `https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&pageSize=3&apiKey=${process.env.API_KEY}`
    const response = await fetch(url);
    const data = await response.json();

    return data.articles.map((news) => ({
        news: news.title
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
                {
                    data.articles.map((news) => {
                        return (
                            <div className="container">
                                <div className="article">
                                    <div className="article-info">
                                        <h3>{news.title}</h3>
                                        <Image src={news.urlToImage} alt="Image" width={300} height={300}/>
                                    </div>
                                    <div className="article-author">
                                        <h4>{news.author}</h4>
                                        <p>{news.content}</p>
                                    </div>  
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}