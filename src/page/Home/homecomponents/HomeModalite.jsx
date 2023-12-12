 import "./homeModalite.scss";

const Modalite = () => {
    return (
        <div className="modalite_Formation">
            <h3>Des formations <span>adaptées à vos besoins</span></h3>
            <p className="modalite-desktop">Lorsque vous vous inscrivez à l'une de nos formations, nous vous offrons un avantage inestimable : un accès complet et gratuit à notre plateforme de formation en ligne pendant une période de 6 mois. Notre plateforme de formation constitue un centre de ressources essentiel pour vous aider à exceller dans votre parcours de formation</p>
            <div className="container_modalite">
                <div className="container_modalite_left">
                    <div className="container_left_modal">
                        <div className="icon_container">
                            <div className="icon">
                                <p><img src="https://mdsformations-website-u5520.vm.elestio.app/ecole.svg" alt="icon apple d'une ecole" /></p>
                            </div>
                        </div>
                        <div className="h3_container">
                            <h3>Nos formations en ligne</h3>
                        </div>
                        <div className="modalite_container_button_left">
                            <button>Découvrir</button>
                        </div>
                    </div>
                    <div className="modalite-desktop-texte">
                       <p className="desk"><strong>Formations 100 % en ligne : la flexibilité à votre portée !</strong></p>
                        <p>Découvrez nos cours, protocoles, vidéos de démonstrations et exercices, conçus spécialement pour vous !
                    Que vous habitiez loin de notre centre ou préfériez apprendre à votre rythme, notre formation 100 % en ligne vous offre une solution flexible pour atteindre vos objectifs d'apprentissage</p>
                    </div>
                    <p>Vous disposez gratuitement à votre entrée en formation d’un accès illimité pendant 6 mois à notre plateforme de formation en ligne.</p>
                </div>
                <div className="container_modalite_right">
                    <div className="container_right_modal">
                        <div className="icon_container">
                            <div className="icon">
                                <p><img src="https://mdsformations-website-u5520.vm.elestio.app/maison.svg" alt="icon apple d'une maison" /></p>
                            </div>
                        </div>
                        <div className="h3_container">
                            <h3>Nos formations en présentiel</h3>
                        </div>
                        <div className="modalite_container_button_right">
                            <button>Découvrir</button>
                        </div>
                    </div>
                    <div className="modalite_desktop_puce">
                        <h3 className="puce_title"><strong>Notre plateforme de formation en ligne propose :</strong></h3>
                    <ul>
                        <li>Cours Complets : Accédez à tous nos programmes de cours de manière structurée.</li>
                        <li>Protocoles de Formation : Guides détaillés pour la mise en pratique des techniques apprises.</li>
                        <li>Vidéos Instructives : Démonstrations et conseils de nos experts.</li>
                        <li>Liberté d'Apprentissage : Apprenez à votre rythme, où vous le souhaitez.</li>
                    </ul>
                    </div>
                    
                    <p>Vous habitez loin notre centre ? Vous souhaitez suivre une formation à votre rythme ? Optez pour la formation 100 % en ligne.</p>
                </div>
                </div>
                <h4>Cours, protocoles, vidéos de démonstrations et exercices, réalisés pour vous !</h4>
        </div>
    );
};

export default Modalite;