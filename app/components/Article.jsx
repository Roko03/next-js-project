import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import {
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

export default function Article({ id,title, urlToImage, author, content, isActive }){
    return (
        <div className={isActive ? 'article active' : 'article'}>
            <div className="article-info">
                <h3>{title}</h3>
                <div className="article-image">
                    <Image src={urlToImage} alt="Image" width={500} height={300}/>
                </div>
            </div>
            <div className="article-author">
                <h4>{author}</h4>
                <p>{content}</p>
                <Link className="see-more" href={`/${title}`}>
                    <div className="see-more__circle">
                        <FontAwesomeIcon
                            icon={faChevronRight}
                        />
                    </div>
                    <div>SEE MORE</div>
                </Link>
            </div>  
        </div>
    )
}