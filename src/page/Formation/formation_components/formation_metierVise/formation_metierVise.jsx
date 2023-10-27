import "./formation_metierVise.scss"

const formation_metierVise = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };

    return (
        <div className="metierVise-container">
            <h4>Explorez la carrière passionnant de {formation.articleTitle} et découvrez le succès à travers <span style={colorStyle}>les yeux d'un ancien stagiaire !</span></h4>
        </div>
    );
};

export default formation_metierVise;