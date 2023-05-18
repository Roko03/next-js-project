"use client"
import { useState } from "react";
import Article from "./Article";

export default function Parallax({data}) {
  const [slide,setSlide] = useState(1);

  console.log(data);

  return (
    <section className="parallax">
      <div className="container">
        <div className="slider">
          <div className="slider__circle-small"></div>
          <div className="slider__circle-big">
            <ul>
              {
                data.articles.map((el,index) =>{
                  return (
                    <li className={slide == (index + 1) ? 'active' : ''} onClick={() => setSlide(index + 1)} key={index}>Article {index + 1}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {
            data.articles.map((news,index) => {
                return (
                    <Article 
                        key={index}
                        id={index}
                        title={news.title} 
                        urlToImage={news.urlToImage} 
                        author={news.author} 
                        content={news.content}
                        isActive={slide == (index + 1) ? true : false}
                    />
                )
            })
        }
      </div>
    </section>
  );
}
