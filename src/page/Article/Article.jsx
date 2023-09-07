import { useParams } from 'react-router-dom';
import articlesData from '../../json/Article.json';

function ArticlePage() {
    const { articleTitle } = useParams();  // Récupère le titre de l'article depuis l'URL

    // Trouvez l'article correspondant
    const article = articlesData.find(a => a.articleLink.endsWith(articleTitle));

    if (!article) {
        return <div>Article non trouvé</div>;
    }


    return (
        <div>
            <div className="header_container">
            <h1>{article.titreh1}</h1>
            <h2>{article.titreh2}</h2>
            </div>
            
        </div>
    );
}

export default ArticlePage;
