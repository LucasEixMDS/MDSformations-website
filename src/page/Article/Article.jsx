import { useParams } from 'react-router-dom';
import articlesData from '../../json/Article.json';
import './article.scss'
import { CarrouselFormation } from 'components';
import CarrouselArticle from '../../components/carrousels/CarrouselArticle/CarrouselArticle'

function ArticlePage() {
    const { articleLink } = useParams();  // Récupère le titre de l'article depuis l'URL

    // Trouvez l'article correspondant
    const article = articlesData.find(a => a.articleLink.endsWith(articleLink));

    if (!article) {
        return <div>Article non trouvé</div>;
    }


    return (
        <div>
            <div className="article">
                <div className="article_header"
                style={{ backgroundImage: `url(${article.backgroundImage})` }}>
                    <h1>{article.titreh1}</h1>
                    <h2>{article.titreh2}</h2>
                </div>
            <div className="article_container">
                <div className="article_formatrice">
                    <div className="article_formatrice_photo">
                        <img src={article.formatrice.photo} alt="photo de la formatrice" />
                    </div>
                    <div className="article_formatrice_name">
                        <h3>{article.formatrice.name}</h3>
                        <p>{article.formatrice.date}</p>
                    </div>
                    <div className="article_formatrice_reseaux">

                    </div>
                </div>
                <p>{article.textPresentation}</p>
                <h4> {article.firstTitre} </h4>
                <p>{article.textReponse} </p>
                <h4>{article.explicationTitre} </h4>
                <ul>
                    {article.liste.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="home">
                <CarrouselFormation />
                <button className='article_button'>Toutes nos formations certifiantes</button>
                </div>
                <h4>{article.titreListe} </h4>
                <ul>
                    {article.listeSecond.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>
                    {article.lastText}
                </p>
                <p className='motcles'>{article.motCles} </p>
                
                    <div className="article_bar_container">
                        <div className="article_bar"></div>
                    </div>

                <div className="article_formatrice_bottom">
                    <div className="article_formatrice_bottom_photo">
                    <img src={article.formatrice.photo} alt="photo de la formatrice" />
                    </div>
                    <p><span>{article.formatrice.name} </span>{article.formatrice.text} </p>
                    
                </div>
                <div className="article_button_container">
                <button className='button_accompagnement'>Comprendre notre accompagnement</button>
                </div>
                <div className="article_last_container">
                    <h3>Envie de lire d'<span>autres articles ?</span></h3>
                    <div className="home_white">
                    <CarrouselArticle />
                    </div>
                    <button className='article_button_article'>Découvrir tous nos articles</button>
                </div>
                </div>
                
            
            </div> 
        </div>
    );
}

export default ArticlePage;
