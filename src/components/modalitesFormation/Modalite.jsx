import "./modalite.scss";

const Modalite = () => {
    return (
        <div className="modalite_Formation">
            <h3>Des formations <span>adaptées à vos besoins</span></h3>
            <div className="container_modalite">
                <div className="container_modalite_left">
                    <div className="container_left_modal">
                        <div className="icon_container">
                    <div className="icon">
                        <p>🏫</p>
                    </div>
                    </div>
                    <div className="h3_container">
                        <h3>Nos formations en ligne</h3>
                        </div>
                        <button>Découvrir</button>
                    
                    </div>
                    <p>Vous disposez gratuitement à votre entrée en formation d’un accès illimité pendant 6 mois à notre plateforme de formation en ligne.</p>
                </div>
                <div className="container_modalite_right">
                    <div className="container_right_modal">
                    <div className="icon_container">
                    <div className="icon">
                        <p>🏠</p>
                        </div>
                        </div>
                        <div className="h3_container">
                        <h3>Nos formations en présentiel</h3>
                        </div>
                        <button>Découvrir</button>
                    
                    </div>
                    <p>Vous habitez loin notre centre ? Vous souhaitez suivre une formation à votre rythme ? Optez pour la formation 100 % en ligne.</p>
                </div>
                </div>
                <h4>Cours, protocoles, vidéos de démonstrations et exercices, réalisés pour vous !</h4>
        </div>
    );
};

export default Modalite;