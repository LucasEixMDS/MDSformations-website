import "./differentFinancement.scss";


const ValideIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219Z" fill="#7BC8CB"/>
      <path d="M8.86719 14.7363C8.53516 14.7363 8.26172 14.5996 8.00781 14.2578L5.55664 11.25C5.41016 11.0547 5.32227 10.8398 5.32227 10.6152C5.32227 10.1758 5.66406 9.81445 6.10352 9.81445C6.38672 9.81445 6.60156 9.90234 6.8457 10.2246L8.82812 12.7832L12.998 6.08398C13.1836 5.79102 13.4375 5.63477 13.6914 5.63477C14.1211 5.63477 14.5215 5.92773 14.5215 6.38672C14.5215 6.60156 14.3945 6.82617 14.2773 7.03125L9.6875 14.2578C9.48242 14.5801 9.19922 14.7363 8.86719 14.7363Z" fill="white"/>
    </svg>
  );
  

const DifferentFinancement = () => {


    return (
        <div className="differentFinancement">

            <div className="headerDifferentFinancement">
                <h1>Comprendre les différents financements</h1>
                <h2>L'accès à la formation est toujours possible</h2>
            </div>

            <div className="containerDifferentFinancement">
                <p>La formation professionnelle est un investissement essentiel pour votre avenir, mais nous comprenons que la question du financement peut être un facteur déterminant. C'est pourquoi nous mettons à votre disposition une variété d'options de financement pour rendre votre parcours de formation aussi accessible que possible.</p>

                <div className="puceDiffFinance">
                    <div className="puce">
                    <ValideIcon />
                    </div>
                    <div className="text">
                        <h3>Financement personnel :</h3>
                        <p>Le financement personnel est une option courante pour ceux qui souhaitent investir dans leur propre avenir professionnel. Vous avez la flexibilité de choisir le moment qui vous convient le mieux pour payer les frais de formation.</p>
                        <button>Notre aide au financement personnel</button>
                    </div>
                </div>

                <div className="puceDiffFinance">
                    <div className="puce">
                    <ValideIcon />
                    </div>
                    <div className="text">
                        <h3>Compte personnel de formation (CPF) :</h3>
                        <p>Le CPF est un dispositif de financement accessible à tous les actifs. Vous pouvez utiliser vos heures CPF pour couvrir les coûts de formation. Cette option est idéale si vous avez accumulé des heures CPF non utilisées.</p>
                        <button>Comment utiliser son CPF ?</button>
                    </div>
                </div>

                <div className="puceDiffFinance">
                    <div className="puce">
                    <ValideIcon />
                    </div>
                    <div className="text">
                        <h3>Organismes paritaires collecteurs agréés (OPCA) :</h3>
                        <p>Les OPCA sont des organismes de financement qui prennent en charge les coûts de formation pour les salariés et les entreprises. Vous pouvez vous renseigner auprès de votre employeur ou de votre OPCA pour connaître les possibilités de financement disponibles.</p>
                    </div>
                </div>

                <div className="puceDiffFinance">
                    <div className="puce">
                    <ValideIcon />
                    </div>
                    <div className="text">
                        <h3>Pôle emploi :</h3>
                        <p>Si vous êtes en recherche d'emploi, Pôle Emploi peut parfois financer tout ou partie de votre formation pour améliorer vos compétences et augmenter vos chances de réintégrer le marché du travail.</p>
                    </div>
                </div>

                <div className="puceDiffFinance">
                    <div className="puce">
                    <ValideIcon />
                    </div>
                    <div className="text">
                        <h3>Contrats de professionnalisation :</h3>
                        <p>Les contrats de professionnalisation offrent une opportunité de formation en alternance rémunérée. Si vous êtes en mesure de signer un tel contrat, votre formation peut être financée par l'entreprise employeuse.</p>
                    </div>
                </div>

                <div className="puceDiffFinance">
                    <div className="puce">
                    <ValideIcon />
                    </div>
                    <div className="text">
                        <h3>Aides spécifiques :</h3>
                        <p>Il existe également diverses aides spécifiques pour certains publics, telles que les demandeurs d'asile, les personnes en reconversion professionnelle, ou les personnes en situation de handicap. Ces aides visent à faciliter l'accès à la formation pour tous.</p>
                    </div>
                </div>

                <div className="puceDiffFinance">
                    <div className="puce">
                    <ValideIcon />
                    </div>
                    <div className="text">
                        <h3>Aides et financements pour les personnes en situation de handicap :</h3>
                        <p>Nous sommes déterminés à rendre nos formations accessibles à tous, y compris aux personnes en situation de handicap. C'est pourquoi nous vous encourageons à explorer les aides et financements spécifiques disponibles pour vous soutenir dans votre parcours de formation.</p>
                        <button>Notre engagement pour l’inclusivité</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DifferentFinancement;